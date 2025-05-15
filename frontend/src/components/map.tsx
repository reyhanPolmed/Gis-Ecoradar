"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import type { TrashBin, PollutedRiver, FloodArea } from "@/lib/api"

// Fix Leaflet icon issues
const fixLeafletIcon = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "/trash-bin-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

// Create custom icon for trash bins based on condition
const createTrashBinIcon = (condition: string): L.DivIcon => {
  // Different colors for different conditions
  const getColor = (): string => {
    switch (condition?.toLowerCase()) {
      case "baik":
        return "#2ecc71" // Green for good condition
      case "sedang":
        return "#f39c12" // Orange for fair condition
      case "buruk":
        return "#e74c3c" // Red for poor condition
      default:
        return "#34495e" // Dark blue for unknown condition
    }
  }

  return L.divIcon({
    className: "custom-icon",
    html: `<div style="background-color: ${getColor()}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  })
}

// Format date for display
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

interface MapProps {
  trashBins: TrashBin[]
  pollutedRivers: PollutedRiver[]
  floodAreas: FloodArea[]
  selectedItem: TrashBin | PollutedRiver | FloodArea | null
  onMarkerClick: (item: TrashBin | PollutedRiver | FloodArea) => void
  activeDataType: "trashBins" | "pollutedRivers" | "floodAreas"
}

export default function Map({
  trashBins,
  pollutedRivers,
  floodAreas,
  selectedItem,
  onMarkerClick,
  activeDataType,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)
  const markersRef = useRef<Record<string, L.Marker>>({})
  const polylinesRef = useRef<Record<string, L.Polyline>>({})
  const polygonsRef = useRef<Record<string, L.Polygon>>({})

  useEffect(() => {
    if (!mapRef.current) return

    fixLeafletIcon()

    // Initialize map if it doesn't exist
    if (!leafletMap.current) {
      // Initialize map with zoomControl set to false to disable default zoom controls
      leafletMap.current = L.map(mapRef.current, {
        zoomControl: false, // Disable default zoom control
      }).setView([3.595196, 98.672222], 13)  // Default to Jakarta

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap.current)

      // Add zoom control to bottom right
      L.control
        .zoom({
          position: "bottomright", // Position zoom controls at bottom right
        })
        .addTo(leafletMap.current)
    }

    // Clear existing markers, polylines, and polygons based on active data type
    if (activeDataType === "trashBins") {
      // Clear trash bin markers
      Object.values(markersRef.current).forEach((marker) => {
        if (leafletMap.current) leafletMap.current.removeLayer(marker)
      })
      markersRef.current = {}
    } else if (activeDataType === "pollutedRivers") {
      // Clear river polylines
      Object.values(polylinesRef.current).forEach((polyline) => {
        if (leafletMap.current) leafletMap.current.removeLayer(polyline)
      })
      polylinesRef.current = {}
    } else if (activeDataType === "floodAreas") {
      // Clear flood area polygons
      Object.values(polygonsRef.current).forEach((polygon) => {
        if (leafletMap.current) leafletMap.current.removeLayer(polygon)
      })
      polygonsRef.current = {}
    }

    // Add markers for trash bins if active
    if (activeDataType === "trashBins") {
      trashBins.forEach((bin) => {
        if (!leafletMap.current) return

        const marker = L.marker([bin.geom.coordinates[1], bin.geom.coordinates[0]], {
          icon: createTrashBinIcon(bin.kondisi),
        }).addTo(leafletMap.current)

        marker.bindPopup(`
          <div style="min-width: 200px;">
            <h3 style="margin: 0 0 5px; font-weight: bold;">${bin.nama}</h3>
            <p style="margin: 0 0 5px;"><strong>Alamat:</strong> ${bin.alamat}</p>
            <p style="margin: 0 0 5px;"><strong>Jenis:</strong> ${bin.jenis}</p>
            <p style="margin: 0 0 5px;"><strong>Kondisi:</strong> ${bin.kondisi}</p>
            <p style="margin: 0 0 5px;"><strong>Kapasitas:</strong> ${bin.kapasitas} liter</p>
            <p style="margin: 0 0 5px;"><strong>Keluarahan:</strong> ${bin.kelurahan}</p>
            <p style="margin: 0 0 5px;"><strong>Kecamatan:</strong> ${bin.kecamatan}</p>
            <p style="margin: 0;"><strong>Pemeliharaan terakhir:</strong> ${formatDate(bin.tanggal_pemeliharaan_terakhir)}</p>
          </div>
        `)

        marker.on("click", () => {
          onMarkerClick(bin)
        })

        markersRef.current[bin.id] = marker
      })
    }

    // Add polylines for polluted rivers if active
    if (activeDataType === "pollutedRivers") {
      pollutedRivers.forEach((river) => {
        if (!leafletMap.current) return

        // Get color based on pollution level
        const getColor = (): string => {
          switch (river.tingkat_pencemaran?.toLowerCase()) {
            case "rendah":
              return "#2ecc71" // Green for low pollution
            case "sedang":
              return "#f39c12" // Orange for medium pollution
            case "tinggi":
              return "#e74c3c" // Red for high pollution
            default:
              return "#3498db" // Blue for unknown level
          }
        }

        const polyline = L.polyline(
          river.geom.coordinates.map((coord) => [coord[1], coord[0]]),
          {
            color: getColor(),
            weight: 5,
            opacity: 0.7,
          },
        ).addTo(leafletMap.current)

        polyline.bindPopup(`
          <div style="min-width: 200px;">
            <h3 style="margin: 0 0 5px; font-weight: bold;">${river.nama_sungai}</h3>
            <p style="margin: 0 0 5px;"><strong>Tingkat Pencemaran:</strong> ${river.tingkat_pencemaran}</p>
            <p style="margin: 0 0 5px;"><strong>Jenis Pencemaran:</strong> ${river.jenis_pencemaran}</p>
            <p style="margin: 0 0 5px;"><strong>Panjang:</strong> ${river.panjang_km} km</p>
            <p style="margin: 0 0 5px;"><strong>Lebar rata-rata:</strong> ${river.lebar_rata_rata_m} m</p>
            <p style="margin: 0;"><strong>Status Pemulihan:</strong> ${river.status_pemulihan}</p>
          </div>
        `)

        polyline.on("click", () => {
          onMarkerClick(river)
        })

        polylinesRef.current[river.id] = polyline
      })
    }

    // Add polygons for flood areas if active
    if (activeDataType === "floodAreas") {
      floodAreas.forEach((area) => {
        if (!leafletMap.current) return

        // Get color based on risk level
        const getColor = (): string => {
          switch (area.tingkat_risiko?.toLowerCase()) {
            case "rendah":
              return "#3498db" // Blue for low risk
            case "sedang":
              return "#f39c12" // Orange for medium risk
            case "tinggi":
              return "#e74c3c" // Red for high risk
            default:
              return "#95a5a6" // Gray for unknown level
          }
        }

        const polygon = L.polygon(
          area.geom.coordinates[0].map((coord) => [coord[1], coord[0]]),
          {
            color: getColor(),
            fillColor: getColor(),
            fillOpacity: 0.3,
            weight: 2,
          },
        ).addTo(leafletMap.current)

        polygon.bindPopup(`
          <div style="min-width: 200px;">
            <h3 style="margin: 0 0 5px; font-weight: bold;">${area.nama_kawasan}</h3>
            <p style="margin: 0 0 5px;"><strong>Tingkat Risiko:</strong> ${area.tingkat_risiko}</p>
            <p style="margin: 0 0 5px;"><strong>Kecamatan:</strong> ${area.kecamatan}</p>
            <p style="margin: 0 0 5px;"><strong>Kelurahan:</strong> ${area.kelurahan}</p>
            <p style="margin: 0 0 5px;"><strong>Luas Area:</strong> ${area.luas_area_ha} ha</p>
            <p style="margin: 0;"><strong>Kedalaman Rata-rata:</strong> ${area.kedalaman_rata_rata_cm} cm</p>
            <p style="margin: 0;"><strong>Penyebab utama:</strong> ${area.penyebab_utama}</p>
            <p style="margin: 0;"><strong>Jumlah Penduduk Terdampak:</strong> ${area.jumlah_penduduk_terdampak}</p>
            <p style="margin: 0;"><strong>Infrastruktur Terdampak:</strong> ${area.infrastruktur_terdampak}</p>
            <p style="margin: 0;"><strong>Upaya Mitigasi:</strong> ${area.upaya_mitigasi}</p>
          </div>
        `)

        polygon.on("click", () => {
          onMarkerClick(area)
        })

        polygonsRef.current[area.id] = polygon
      })
    }

    // If an item is selected, open its popup
    if (selectedItem) {
      if (activeDataType === "trashBins" && "nama" in selectedItem) {
        const bin = selectedItem as TrashBin
        const marker = markersRef.current[bin.id]
        if (marker && leafletMap.current) {
          marker.openPopup()
          leafletMap.current.setView([bin.geom.coordinates[1], bin.geom.coordinates[0]], 15)
        }
      } else if (activeDataType === "pollutedRivers" && "nama_sungai" in selectedItem) {
        const river = selectedItem as PollutedRiver
        const polyline = polylinesRef.current[river.id]
        if (polyline && leafletMap.current) {
          polyline.openPopup()
          leafletMap.current.fitBounds(polyline.getBounds())
        }
      } else if (activeDataType === "floodAreas" && "nama_kawasan" in selectedItem) {
        const area = selectedItem as FloodArea
        const polygon = polygonsRef.current[area.id]
        if (polygon && leafletMap.current) {
          polygon.openPopup()
          leafletMap.current.fitBounds(polygon.getBounds())
        }
      }
    }

    return () => {
      // No need to destroy the map on component unmount
    }
  }, [trashBins, pollutedRivers, floodAreas, selectedItem, onMarkerClick, activeDataType])

  return <div ref={mapRef} className="z-0 h-full w-full rounded-none" />
}
