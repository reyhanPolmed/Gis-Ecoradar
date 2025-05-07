import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define types based on the database structure
export type TrashBin = {
  id: string
  geom: {
    type: string
    coordinates: [number, number]
  }
  nama: string
  jenis: string
  kapasitas: number
  kondisi: string
  pengelola: string
  alamat: string
  kecamatan: string
  tanggal_pemeliharaan_terakhir: string
  foto_url?: string
}

export interface PollutedRiver {
  id: number
  nama_sungai: string
  panjang_km: number
  lebar_rata_rata_m: number
  tingkat_pencemaran: string
  jenis_pencemaran: string
  sumber_pencemaran: string
  dampak_lingkungan: string
  upaya_penanganan: string
  status_pemulihan: string
  geom: {
    type: string
    coordinates: [number, number][] // array of [longitude, latitude] pairs
  }
}

export interface FloodArea {
  id: number
  nama_kawasan: string
  kecamatan: string
  kelurahan: string
  luas_area_ha: number
  kedalaman_rata_rata_cm: number
  penyebab_utama: string
  jumlah_penduduk_terdampak: number
  infrastruktur_terdampak: string
  tingkat_risiko: string
  upaya_mitigasi: string
  geom: {
    type: string
    coordinates: [number, number][][] // polygon coordinates
  }
}

// Create the API service
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getTrashBins: builder.query<TrashBin[], void>({
      query: () => "trash-bins",
    }),
    getPollutedRivers: builder.query<PollutedRiver[], void>({
      query: () => "polluted-rivers",
    }),
    getFloodAreas: builder.query<FloodArea[], void>({
      query: () => "flood-areas",
    }),
  }),
})

// Export the auto-generated hooks
export const { useGetTrashBinsQuery, useGetPollutedRiversQuery, useGetFloodAreasQuery } = api
