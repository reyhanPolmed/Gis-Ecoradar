"use client"
import { useGetTrashBinsQuery, useGetPollutedRiversQuery, useGetFloodAreasQuery } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Loader2, AlertTriangle, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Sidebar() {
  const { data: trashBins, isLoading: isLoadingTrashBins } = useGetTrashBinsQuery()
  const { data: pollutedRivers, isLoading: isLoadingPollutedRivers } = useGetPollutedRiversQuery()
  const { data: floodAreas, isLoading: isLoadingFloodAreas } = useGetFloodAreasQuery()
  const [showAllDistricts, setShowAllDistricts] = useState(false)

  // Daftar 21 kecamatan di Kota Medan
  const medanDistricts = [
    "Medan Amplas",
    "Medan Area",
    "Medan Barat",
    "Medan Baru",
    "Medan Belawan",
    "Medan Deli",
    "Medan Denai",
    "Medan Helvetia",
    "Medan Johor",
    "Medan Kota",
    "Medan Labuhan",
    "Medan Maimun",
    "Medan Marelan",
    "Medan Perjuangan",
    "Medan Petisah",
    "Medan Polonia",
    "Medan Selayang",
    "Medan Sunggal",
    "Medan Tembung",
    "Medan Timur",
    "Medan Tuntungan",
  ]

  // Kecamatan yang selalu ditampilkan (4 pertama)
  const visibleDistricts = medanDistricts.slice(0, 4)

  // Kecamatan yang hanya ditampilkan ketika tombol "Lihat semua kecamatan" diklik
  const hiddenDistricts = medanDistricts.slice(4)

  if (isLoadingTrashBins || isLoadingPollutedRivers || isLoadingFloodAreas) {
    return (
      <div className="w-80 h-[calc(100vh-56px)] p-4 flex items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin mr-2" />
        <span>Memuat data...</span>
      </div>
    )
  }

  return (
    <div className="w-80 h-[calc(100vh-56px)] p-4 space-y-4 overflow-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Aktivitas Terbaru</CardTitle>
          <CardDescription className="text-xs">Update terbaru dari sistem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-red-100 p-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="text-xs font-medium">Pencemaran tinggi terdeteksi</p>
                <p className="text-xs text-muted-foreground">Sungai Ciliwung</p>
                <p className="text-xs text-muted-foreground">2 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <MapPin className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-medium">Tempat sampah baru ditambahkan</p>
                <p className="text-xs text-muted-foreground">Taman Kota</p>
                <p className="text-xs text-muted-foreground">1 hari yang lalu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-amber-100 p-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-medium">Peringatan banjir</p>
                <p className="text-xs text-muted-foreground">Kawasan Kampung Melayu</p>
                <p className="text-xs text-muted-foreground">2 hari yang lalu</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Kecamatan</CardTitle>
        </CardHeader>
        <CardContent className="-mt-2">
          <div className="space-y-1">
            {/* Selalu tampilkan 4 kecamatan pertama */}
            {visibleDistricts.map((district) => (
              <div key={district} className="flex items-center justify-between">
                <span className="text-xs">{district}</span>
                <Badge variant="outline">
                  {trashBins?.filter((bin) => bin.kecamatan === district).length || 0} tempat sampah
                </Badge>
              </div>
            ))}

            {/* Tampilkan kecamatan tambahan jika showAllDistricts true */}
            {showAllDistricts && (
              <div className="space-y-1">
                {hiddenDistricts.map((district) => (
                  <div key={district} className="flex items-center justify-between">
                    <span className="text-xs">{district}</span>
                    <Badge variant="outline">
                      {trashBins?.filter((bin) => bin.kecamatan === district).length || 0} tempat sampah
                    </Badge>
                  </div>
                ))}
              </div>
            )}

            {/* Tombol untuk menampilkan/menyembunyikan semua kecamatan */}
            <div className="mt-2 text-center">
              <Button
                variant="link"
                size="sm"
                className="text-xs text-green-600 flex items-center mx-auto"
                onClick={() => setShowAllDistricts(!showAllDistricts)}
              >
                {showAllDistricts ? (
                  <>
                    Sembunyikan
                    <ChevronUp className="h-3 w-3 ml-1" />
                  </>
                ) : (
                  <>
                    Lihat semua kecamatan
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Statistik Sungai Tercemar</CardTitle>
        </CardHeader>
        <CardContent className="-mt-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs">Pencemaran Tinggi</span>
              <Badge variant="outline" className="pollution-level-high">
                {pollutedRivers?.filter((river) => river.tingkat_pencemaran.toLowerCase() === "tinggi").length || 0}{" "}
                sungai
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Pencemaran Sedang</span>
              <Badge variant="outline" className="pollution-level-medium">
                {pollutedRivers?.filter((river) => river.tingkat_pencemaran.toLowerCase() === "sedang").length || 0}{" "}
                sungai
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Pencemaran Rendah</span>
              <Badge variant="outline" className="pollution-level-low">
                {pollutedRivers?.filter((river) => river.tingkat_pencemaran.toLowerCase() === "rendah").length || 0}{" "}
                sungai
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Statistik Kawasan Banjir</CardTitle>
        </CardHeader>
        <CardContent className="-mt-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs">Risiko Tinggi</span>
              <Badge variant="outline" className="risk-level-high">
                {floodAreas?.filter((area) => area.tingkat_risiko.toLowerCase() === "tinggi").length || 0} kawasan
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Risiko Sedang</span>
              <Badge variant="outline" className="risk-level-medium">
                {floodAreas?.filter((area) => area.tingkat_risiko.toLowerCase() === "sedang").length || 0} kawasan
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Risiko Rendah</span>
              <Badge variant="outline" className="risk-level-low">
                {floodAreas?.filter((area) => area.tingkat_risiko.toLowerCase() === "rendah").length || 0} kawasan
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
