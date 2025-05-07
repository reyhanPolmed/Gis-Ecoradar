// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const PresentationMedan = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
//   }

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//   }

//   const slides = [
//     // Slide 1: Judul
//     <div key="slide-1" className="flex flex-col items-center justify-center h-full text-center">
//       <h1 className="text-4xl font-bold mb-6">EcoRadar</h1>
//       <h2 className="text-2xl mb-8">Web GIS Vektor untuk Monitoring Isu Lingkungan di Kota Medan</h2>
//       <div className="flex flex-col items-center">
//         <p className="text-lg mb-2">Kelompok X</p>
//         <p className="text-md mb-1">Anggota 1 (NIM)</p>
//         <p className="text-md mb-1">Anggota 2 (NIM)</p>
//         <p className="text-md mb-1">Anggota 3 (NIM)</p>
//       </div>
//     </div>,

//     // Slide 2: Daftar Isi
//     <div key="slide-2" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-6">Daftar Isi</h2>
//       <ol className="list-decimal pl-6 space-y-3 text-lg">
//         <li>Latar Belakang dan Rumusan Masalah</li>
//         <li>Tujuan dan Manfaat</li>
//         <li>Tinjauan Pustaka</li>
//         <li>Metodologi</li>
//         <li>Spesifikasi Data</li>
//         <li>Arsitektur Sistem</li>
//         <li>Fungsionalitas Sistem</li>
//         <li>Inovasi dan Nilai Tambah</li>
//         <li>Demonstrasi Prototipe</li>
//         <li>Timeline dan Pembagian Tugas</li>
//         <li>Kesimpulan</li>
//       </ol>
//     </div>,

//     // Slide 3: Latar Belakang
//     <div key="slide-3" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Latar Belakang</h2>
//       <div className="space-y-3 text-lg">
//         <p>Kota Medan menghadapi berbagai tantangan lingkungan yang semakin kompleks:</p>
//         <ul className="list-disc pl-6 space-y-2">
//           <li>
//             <strong>Pengelolaan Sampah:</strong> Produksi sampah mencapai 2.000 ton/hari, namun kapasitas pengolahan
//             hanya 1.500 ton/hari (Dinas Kebersihan Kota Medan, 2022)
//           </li>
//           <li>
//             <strong>Pencemaran Sungai:</strong> 7 dari 9 sungai utama di Medan tercemar berat dengan BOD &gt;30 mg/L,
//             melebihi baku mutu (BPLHD Sumatra Utara, 2023)
//           </li>
//           <li>
//             <strong>Banjir:</strong> 12 kecamatan di Medan teridentifikasi sebagai kawasan rawan banjir, dengan
//             frekuensi banjir meningkat 40% dalam 5 tahun terakhir (BPBD Kota Medan, 2023)
//           </li>
//         </ul>
//         <p className="mt-4">
//           Diperlukan sistem monitoring terintegrasi untuk membantu pengambilan keputusan dan penanganan isu lingkungan
//           secara efektif.
//         </p>
//       </div>
//     </div>,

//     // Slide 4: Rumusan Masalah
//     <div key="slide-4" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Rumusan Masalah</h2>
//       <ol className="list-decimal pl-6 space-y-3 text-lg">
//         <li>
//           Bagaimana mengembangkan sistem Web GIS Vektor yang dapat memetakan dan memvisualisasikan:
//           <ul className="list-disc pl-6 mt-2">
//             <li>Lokasi tempat pengolahan sampah (point)</li>
//             <li>Aliran dan tingkat pencemaran sungai (line)</li>
//             <li>Kawasan rawan banjir (polygon)</li>
//           </ul>
//         </li>
//         <li>
//           Bagaimana mengintegrasikan data spasial dan non-spasial untuk analisis komprehensif isu lingkungan di Kota
//           Medan?
//         </li>
//         <li>
//           Bagaimana menyediakan antarmuka yang interaktif dan informatif untuk berbagai pemangku kepentingan
//           (pemerintah, masyarakat, peneliti)?
//         </li>
//       </ol>
//     </div>,

//     // Slide 5: Tujuan
//     <div key="slide-5" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Tujuan</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Tujuan Umum</h3>
//           <p className="text-lg">
//             Mengembangkan platform Web GIS Vektor yang komprehensif untuk monitoring, analisis, dan visualisasi isu
//             lingkungan di Kota Medan.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-2">Tujuan Khusus</h3>
//           <ol className="list-decimal pl-6 space-y-2 text-lg">
//             <li>Memetakan lokasi dan status tempat pengolahan sampah di Kota Medan</li>
//             <li>Memvisualisasikan tingkat pencemaran sungai berdasarkan parameter kualitas air</li>
//             <li>Mengidentifikasi dan menganalisis kawasan rawan banjir berdasarkan data historis dan topografi</li>
//             <li>Menyediakan tools analisis spasial untuk pengambilan keputusan berbasis data</li>
//             <li>Memfasilitasi partisipasi masyarakat dalam pelaporan isu lingkungan</li>
//           </ol>
//         </div>
//       </div>
//     </div>,

//     // Slide 6: Manfaat
//     <div key="slide-6" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Manfaat</h2>
//       <div className="grid grid-cols-2 gap-4 text-lg">
//         <div className="bg-green-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2 text-green-700">Bagi Pemerintah</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Monitoring real-time isu lingkungan</li>
//             <li>Pengambilan keputusan berbasis data</li>
//             <li>Alokasi sumber daya yang lebih efisien</li>
//             <li>Evaluasi efektivitas program lingkungan</li>
//           </ul>
//         </div>

//         <div className="bg-blue-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2 text-blue-700">Bagi Masyarakat</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Akses informasi lingkungan yang transparan</li>
//             <li>Partisipasi dalam pelaporan isu lingkungan</li>
//             <li>Peningkatan kesadaran lingkungan</li>
//             <li>Mitigasi risiko bencana (banjir)</li>
//           </ul>
//         </div>

//         <div className="bg-purple-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2 text-purple-700">Bagi Peneliti</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Sumber data untuk penelitian lingkungan</li>
//             <li>Analisis tren dan pola spasial</li>
//             <li>Pengembangan model prediktif</li>
//           </ul>
//         </div>

//         <div className="bg-orange-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2 text-orange-700">Bagi Bisnis</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Identifikasi peluang ekonomi sirkular</li>
//             <li>Optimasi rantai pasok pengelolaan sampah</li>
//             <li>Pengembangan solusi inovatif</li>
//           </ul>
//         </div>
//       </div>
//     </div>,

//     // Slide 7: Tinjauan Pustaka
//     <div key="slide-7" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Tinjauan Pustaka</h2>
//       <div className="space-y-4 text-lg">
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Penelitian Terkait</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>
//               Nasution et al. (2022) mengembangkan sistem monitoring kualitas air sungai di Medan menggunakan GIS, namun
//               belum mengintegrasikan dengan isu lingkungan lainnya.
//             </li>
//             <li>
//               Siregar & Lubis (2023) melakukan pemetaan kawasan rawan banjir di Medan menggunakan analisis
//               multi-kriteria dan data DEM, mengidentifikasi 12 kecamatan rawan banjir.
//             </li>
//             <li>
//               Tarigan et al. (2021) menganalisis efektivitas pengelolaan sampah di Medan dan menemukan bahwa distribusi
//               TPS yang tidak merata menjadi salah satu faktor utama permasalahan.
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-2">Konsep Data Vektor dalam GIS</h3>
//           <div className="grid grid-cols-3 gap-4 mt-2">
//             <div className="bg-gray-50 p-3 rounded-lg">
//               <h4 className="font-semibold mb-1">Point</h4>
//               <p>Representasi lokasi diskrit (TPS, bank sampah, titik pemantauan)</p>
//               <p className="mt-2 text-sm italic">Atribut: koordinat, nama, kapasitas, jenis</p>
//             </div>
//             <div className="bg-gray-50 p-3 rounded-lg">
//               <h4 className="font-semibold mb-1">Line</h4>
//               <p>Representasi fitur linear (sungai, saluran drainase)</p>
//               <p className="mt-2 text-sm italic">Atribut: panjang, nama, parameter kualitas air</p>
//             </div>
//             <div className="bg-gray-50 p-3 rounded-lg">
//               <h4 className="font-semibold mb-1">Polygon</h4>
//               <p>Representasi area (kawasan rawan banjir, TPA)</p>
//               <p className="mt-2 text-sm italic">Atribut: luas, kecamatan, tingkat kerawanan</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Slide 8: Metodologi
//     <div key="slide-8" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Metodologi</h2>
//       <div className="grid grid-cols-2 gap-6 text-lg">
//         <div>
//           <h3 className="text-xl font-semibold mb-3">Metode Pengembangan</h3>
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <p className="mb-2">Agile Development dengan SCRUM:</p>
//             <ul className="list-disc pl-6 space-y-1">
//               <li>Sprint 2 minggu</li>
//               <li>Iterasi berdasarkan feedback pengguna</li>
//               <li>Pengembangan bertahap dengan MVP</li>
//             </ul>

//             <p className="mt-3 mb-2">Tahapan Pengembangan:</p>
//             <ol className="list-decimal pl-6 space-y-1">
//               <li>Analisis kebutuhan & pengumpulan data</li>
//               <li>Perancangan database & arsitektur</li>
//               <li>Pengembangan frontend & backend</li>
//               <li>Integrasi & pengujian</li>
//               <li>Deployment & evaluasi</li>
//             </ol>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-3">Metode Pengumpulan Data</h3>
//           <div className="space-y-3">
//             <div className="bg-blue-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Data Primer</h4>
//               <ul className="list-disc pl-6 mt-1">
//                 <li>Survei lapangan lokasi TPS</li>
//                 <li>Pengambilan sampel kualitas air sungai</li>
//                 <li>Wawancara dengan stakeholder</li>
//               </ul>
//             </div>

//             <div className="bg-green-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Data Sekunder</h4>
//               <ul className="list-disc pl-6 mt-1">
//                 <li>Data spasial dari BIG dan BPS</li>
//                 <li>Data lingkungan dari DLH Medan</li>
//                 <li>Data banjir dari BPBD Medan</li>
//                 <li>Citra satelit (Sentinel-2, Landsat)</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Slide 9: Spesifikasi Data
//     <div key="slide-9" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Spesifikasi Data</h2>
//       <div className="space-y-4 text-lg">
//         <div className="bg-blue-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Data Point: Tempat Pengolahan Sampah</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="font-semibold">Atribut:</p>
//               <ul className="list-disc pl-6">
//                 <li>ID, nama, alamat, kecamatan</li>
//                 <li>Jenis (TPS, bank sampah, TPA)</li>
//                 <li>Kapasitas (ton/hari)</li>
//                 <li>Status operasional</li>
//                 <li>Koordinat (latitude, longitude)</li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold">Sumber Data:</p>
//               <ul className="list-disc pl-6">
//                 <li>Dinas Kebersihan Kota Medan (2023)</li>
//                 <li>Survei lapangan</li>
//                 <li>OpenStreetMap</li>
//               </ul>
//               <p className="font-semibold mt-2">Jumlah Data:</p>
//               <p>87 TPS, 24 bank sampah, 1 TPA</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Data Line: Pencemaran Sungai</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="font-semibold">Atribut:</p>
//               <ul className="list-disc pl-6">
//                 <li>ID, nama sungai</li>
//                 <li>Panjang (km)</li>
//                 <li>Parameter kualitas air (BOD, COD, pH)</li>
//                 <li>Tingkat pencemaran (ringan, sedang, berat)</li>
//                 <li>Sumber pencemaran dominan</li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold">Sumber Data:</p>
//               <ul className="list-disc pl-6">
//                 <li>BPLHD Sumatra Utara (2023)</li>
//                 <li>Dinas Lingkungan Hidup Medan</li>
//                 <li>BIG (Badan Informasi Geospasial)</li>
//               </ul>
//               <p className="font-semibold mt-2">Jumlah Data:</p>
//               <p>9 sungai utama (Deli, Babura, Belawan, dll)</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-orange-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Data Polygon: Kawasan Rawan Banjir</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="font-semibold">Atribut:</p>
//               <ul className="list-disc pl-6">
//                 <li>ID, nama kecamatan/kelurahan</li>
//                 <li>Luas area (ha)</li>
//                 <li>Tingkat kerawanan (rendah, sedang, tinggi)</li>
//                 <li>Frekuensi banjir (kali/tahun)</li>
//                 <li>Kedalaman banjir rata-rata (cm)</li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold">Sumber Data:</p>
//               <ul className="list-disc pl-6">
//                 <li>BPBD Kota Medan (2023)</li>
//                 <li>Data DEM (Digital Elevation Model)</li>
//                 <li>Analisis multi-kriteria</li>
//               </ul>
//               <p className="font-semibold mt-2">Jumlah Data:</p>
//               <p>12 kecamatan rawan banjir dari 21 kecamatan</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Slide 10: Arsitektur Sistem
//     <div key="slide-10" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Arsitektur Sistem</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h3 className="text-xl font-semibold mb-3">Komponen Sistem</h3>
//           <div className="space-y-3 text-lg">
//             <div className="bg-blue-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Frontend</h4>
//               <ul className="list-disc pl-6">
//                 <li>React.js + Next.js</li>
//                 <li>Leaflet.js untuk visualisasi peta</li>
//                 <li>TailwindCSS untuk UI</li>
//                 <li>Chart.js untuk visualisasi data</li>
//               </ul>
//             </div>

//             <div className="bg-green-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Backend</h4>
//               <ul className="list-disc pl-6">
//                 <li>Node.js + Express</li>
//                 <li>PostgreSQL + PostGIS</li>
//                 <li>GeoServer untuk layanan OGC</li>
//                 <li>Redis untuk caching</li>
//               </ul>
//             </div>

//             <div className="bg-purple-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Infrastruktur</h4>
//               <ul className="list-disc pl-6">
//                 <li>Docker untuk kontainerisasi</li>
//                 <li>AWS/GCP untuk hosting</li>
//                 <li>CI/CD dengan GitHub Actions</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//             <p className="text-gray-600">Diagram Arsitektur Sistem</p>
//           </div>
//           <p className="text-sm mt-2 text-gray-600">Diagram arsitektur 3-tier dengan integrasi komponen GIS</p>

//           <div className="mt-6 w-full">
//             <h3 className="text-xl font-semibold mb-3">Desain Database Spasial</h3>
//             <div className="bg-gray-50 p-3 rounded-lg text-lg">
//               <ul className="list-disc pl-6">
//                 <li>PostgreSQL 14 + PostGIS 3.2</li>
//                 <li>Skema relasional dengan ekstensi spasial</li>
//                 <li>Indeks spasial untuk optimasi query</li>
//                 <li>Topologi untuk integritas data</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Slide 11: Fungsionalitas Sistem
//     <div key="slide-11" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Fungsionalitas Sistem</h2>
//       <div className="grid grid-cols-3 gap-4 text-lg">
//         <div className="bg-blue-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Visualisasi Data</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Peta interaktif multi-layer</li>
//             <li>Simbologi dinamis berdasarkan atribut</li>
//             <li>Time-series untuk data temporal</li>
//             <li>Dashboard statistik</li>
//             <li>Grafik dan diagram analitik</li>
//           </ul>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Analisis Spasial</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Buffer analysis untuk TPS</li>
//             <li>Network analysis untuk aliran sungai</li>
//             <li>Overlay analysis untuk kawasan banjir</li>
//             <li>Hotspot analysis untuk titik kritis</li>
//             <li>Proximity analysis</li>
//             <li>Spatial correlation</li>
//           </ul>
//         </div>

//         <div className="bg-purple-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Manajemen Data</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>CRUD operasi untuk semua data</li>
//             <li>Import/export (GeoJSON, Shapefile)</li>
//             <li>Validasi data spasial</li>
//             <li>Versioning dan history</li>
//             <li>Metadata management</li>
//           </ul>
//         </div>

//         <div className="bg-yellow-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Pelaporan</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Laporan analitik otomatis</li>
//             <li>Export PDF/Excel</li>
//             <li>Visualisasi untuk presentasi</li>
//             <li>Scheduled reporting</li>
//           </ul>
//         </div>

//         <div className="bg-red-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Partisipasi Publik</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Crowdsourcing data lingkungan</li>
//             <li>Pelaporan isu (sampah, pencemaran)</li>
//             <li>Validasi laporan masyarakat</li>
//             <li>Forum diskusi</li>
//           </ul>
//         </div>

//         <div className="bg-indigo-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Administrasi</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>User management (RBAC)</li>
//             <li>Audit trail aktivitas</li>
//             <li>Backup & restore</li>
//             <li>System monitoring</li>
//             <li>API management</li>
//           </ul>
//         </div>
//       </div>
//     </div>,

//     // Slide 12: Inovasi dan Nilai Tambah
//     <div key="slide-12" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Inovasi dan Nilai Tambah</h2>
//       <div className="grid grid-cols-2 gap-6 text-lg">
//         <div>
//           <h3 className="text-xl font-semibold mb-3">Kebaruan Konsep</h3>
//           <div className="bg-gray-50 p-4 rounded-lg space-y-3">
//             <div>
//               <h4 className="font-semibold">Integrasi Multi-Isu Lingkungan</h4>
//               <p>
//                 Menggabungkan 3 isu lingkungan utama (sampah, pencemaran sungai, banjir) dalam satu platform
//                 terintegrasi.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-semibold">Pendekatan Holistik</h4>
//               <p>Analisis korelasi antar isu lingkungan untuk pemahaman komprehensif ekosistem kota.</p>
//             </div>

//             <div>
//               <h4 className="font-semibold">Citizen Science</h4>
//               <p>
//                 Melibatkan masyarakat dalam pengumpulan dan validasi data lingkungan melalui mobile app terintegrasi.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-3">Potensi Dampak</h3>
//           <div className="space-y-3">
//             <div className="bg-green-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Dampak Lingkungan</h4>
//               <ul className="list-disc pl-6">
//                 <li>Optimasi pengelolaan sampah</li>
//                 <li>Penurunan tingkat pencemaran sungai</li>
//                 <li>Mitigasi risiko banjir</li>
//               </ul>
//             </div>

//             <div className="bg-blue-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Dampak Sosial</h4>
//               <ul className="list-disc pl-6">
//                 <li>Peningkatan kesadaran lingkungan</li>
//                 <li>Partisipasi aktif masyarakat</li>
//                 <li>Transparansi informasi lingkungan</li>
//               </ul>
//             </div>

//             <div className="bg-purple-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Dampak Ekonomi</h4>
//               <ul className="list-disc pl-6">
//                 <li>Efisiensi pengelolaan sumber daya</li>
//                 <li>Pengurangan biaya penanganan banjir</li>
//                 <li>Potensi ekonomi sirkular dari pengelolaan sampah</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Slide 13: Demonstrasi Prototipe
//     <div key="slide-13" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Demonstrasi Prototipe</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
//           <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
//             <p className="text-gray-600">Screenshot Peta Interaktif</p>
//           </div>
//           <p className="mt-2 text-lg">Visualisasi multi-layer (TPS, sungai, area banjir)</p>
//         </div>

//         <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
//           <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
//             <p className="text-gray-600">Screenshot Dashboard</p>
//           </div>
//           <p className="mt-2 text-lg">Dashboard analitik dengan grafik dan statistik</p>
//         </div>

//         <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
//           <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
//             <p className="text-gray-600">Screenshot Form Pelaporan</p>
//           </div>
//           <p className="mt-2 text-lg">Form pelaporan isu lingkungan oleh masyarakat</p>
//         </div>

//         <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
//           <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
//             <p className="text-gray-600">Screenshot Analisis Spasial</p>
//           </div>
//           <p className="mt-2 text-lg">Tool analisis spasial (buffer, overlay, hotspot)</p>
//         </div>
//       </div>

//       <div className="mt-4 p-4 bg-blue-50 rounded-lg">
//         <h3 className="text-xl font-semibold mb-2">Fitur Utama yang Didemonstrasikan</h3>
//         <ul className="list-disc pl-6 text-lg grid grid-cols-2 gap-2">
//           <li>Visualisasi data point, line, polygon</li>
//           <li>Filter dan query data spasial</li>
//           <li>Analisis buffer untuk TPS</li>
//           <li>Identifikasi kawasan rawan banjir</li>
//           <li>Dashboard statistik lingkungan</li>
//           <li>Form pelaporan isu lingkungan</li>
//           <li>Export data dan laporan</li>
//           <li>User management dan autentikasi</li>
//         </ul>
//       </div>
//     </div>,

//     // Slide 14: Timeline dan Pembagian Tugas
//     <div key="slide-14" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Timeline dan Pembagian Tugas</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h3 className="text-xl font-semibold mb-3">Timeline Proyek (6 bulan)</h3>
//           <div className="space-y-3 text-lg">
//             <div className="bg-blue-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Bulan 1-2: Persiapan</h4>
//               <ul className="list-disc pl-6">
//                 <li>Analisis kebutuhan</li>
//                 <li>Pengumpulan data</li>
//                 <li>Perancangan database</li>
//                 <li>Desain UI/UX</li>
//               </ul>
//             </div>

//             <div className="bg-green-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Bulan 3-4: Pengembangan</h4>
//               <ul className="list-disc pl-6">
//                 <li>Implementasi database</li>
//                 <li>Pengembangan backend</li>
//                 <li>Pengembangan frontend</li>
//                 <li>Integrasi GIS</li>
//               </ul>
//             </div>

//             <div className="bg-purple-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Bulan 5-6: Finalisasi</h4>
//               <ul className="list-disc pl-6">
//                 <li>Testing & QA</li>
//                 <li>Deployment</li>
//                 <li>Dokumentasi</li>
//                 <li>Training pengguna</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-3">Pembagian Tugas</h3>
//           <div className="space-y-3 text-lg">
//             <div className="bg-yellow-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Anggota 1</h4>
//               <ul className="list-disc pl-6">
//                 <li>Project Manager</li>
//                 <li>Analisis kebutuhan</li>
//                 <li>Koordinasi stakeholder</li>
//                 <li>Dokumentasi</li>
//               </ul>
//             </div>

//             <div className="bg-red-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Anggota 2</h4>
//               <ul className="list-disc pl-6">
//                 <li>GIS Developer</li>
//                 <li>Perancangan database spasial</li>
//                 <li>Implementasi analisis spasial</li>
//                 <li>Integrasi data</li>
//               </ul>
//             </div>

//             <div className="bg-indigo-50 p-3 rounded-lg">
//               <h4 className="font-semibold">Anggota 3</h4>
//               <ul className="list-disc pl-6">
//                 <li>Full-stack Developer</li>
//                 <li>Pengembangan frontend</li>
//                 <li>Pengembangan backend</li>
//                 <li>Deployment & DevOps</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Slide 15: Kesimpulan
//     <div key="slide-15" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
//       <div className="space-y-4 text-lg">
//         <p>
//           EcoRadar merupakan solusi inovatif berbasis Web GIS Vektor untuk monitoring dan analisis isu lingkungan di
//           Kota Medan, dengan fokus pada:
//         </p>

//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <div className="bg-blue-50 p-4 rounded-lg text-center">
//             <h3 className="font-semibold mb-2">Point</h3>
//             <p>Tempat Pengolahan Sampah</p>
//             <p className="text-sm mt-2">(87 TPS, 24 bank sampah, 1 TPA)</p>
//           </div>

//           <div className="bg-green-50 p-4 rounded-lg text-center">
//             <h3 className="font-semibold mb-2">Line</h3>
//             <p>Pencemaran Sungai</p>
//             <p className="text-sm mt-2">(9 sungai utama di Medan)</p>
//           </div>

//           <div className="bg-orange-50 p-4 rounded-lg text-center">
//             <h3 className="font-semibold mb-2">Polygon</h3>
//             <p>Kawasan Rawan Banjir</p>
//             <p className="text-sm mt-2">(12 kecamatan rawan banjir)</p>
//           </div>
//         </div>

//         <p>
//           Sistem ini menyediakan platform terintegrasi untuk visualisasi, analisis, dan pengambilan keputusan berbasis
//           data yang dapat dimanfaatkan oleh berbagai pemangku kepentingan.
//         </p>

//         <p>
//           Dengan pendekatan holistik dan partisipatif, EcoRadar berpotensi memberikan kontribusi signifikan dalam
//           penanganan isu lingkungan di Kota Medan, mendukung pembangunan kota yang berkelanjutan dan tangguh terhadap
//           perubahan iklim.
//         </p>
//       </div>
//     </div>,

//     // Slide 16: Referensi
//     <div key="slide-16" className="flex flex-col h-full">
//       <h2 className="text-2xl font-bold mb-4">Referensi</h2>
//       <div className="space-y-3 text-md">
//         <p>
//           Badan Penanggulangan Bencana Daerah (BPBD) Kota Medan. (2023).{" "}
//           <em>Peta Kawasan Rawan Banjir Kota Medan 2023</em>. Medan: BPBD.
//         </p>

//         <p>
//           Badan Pengelola Lingkungan Hidup Daerah (BPLHD) Sumatra Utara. (2023).{" "}
//           <em>Laporan Status Lingkungan Hidup Daerah Provinsi Sumatra Utara 2023</em>. Medan: BPLHD.
//         </p>

//         <p>
//           Dinas Kebersihan Kota Medan. (2022). <em>Laporan Tahunan Pengelolaan Sampah Kota Medan 2022</em>. Medan:
//           Pemerintah Kota Medan.
//         </p>

//         <p>
//           Nasution, A. R., Lubis, M. Z., & Siregar, E. S. (2022). Development of River Water Quality Monitoring System
//           in Medan City Using Geographic Information System. <em>Journal of Environmental Science and Technology</em>,
//           15(3), 142-156.
//         </p>

//         <p>
//           Siregar, R. F., & Lubis, M. Z. (2023). Flood Risk Mapping in Medan City Using Multi-Criteria Analysis and
//           Digital Elevation Model. <em>Indonesian Journal of Geography</em>, 55(1), 78-92.
//         </p>

//         <p>
//           Tarigan, H. B., Nasution, I. R., & Sembiring, E. (2021). Analysis of Waste Management Effectiveness in Medan
//           City. <em>Waste Management Research</em>, 39(4), 512-525.
//         </p>

//         <p>
//           Badan Pusat Statistik (BPS) Kota Medan. (2022). <em>Medan Dalam Angka 2022</em>. Medan: BPS.
//         </p>

//         <p>
//           Kementerian Lingkungan Hidup dan Kehutanan. (2023). <em>Indeks Kualitas Lingkungan Hidup Indonesia 2023</em>.
//           Jakarta: KLHK.
//         </p>
//       </div>
//     </div>,

//     // Slide 17: Terima Kasih
//     <div key="slide-17" className="flex flex-col items-center justify-center h-full text-center">
//       <h1 className="text-4xl font-bold mb-8">Terima Kasih</h1>
//       <p className="text-xl mb-8">Ada pertanyaan?</p>
//       <div className="flex flex-col items-center">
//         <p className="text-lg mb-2">Kontak:</p>
//         <p className="text-md mb-1">email@example.com</p>
//         <p className="text-md mb-1">www.ecoradar-medan.com</p>
//       </div>
//     </div>,
//   ]

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <Card className="w-full max-w-6xl mx-auto">
//         <CardContent className="p-6">
//           <div className="h-[70vh] overflow-hidden">{slides[currentSlide]}</div>

//           <div className="mt-6 flex justify-between items-center">
//             <Button onClick={prevSlide} disabled={currentSlide === 0} variant="outline" className="flex items-center">
//               <ChevronLeft className="mr-2 h-4 w-4" /> Sebelumnya
//             </Button>

//             <div className="flex-1 flex justify-center">
//               <div className="flex space-x-1">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-blue-600" : "bg-gray-300"}`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             <Button
//               onClick={nextSlide}
//               disabled={currentSlide === slides.length - 1}
//               variant="outline"
//               className="flex items-center"
//             >
//               Selanjutnya <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>

//           <div className="mt-4 text-center text-sm text-gray-500">
//             Slide {currentSlide + 1} dari {slides.length}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default PresentationMedan


import { useState, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
interface SlideImageProps {
    src : string, 
    alt : string, 
    width?: number, 
    height?: number
}

interface SlideProps {
    children: ReactNode,
    isActive: boolean
}

interface BulletPointProps {
    children: ReactNode, delay: number
}

interface SlideContentProps {
    children: ReactNode
}
interface SlideTitleProps {
    children: ReactNode
}
// Komponen Slide
const Slide = ({ children, isActive }: SlideProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key="slide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Komponen Judul Slide
const SlideTitle = ({ children }: SlideTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-2xl md:text-3xl font-bold mb-6 text-primary"
    >
      {children}
    </motion.h2>
  )
}

// Komponen Konten Slide
const SlideContent = ({ children }:SlideContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-base md:text-lg"
    >
      {children}
    </motion.div>
  )
}

// Komponen Bullet Point
const BulletPoint = ({ children, delay = 0 } : BulletPointProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + delay * 0.1, duration: 0.5 }}
      className="mb-2 flex items-start"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
      <span>{children}</span>
    </motion.li>
  )
}

// Komponen Gambar Slide
const SlideImage = ({ src, alt, width = 600, height = 400 }:SlideImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-6 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="w-[600px] h-[400px]"></div>
    </motion.div>
  )
}

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 22 // Total jumlah slide

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {/* Header Presentasi */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">EcoRadar: Web GIS Vektor untuk Monitoring Lingkungan</h1>
            <div className="text-sm">
              Slide {currentSlide + 1} dari {totalSlides}
            </div>
          </div>

          {/* Konten Presentasi */}
          <div className="p-8 min-h-[70vh] relative">
            {/* Slide 1: Halaman Judul */}
            <Slide isActive={currentSlide === 0}>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <div className="w-[100px] h-[100px]"></div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  EcoRadar
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-2xl md:text-3xl text-primary font-semibold mb-8"
                >
                  Pengembangan Aplikasi Web GIS Berbasis Vektor untuk Monitoring dan Pengelolaan Isu Lingkungan
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mb-8"
                >
                  <p className="text-lg mb-2">Disusun oleh:</p>
                  <p className="text-xl font-medium">Kelompok EcoTech</p>
                  <p className="text-lg">Andi Wijaya (NIM: 12345678)</p>
                  <p className="text-lg">Budi Santoso (NIM: 23456789)</p>
                  <p className="text-lg">Cindy Paramita (NIM: 34567890)</p>
                  <p className="text-lg">Deni Kurniawan (NIM: 45678901)</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <p className="text-lg">Dosen Pembimbing: Dr. Ir. Ahmad Fauzi, M.Sc.</p>
                  <p className="text-lg">Program Studi Sistem Informasi Geografis</p>
                  <p className="text-lg">Fakultas Ilmu dan Teknologi Kebumian</p>
                  <p className="text-lg">Universitas Teknologi Indonesia</p>
                  <p className="text-lg mt-4">Semester Genap 2023/2024</p>
                </motion.div>
              </div>
            </Slide>

            {/* Slide 2: Daftar Isi */}
            <Slide isActive={currentSlide === 1}>
              <SlideTitle>Daftar Isi Presentasi</SlideTitle>
              <SlideContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ol className="list-decimal list-inside space-y-2">
                      <BulletPoint delay={0}>Latar Belakang (3 menit)</BulletPoint>
                      <BulletPoint delay={1}>Rumusan Masalah (2 menit)</BulletPoint>
                      <BulletPoint delay={2}>Tujuan Projek (2 menit)</BulletPoint>
                      <BulletPoint delay={3}>Manfaat Projek (2 menit)</BulletPoint>
                      <BulletPoint delay={4}>Tinjauan Pustaka (3 menit)</BulletPoint>
                      <BulletPoint delay={5}>Metodologi (3 menit)</BulletPoint>
                      <BulletPoint delay={6}>Spesifikasi Data (3 menit)</BulletPoint>
                      <BulletPoint delay={7}>Arsitektur Sistem (3 menit)</BulletPoint>
                      <BulletPoint delay={8}>Desain Antarmuka (3 menit)</BulletPoint>
                      <BulletPoint delay={9}>Fitur dan Fungsionalitas (3 menit)</BulletPoint>
                      <BulletPoint delay={10}>Alur Kerja Pengembangan (2 menit)</BulletPoint>
                    </ol>
                  </div>
                  <div>
                    <ol className="list-decimal list-inside space-y-2" start={12}>
                      <BulletPoint delay={11}>Rencana Implementasi (2 menit)</BulletPoint>
                      <BulletPoint delay={12}>Tantangan dan Mitigasi Risiko (2 menit)</BulletPoint>
                      <BulletPoint delay={13}>Anggaran dan Sumber Daya (2 menit)</BulletPoint>
                      <BulletPoint delay={14}>Rencana Keberlanjutan (2 menit)</BulletPoint>
                      <BulletPoint delay={15}>Originalitas dan Inovasi (2 menit)</BulletPoint>
                      <BulletPoint delay={16}>Kesimpulan (2 menit)</BulletPoint>
                      <BulletPoint delay={17}>Referensi (1 menit)</BulletPoint>
                      <BulletPoint delay={18}>Lampiran (1 menit)</BulletPoint>
                      <BulletPoint delay={19}>Tanya Jawab (5 menit)</BulletPoint>
                    </ol>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="mt-6 text-muted-foreground"
                >
                  Total estimasi waktu presentasi: 45 menit + 5 menit tanya jawab
                </motion.p>
              </SlideContent>
            </Slide>

            {/* Slide 3: Latar Belakang */}
            <Slide isActive={currentSlide === 2}>
              <SlideTitle>Latar Belakang</SlideTitle>
              <SlideContent>
                <div className="space-y-4">
                  <p>Indonesia menghadapi tantangan lingkungan yang semakin kompleks, dengan data menunjukkan:</p>
                  <ul className="space-y-2">
                    <BulletPoint delay={0}>
                      78% kota di Indonesia rawan banjir, menyebabkan kerugian ekonomi hingga Rp 6,5 triliun per tahun
                    </BulletPoint>
                    <BulletPoint delay={1}>
                      40% sungai di Indonesia tercemar berat, mempengaruhi akses air bersih bagi 27 juta penduduk
                    </BulletPoint>
                    <BulletPoint delay={2}>
                      Pengelolaan sampah yang tidak optimal dengan 65% sampah belum tertangani dengan baik
                    </BulletPoint>
                    <BulletPoint delay={3}>
                      Kesenjangan informasi spasial yang akurat dan real-time untuk pengambilan keputusan
                    </BulletPoint>
                  </ul>
                  <p className="mt-4">Pendekatan vektor (point, line, polygon) dipilih karena:</p>
                  <ul className="space-y-2">
                    <BulletPoint delay={4}>
                      Kemampuan representasi yang tepat untuk objek diskrit seperti tempat sampah (point), sungai
                      tercemar (line), dan kawasan banjir (polygon)
                    </BulletPoint>
                    <BulletPoint delay={5}>Efisiensi penyimpanan data dibandingkan pendekatan raster</BulletPoint>
                    <BulletPoint delay={6}>
                      Kemudahan dalam melakukan analisis spasial yang relevan dengan isu lingkungan
                    </BulletPoint>
                  </ul>
                </div>
              </SlideContent>
              <SlideImage
                src="/placeholder.svg?height=300&width=600"
                alt="Grafik Permasalahan Lingkungan di Indonesia"
                height={300}
              />
            </Slide>

            {/* Slide 4: Rumusan Masalah */}
            <Slide isActive={currentSlide === 3}>
              <SlideTitle>Rumusan Masalah</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Permasalahan Utama:</h3>
                    <p className="text-lg italic">
                      "Bagaimana mengembangkan aplikasi Web GIS berbasis vektor yang efektif untuk monitoring dan
                      pengelolaan isu lingkungan di Indonesia?"
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Sub-masalah:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={0}>
                        Bagaimana mengintegrasikan dan memvisualisasikan data spasial dari berbagai sumber untuk
                        memberikan gambaran komprehensif tentang isu lingkungan?
                      </BulletPoint>
                      <BulletPoint delay={1}>
                        Bagaimana merancang antarmuka yang intuitif dan responsif untuk memudahkan pengguna dalam
                        mengakses dan menganalisis data lingkungan?
                      </BulletPoint>
                      <BulletPoint delay={2}>
                        Bagaimana mengimplementasikan analisis spasial yang relevan untuk mendukung pengambilan
                        keputusan terkait pengelolaan lingkungan?
                      </BulletPoint>
                      <BulletPoint delay={3}>
                        Bagaimana memastikan ketersediaan dan akurasi data dalam sistem yang akan dikembangkan?
                      </BulletPoint>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Batasan Masalah:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={4}>
                        Fokus pada tiga jenis isu lingkungan: pengelolaan sampah, pencemaran sungai, dan kawasan rawan
                        banjir
                      </BulletPoint>
                      <BulletPoint delay={5}>
                        Cakupan geografis terbatas pada wilayah perkotaan di Indonesia
                      </BulletPoint>
                      <BulletPoint delay={6}>
                        Pengembangan aplikasi berbasis web dengan dukungan responsif untuk perangkat mobile
                      </BulletPoint>
                    </ul>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 5: Tujuan Projek */}
            <Slide isActive={currentSlide === 4}>
              <SlideTitle>Tujuan Projek</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Tujuan Umum:</h3>
                    <p>
                      Mengembangkan aplikasi Web GIS berbasis vektor yang komprehensif untuk monitoring, analisis, dan
                      pengelolaan isu lingkungan di Indonesia, khususnya terkait pengelolaan sampah, pencemaran sungai,
                      dan kawasan rawan banjir.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Tujuan Khusus:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={0}>
                        Membangun platform visualisasi data spasial yang interaktif dengan akurasi ≥95% untuk
                        representasi objek lingkungan (tempat sampah, sungai tercemar, kawasan banjir)
                      </BulletPoint>
                      <BulletPoint delay={1}>
                        Mengimplementasikan minimal 5 fungsi analisis spasial yang relevan untuk mendukung pengambilan
                        keputusan terkait pengelolaan lingkungan
                      </BulletPoint>
                      <BulletPoint delay={2}>
                        Mengembangkan antarmuka pengguna yang intuitif dengan skor usability testing minimal 85/100
                      </BulletPoint>
                      <BulletPoint delay={3}>
                        Mencapai waktu respons sistem maksimal 3 detik untuk query data dan 5 detik untuk analisis
                        spasial
                      </BulletPoint>
                      <BulletPoint delay={4}>
                        Memfasilitasi kolaborasi antar stakeholder dengan fitur berbagi dan ekspor data yang mendukung
                        minimal 3 format standar (GeoJSON, KML, Shapefile)
                      </BulletPoint>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Output yang Diharapkan:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={5}>
                        Aplikasi Web GIS yang fully functional dengan dokumentasi lengkap
                      </BulletPoint>
                      <BulletPoint delay={6}>Dataset terstruktur untuk ketiga jenis isu lingkungan</BulletPoint>
                      <BulletPoint delay={7}>Laporan analisis dan rekomendasi pengelolaan lingkungan</BulletPoint>
                    </ul>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 6: Manfaat Projek */}
            <Slide isActive={currentSlide === 5}>
              <SlideTitle>Manfaat Projek</SlideTitle>
              <SlideContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Manfaat Akademis:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={0}>
                        Pengembangan metodologi integrasi data spasial untuk isu lingkungan
                      </BulletPoint>
                      <BulletPoint delay={1}>
                        Kontribusi pada pengembangan algoritma analisis spasial untuk pengelolaan lingkungan
                      </BulletPoint>
                      <BulletPoint delay={2}>
                        Eksplorasi pendekatan visualisasi data lingkungan yang efektif
                      </BulletPoint>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Manfaat Praktis:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={3}>
                        Penyediaan informasi spasial yang akurat untuk pengambilan keputusan
                      </BulletPoint>
                      <BulletPoint delay={4}>
                        Peningkatan efisiensi dalam pengelolaan sumber daya lingkungan
                      </BulletPoint>
                      <BulletPoint delay={5}>
                        Fasilitasi kolaborasi antar stakeholder dalam penanganan isu lingkungan
                      </BulletPoint>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Manfaat bagi Stakeholder:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={6}>
                        <strong>Pemerintah:</strong> Dasar pengambilan kebijakan berbasis data spasial yang akurat
                      </BulletPoint>
                      <BulletPoint delay={7}>
                        <strong>Masyarakat:</strong> Akses informasi lingkungan yang transparan dan partisipatif
                      </BulletPoint>
                      <BulletPoint delay={8}>
                        <strong>Institusi Pendidikan:</strong> Sumber data untuk penelitian dan pembelajaran
                      </BulletPoint>
                      <BulletPoint delay={9}>
                        <strong>NGO Lingkungan:</strong> Alat advokasi dan monitoring berbasis bukti
                      </BulletPoint>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Potensi Dampak:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={10}>
                        <strong>Lingkungan:</strong> Pengelolaan lingkungan yang lebih efektif dan berkelanjutan
                      </BulletPoint>
                      <BulletPoint delay={11}>
                        <strong>Sosial:</strong> Peningkatan kesadaran dan partisipasi masyarakat
                      </BulletPoint>
                      <BulletPoint delay={12}>
                        <strong>Ekonomi:</strong> Pengurangan biaya penanganan dampak kerusakan lingkungan
                      </BulletPoint>
                    </ul>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 7: Tinjauan Pustaka */}
            <Slide isActive={currentSlide === 6}>
              <SlideTitle>Tinjauan Pustaka</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Konsep Dasar GIS dan Web GIS:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          Sistem Informasi Geografis (GIS) sebagai sistem untuk mengelola, menganalisis, dan
                          memvisualisasikan data spasial (Longley et al., 2015)
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          Web GIS sebagai evolusi GIS yang memanfaatkan teknologi web untuk aksesibilitas yang lebih
                          luas (Fu & Sun, 2018)
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Teori Data Vektor dalam GIS:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={2}>
                          Model data vektor: representasi objek diskrit melalui point, line, dan polygon (Burrough et
                          al., 2015)
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          Kelebihan pendekatan vektor untuk analisis topologi dan representasi batas yang tepat (Heywood
                          et al., 2019)
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Perbandingan Framework Web GIS:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Leaflet:</strong> Ringan, fokus pada mobile, API sederhana (Agafonkin, 2019)
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>OpenLayers:</strong> Fitur lengkap, dukungan format data luas, kurva pembelajaran
                          lebih tinggi (OpenLayers Community, 2020)
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>ArcGIS API:</strong> Integrasi ekosistem Esri, fitur analisis canggih, berbayar (Esri,
                          2021)
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">State of the Art:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={7}>
                          Integrasi Web GIS dengan IoT untuk monitoring lingkungan real-time (Li et al., 2020)
                        </BulletPoint>
                        <BulletPoint delay={8}>
                          Pendekatan citizen science dalam pengumpulan data lingkungan (Newman et al., 2017)
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          Visualisasi data 3D dan temporal untuk analisis lingkungan (Tomaszewski, 2020)
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Gap Riset yang Akan Diisi:</h3>
                    <p>
                      Meskipun banyak aplikasi Web GIS yang telah dikembangkan, masih terdapat kesenjangan dalam
                      integrasi data lingkungan yang komprehensif, khususnya untuk konteks Indonesia. EcoRadar akan
                      mengisi gap ini dengan fokus pada tiga isu lingkungan utama dan pendekatan yang disesuaikan dengan
                      karakteristik geografis dan sosial Indonesia.
                    </p>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 8: Metodologi */}
            <Slide isActive={currentSlide === 7}>
              <SlideTitle>Metodologi</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Pendekatan Penelitian:</h3>
                      <p>
                        Mixed method dengan kombinasi pendekatan kuantitatif (analisis data spasial) dan kualitatif
                        (wawancara stakeholder dan usability testing).
                      </p>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Metodologi Pengembangan Software:</h3>
                      <p>
                        Agile Scrum dengan sprint 2 minggu untuk memastikan fleksibilitas dan adaptasi terhadap
                        kebutuhan pengguna yang berkembang.
                      </p>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Metode Pengumpulan Data:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>Pengumpulan data sekunder dari instansi pemerintah dan NGO</BulletPoint>
                        <BulletPoint delay={1}>Survei lapangan untuk validasi dan pengumpulan data primer</BulletPoint>
                        <BulletPoint delay={2}>Wawancara dengan stakeholder untuk identifikasi kebutuhan</BulletPoint>
                        <BulletPoint delay={3}>Pendekatan citizen science untuk data partisipatif</BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Metode Analisis Data:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>Analisis spasial (buffer, overlay, network analysis)</BulletPoint>
                        <BulletPoint delay={5}>Analisis statistik spasial untuk identifikasi pola dan tren</BulletPoint>
                        <BulletPoint delay={6}>Analisis tematik untuk kategorisasi dan visualisasi</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Metode Pengujian:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={7}>Unit testing untuk komponen individual</BulletPoint>
                        <BulletPoint delay={8}>Integration testing untuk interaksi antar komponen</BulletPoint>
                        <BulletPoint delay={9}>Usability testing dengan representasi pengguna akhir</BulletPoint>
                        <BulletPoint delay={10}>Performance testing untuk evaluasi kinerja sistem</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Pembagian Tugas Tim:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={11}>Andi Wijaya: Project Manager & Backend Developer</BulletPoint>
                        <BulletPoint delay={12}>Budi Santoso: GIS Specialist & Data Analyst</BulletPoint>
                        <BulletPoint delay={13}>Cindy Paramita: Frontend Developer & UI/UX Designer</BulletPoint>
                        <BulletPoint delay={14}>Deni Kurniawan: Database Administrator & DevOps</BulletPoint>
                      </ul>
                    </div>
                  </div>
                </div>
              </SlideContent>
              <SlideImage
                src="/placeholder.svg?height=250&width=600"
                alt="Diagram Metodologi Penelitian"
                height={250}
              />
            </Slide>

            {/* Slide 9: Spesifikasi Data */}
            <Slide isActive={currentSlide === 8}>
              <SlideTitle>Spesifikasi Data</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Data Point (Tempat Sampah):</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Entitas:</strong> Tempat sampah publik
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Atribut:</strong> ID, nama, jenis, kapasitas, kondisi, pengelola, alamat, kecamatan,
                          kelurahan, tanggal pemeliharaan terakhir, foto
                        </BulletPoint>
                        <BulletPoint delay={2}>
                          <strong>Metode pengumpulan:</strong> Survei lapangan, data dari dinas kebersihan
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          <strong>Jumlah perkiraan:</strong> 500-1000 titik per kota
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Data Line (Sungai Tercemar):</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Entitas:</strong> Sungai dan saluran air
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Atribut:</strong> ID, nama sungai, panjang, lebar rata-rata, tingkat pencemaran, jenis
                          pencemaran, sumber pencemaran, dampak lingkungan, upaya penanganan, status pemulihan
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>Metode pengumpulan:</strong> Data dari BMKG, dinas lingkungan hidup, validasi lapangan
                        </BulletPoint>
                        <BulletPoint delay={7}>
                          <strong>Perkiraan:</strong> 50-100 sungai dengan total 200-300 km
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Data Polygon (Kawasan Banjir):</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={8}>
                          <strong>Entitas:</strong> Kawasan rawan dan terdampak banjir
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          <strong>Atribut:</strong> ID, nama kawasan, kecamatan, kelurahan, luas area, kedalaman
                          rata-rata, penyebab utama, jumlah penduduk terdampak, infrastruktur terdampak, tingkat risiko,
                          upaya mitigasi
                        </BulletPoint>
                        <BulletPoint delay={10}>
                          <strong>Metode pengumpulan:</strong> Data historis BNPB, pemodelan hidrologi, citra satelit
                        </BulletPoint>
                        <BulletPoint delay={11}>
                          <strong>Perkiraan:</strong> 20-30 kawasan dengan total 1000-1500 hektar
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Spesifikasi Teknis Data:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={12}>
                        <strong>Sistem koordinat:</strong> WGS 84 / UTM zone 48S (EPSG:32748) untuk Indonesia bagian
                        barat
                      </BulletPoint>
                      <BulletPoint delay={13}>
                        <strong>Skala:</strong> 1:10.000 untuk area perkotaan
                      </BulletPoint>
                      <BulletPoint delay={14}>
                        <strong>Format penyimpanan:</strong> GeoJSON untuk web, PostGIS untuk database
                      </BulletPoint>
                      <BulletPoint delay={15}>
                        <strong>Strategi pembaruan:</strong> Update bulanan untuk data statis, near real-time untuk data
                        dinamis (status pencemaran, kejadian banjir)
                      </BulletPoint>
                    </ul>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 10: Arsitektur Sistem */}
            <Slide isActive={currentSlide === 9}>
              <SlideTitle>Arsitektur Sistem</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <SlideImage
                    src="/placeholder.svg?height=300&width=700"
                    alt="Diagram Arsitektur Sistem EcoRadar"
                    height={300}
                    width={700}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Frontend:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Framework:</strong> React.js dengan Next.js untuk SSR dan optimasi
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Library peta:</strong> Leaflet dengan plugin untuk analisis spasial
                        </BulletPoint>
                        <BulletPoint delay={2}>
                          <strong>UI/UX:</strong> Tailwind CSS untuk styling responsif
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          <strong>State management:</strong> Redux Toolkit dengan RTK Query
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Backend:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Server:</strong> Node.js dengan Express.js
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>API:</strong> RESTful dengan OpenAPI specification
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>Authentication:</strong> JWT dengan role-based access control
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Database:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={7}>
                          <strong>DBMS:</strong> PostgreSQL dengan ekstensi PostGIS
                        </BulletPoint>
                        <BulletPoint delay={8}>
                          <strong>Schema:</strong> Normalisasi dengan relasi antar entitas spasial
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          <strong>Indexing:</strong> Spatial indexing (GIST) untuk query spasial efisien
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Server GIS:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={10}>
                          <strong>Software:</strong> GeoServer untuk OGC services (WMS, WFS)
                        </BulletPoint>
                        <BulletPoint delay={11}>
                          <strong>Caching:</strong> GeoWebCache untuk tile caching
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Infrastruktur:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={12}>
                          <strong>Hosting:</strong> Cloud-based (AWS) dengan auto-scaling
                        </BulletPoint>
                        <BulletPoint delay={13}>
                          <strong>Deployment:</strong> Docker containers dengan Kubernetes
                        </BulletPoint>
                        <BulletPoint delay={14}>
                          <strong>CI/CD:</strong> GitHub Actions untuk continuous integration
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 11: Desain Antarmuka */}
            <Slide isActive={currentSlide === 10}>
              <SlideTitle>Desain Antarmuka</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Filosofi Desain:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          User-centered design dengan fokus pada kemudahan akses informasi
                        </BulletPoint>
                        <BulletPoint delay={1}>Prinsip "less is more" untuk mengurangi cognitive load</BulletPoint>
                        <BulletPoint delay={2}>Konsistensi visual dan interaktif di seluruh aplikasi</BulletPoint>
                        <BulletPoint delay={3}>Responsif untuk berbagai ukuran layar dan perangkat</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Komponen Utama:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Header:</strong> Logo, navigasi utama, dan kontrol pengguna
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Sidebar:</strong> Kontrol layer, filter, dan legenda
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>Map View:</strong> Area utama dengan peta interaktif
                        </BulletPoint>
                        <BulletPoint delay={7}>
                          <strong>Info Panel:</strong> Detail objek yang dipilih
                        </BulletPoint>
                        <BulletPoint delay={8}>
                          <strong>Toolbar:</strong> Tools analisis dan navigasi peta
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Fitur Interaktif:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={9}>Popup informasi saat hover/klik pada objek</BulletPoint>
                        <BulletPoint delay={10}>Drag-and-drop untuk pengaturan layer</BulletPoint>
                        <BulletPoint delay={11}>Slider untuk filter temporal dan atribut numerik</BulletPoint>
                        <BulletPoint delay={12}>Drawing tools untuk analisis kustom</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Aksesibilitas:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={13}>Kontras warna yang memenuhi standar WCAG 2.1 AA</BulletPoint>
                        <BulletPoint delay={14}>Keyboard navigation untuk semua fungsi utama</BulletPoint>
                        <BulletPoint delay={15}>Screen reader compatibility dengan ARIA labels</BulletPoint>
                        <BulletPoint delay={16}>Text alternatives untuk konten visual</BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <SlideImage
                    src="/placeholder.svg?height=300&width=700"
                    alt="Mockup Antarmuka EcoRadar"
                    height={300}
                    width={700}
                  />
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 12: Fitur dan Fungsionalitas */}
            <Slide isActive={currentSlide === 11}>
              <SlideTitle>Fitur dan Fungsionalitas</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Visualisasi Dasar:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>Kontrol layer dengan toggle visibility dan opacity</BulletPoint>
                        <BulletPoint delay={1}>
                          Styling vektor dinamis berdasarkan atribut (kondisi tempat sampah, tingkat pencemaran, risiko
                          banjir)
                        </BulletPoint>
                        <BulletPoint delay={2}>Labeling otomatis dengan collision detection</BulletPoint>
                        <BulletPoint delay={3}>Multiple base maps (OSM, satellite, terrain)</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Pencarian dan Filter:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>Pencarian berdasarkan alamat, nama objek, atau atribut</BulletPoint>
                        <BulletPoint delay={5}>Filter spasial (dalam radius, dalam polygon)</BulletPoint>
                        <BulletPoint delay={6}>Filter atribut (kondisi, tingkat pencemaran, risiko)</BulletPoint>
                        <BulletPoint delay={7}>Penyimpanan filter favorit untuk penggunaan berulang</BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Analisis Spasial:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={8}>Buffer analysis untuk identifikasi area terdampak</BulletPoint>
                        <BulletPoint delay={9}>Overlay analysis untuk identifikasi overlap isu lingkungan</BulletPoint>
                        <BulletPoint delay={10}>Network analysis untuk rute optimal pengelolaan sampah</BulletPoint>
                        <BulletPoint delay={11}>Hotspot analysis untuk identifikasi cluster isu lingkungan</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Ekspor/Impor Data:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={12}>Ekspor data dalam format GeoJSON, KML, dan Shapefile</BulletPoint>
                        <BulletPoint delay={13}>Ekspor peta sebagai gambar atau PDF</BulletPoint>
                        <BulletPoint delay={14}>Impor data pengguna untuk analisis kustom</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Fitur Kolaboratif:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={15}>Pelaporan isu lingkungan oleh pengguna (citizen science)</BulletPoint>
                        <BulletPoint delay={16}>Berbagi view peta dengan link atau embed</BulletPoint>
                        <BulletPoint delay={17}>Komentar dan diskusi pada objek spasial</BulletPoint>
                      </ul>
                    </div>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 13: Alur Kerja Pengembangan */}
            <Slide isActive={currentSlide === 12}>
              <SlideTitle>Alur Kerja Pengembangan</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <SlideImage
                    src="/placeholder.svg?height=250&width=700"
                    alt="Diagram Alur Kerja Pengembangan"
                    height={250}
                    width={700}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Fase 1: Setup (2 minggu)</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>Konfigurasi lingkungan pengembangan</BulletPoint>
                        <BulletPoint delay={1}>Setup repository Git dan workflow</BulletPoint>
                        <BulletPoint delay={2}>Konfigurasi CI/CD pipeline</BulletPoint>
                        <BulletPoint delay={3}>Pemilihan dan setup teknologi</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Fase 2: Backend (4 minggu)</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>Desain dan implementasi database</BulletPoint>
                        <BulletPoint delay={5}>Pengembangan API endpoints</BulletPoint>
                        <BulletPoint delay={6}>Implementasi autentikasi dan otorisasi</BulletPoint>
                        <BulletPoint delay={7}>Setup GeoServer dan konfigurasi services</BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Fase 3: Frontend (6 minggu)</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={8}>Implementasi UI components</BulletPoint>
                        <BulletPoint delay={9}>Integrasi peta dan layer vektor</BulletPoint>
                        <BulletPoint delay={10}>Implementasi fitur interaktif</BulletPoint>
                        <BulletPoint delay={11}>Pengembangan analisis spasial client-side</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Fase 4: Integrasi & Testing (4 minggu)</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={12}>Integrasi frontend dan backend</BulletPoint>
                        <BulletPoint delay={13}>Unit dan integration testing</BulletPoint>
                        <BulletPoint delay={14}>Performance testing dan optimasi</BulletPoint>
                        <BulletPoint delay={15}>Usability testing dan perbaikan</BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Fase 5: Deployment (2 minggu)</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={16}>Setup lingkungan production</BulletPoint>
                        <BulletPoint delay={17}>Deployment dan konfigurasi</BulletPoint>
                        <BulletPoint delay={18}>Dokumentasi teknis dan pengguna</BulletPoint>
                        <BulletPoint delay={19}>Training untuk stakeholder</BulletPoint>
                      </ul>
                    </div>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 14: Rencana Implementasi */}
            <Slide isActive={currentSlide === 13}>
              <SlideTitle>Rencana Implementasi</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Sprint Planning:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Sprint 1-2:</strong> Setup dan konfigurasi awal
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Sprint 3-4:</strong> Database dan API dasar
                        </BulletPoint>
                        <BulletPoint delay={2}>
                          <strong>Sprint 5-6:</strong> Integrasi GeoServer dan data
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          <strong>Sprint 7-9:</strong> UI dasar dan visualisasi peta
                        </BulletPoint>
                        <BulletPoint delay={4}>
                          <strong>Sprint 10-12:</strong> Fitur analisis dan interaktif
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Sprint 13-14:</strong> Testing dan perbaikan
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>Sprint 15-16:</strong> Deployment dan dokumentasi
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Strategi Pengujian:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={7}>
                          <strong>Unit Testing:</strong> Jest untuk frontend, Mocha untuk backend
                        </BulletPoint>
                        <BulletPoint delay={8}>
                          <strong>Integration Testing:</strong> Cypress untuk end-to-end testing
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          <strong>Performance Testing:</strong> JMeter untuk load testing API
                        </BulletPoint>
                        <BulletPoint delay={10}>
                          <strong>Usability Testing:</strong> Think-aloud protocol dengan 10-15 pengguna
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Rencana Deployment:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={11}>
                          <strong>Staging Environment:</strong> Setup 1 bulan sebelum production
                        </BulletPoint>
                        <BulletPoint delay={12}>
                          <strong>Production Deployment:</strong> Blue-green deployment untuk zero downtime
                        </BulletPoint>
                        <BulletPoint delay={13}>
                          <strong>Rollback Strategy:</strong> Automated rollback jika deteksi anomali
                        </BulletPoint>
                        <BulletPoint delay={14}>
                          <strong>Monitoring:</strong> Prometheus dan Grafana untuk metrics
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Rencana Monitoring dan Evaluasi:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={15}>
                          <strong>Performance Metrics:</strong> Response time, throughput, error rate
                        </BulletPoint>
                        <BulletPoint delay={16}>
                          <strong>User Metrics:</strong> Engagement, retention, feature usage
                        </BulletPoint>
                        <BulletPoint delay={17}>
                          <strong>Feedback Collection:</strong> In-app feedback, survei pengguna
                        </BulletPoint>
                        <BulletPoint delay={18}>
                          <strong>Iterative Improvement:</strong> Analisis feedback untuk prioritas pengembangan
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <SlideImage
                    src="/placeholder.svg?height=200&width=700"
                    alt="Gantt Chart Implementasi"
                    height={200}
                    width={700}
                  />
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 15: Tantangan dan Mitigasi Risiko */}
            <Slide isActive={currentSlide === 14}>
              <SlideTitle>Tantangan dan Mitigasi Risiko</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Kendala Teknis:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Tantangan:</strong> Performance rendering data vektor yang kompleks
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Mitigasi:</strong> Implementasi clustering, simplifikasi geometri, dan lazy loading
                        </BulletPoint>
                      </ul>
                      <ul className="space-y-2 mt-4">
                        <BulletPoint delay={2}>
                          <strong>Tantangan:</strong> Kompatibilitas browser dan perangkat mobile
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          <strong>Mitigasi:</strong> Progressive enhancement, feature detection, dan responsive design
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Risiko Terkait Data:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Tantangan:</strong> Kualitas dan konsistensi data dari berbagai sumber
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Mitigasi:</strong> Data validation pipeline, standarisasi format, dan metadata
                        </BulletPoint>
                      </ul>
                      <ul className="space-y-2 mt-4">
                        <BulletPoint delay={6}>
                          <strong>Tantangan:</strong> Ketersediaan data real-time untuk monitoring
                        </BulletPoint>
                        <BulletPoint delay={7}>
                          <strong>Mitigasi:</strong> Integrasi dengan IoT, citizen science, dan proxy indicators
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Risiko Pengembangan:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={8}>
                          <strong>Tantangan:</strong> Keterlambatan timeline karena kompleksitas
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          <strong>Mitigasi:</strong> Agile methodology, MVP approach, dan buffer time 20%
                        </BulletPoint>
                      </ul>
                      <ul className="space-y-2 mt-4">
                        <BulletPoint delay={10}>
                          <strong>Tantangan:</strong> Integrasi komponen yang kompleks
                        </BulletPoint>
                        <BulletPoint delay={11}>
                          <strong>Mitigasi:</strong> Continuous integration, modular architecture, dan interface
                          contracts
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Rencana Contingency:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={12}>
                          <strong>Data Backup:</strong> Daily incremental dan weekly full backup
                        </BulletPoint>
                        <BulletPoint delay={13}>
                          <strong>Alternative Technologies:</strong> Fallback options untuk komponen kritis (MapLibre
                          sebagai alternatif Leaflet)
                        </BulletPoint>
                        <BulletPoint delay={14}>
                          <strong>Disaster Recovery:</strong> Multi-region deployment dengan failover otomatis
                        </BulletPoint>
                        <BulletPoint delay={15}>
                          <strong>Scope Reduction:</strong> Prioritas fitur yang dapat dikurangi jika diperlukan
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Matriks Risiko:</h3>
                    <SlideImage
                      src="/placeholder.svg?height=250&width=600"
                      alt="Matriks Risiko Projek"
                      height={250}
                      width={600}
                    />
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 16: Anggaran dan Sumber Daya */}
            <Slide isActive={currentSlide === 15}>
              <SlideTitle>Anggaran dan Sumber Daya</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Kebutuhan Perangkat Keras:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Development:</strong> 4 workstation high-end (Rp 60 juta)
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Server Development:</strong> 1 server dengan GPU (Rp 35 juta)
                        </BulletPoint>
                        <BulletPoint delay={2}>
                          <strong>Perangkat Mobile:</strong> 4 smartphone dan 2 tablet untuk testing (Rp 25 juta)
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Kebutuhan Perangkat Lunak:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={3}>
                          <strong>Lisensi Development:</strong> IDE, design tools (Rp 30 juta/tahun)
                        </BulletPoint>
                        <BulletPoint delay={4}>
                          <strong>Cloud Services:</strong> AWS (EC2, RDS, S3) (Rp 50 juta/tahun)
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Monitoring & Analytics:</strong> New Relic, Google Analytics (Rp 15 juta/tahun)
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Sumber Daya Manusia:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={6}>
                          <strong>Tim Inti:</strong> 4 anggota tim (full-time, 18 bulan)
                        </BulletPoint>
                        <BulletPoint delay={7}>
                          <strong>Konsultan:</strong> GIS specialist, UX researcher (part-time)
                        </BulletPoint>
                        <BulletPoint delay={8}>
                          <strong>Support:</strong> DevOps engineer, QA tester (part-time)
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Biaya Operasional:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={9}>
                          <strong>Pengumpulan Data:</strong> Survei lapangan, akuisisi data (Rp 40 juta)
                        </BulletPoint>
                        <BulletPoint delay={10}>
                          <strong>Training & Workshop:</strong> Pelatihan tim dan stakeholder (Rp 25 juta)
                        </BulletPoint>
                        <BulletPoint delay={11}>
                          <strong>Usability Testing:</strong> Rekrutmen partisipan, fasilitas (Rp 20 juta)
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Ringkasan Anggaran:</h3>
                    <SlideImage
                      src="/placeholder.svg?height=250&width=600"
                      alt="Grafik Anggaran Projek"
                      height={250}
                      width={600}
                    />
                    <p className="mt-4 text-center text-muted-foreground">
                      Total estimasi anggaran: Rp 450 juta untuk pengembangan 18 bulan
                    </p>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 17: Rencana Keberlanjutan */}
            <Slide isActive={currentSlide === 16}>
              <SlideTitle>Rencana Keberlanjutan</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Strategi Pemeliharaan:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Maintenance Rutin:</strong> Update mingguan untuk security patches, bulanan untuk
                          fitur minor
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Bug Fixing:</strong> Sistem tiket dengan prioritas berdasarkan severity
                        </BulletPoint>
                        <BulletPoint delay={2}>
                          <strong>Performance Monitoring:</strong> Evaluasi performa bulanan dan optimasi
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          <strong>Data Updates:</strong> Mekanisme pembaruan data otomatis dan manual
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Rencana Pengembangan Masa Depan:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Fase 2 (Tahun 2):</strong> Integrasi IoT untuk monitoring real-time
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Fase 3 (Tahun 2-3):</strong> Implementasi machine learning untuk prediksi
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>Fase 4 (Tahun 3-4):</strong> Ekspansi ke isu lingkungan tambahan
                        </BulletPoint>
                        <BulletPoint delay={7}>
                          <strong>Fase 5 (Tahun 4-5):</strong> Pengembangan platform mobile native
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Strategi Diseminasi:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={8}>
                          <strong>User Training:</strong> Workshop untuk stakeholder utama
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          <strong>Dokumentasi:</strong> User guide, video tutorial, dan knowledge base
                        </BulletPoint>
                        <BulletPoint delay={10}>
                          <strong>Community Building:</strong> Forum pengguna dan program ambassador
                        </BulletPoint>
                        <BulletPoint delay={11}>
                          <strong>Academic Outreach:</strong> Publikasi dan presentasi di konferensi
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Pengukuran Keberhasilan Jangka Panjang:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={12}>
                          <strong>Adoption Metrics:</strong> Jumlah pengguna aktif, retention rate
                        </BulletPoint>
                        <BulletPoint delay={13}>
                          <strong>Impact Metrics:</strong> Peningkatan efisiensi pengelolaan lingkungan
                        </BulletPoint>
                        <BulletPoint delay={14}>
                          <strong>Technical Metrics:</strong> Uptime, performance, security incidents
                        </BulletPoint>
                        <BulletPoint delay={15}>
                          <strong>Sustainability Metrics:</strong> Pengurangan biaya operasional, ROI
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <SlideImage
                    src="/placeholder.svg?height=250&width=600"
                    alt="Roadmap Pengembangan Jangka Panjang"
                    height={250}
                    width={600}
                  />
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 18: Originalitas dan Inovasi */}
            <Slide isActive={currentSlide === 17}>
              <SlideTitle>Originalitas dan Inovasi</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Aspek Inovatif:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          <strong>Integrasi Komprehensif:</strong> Pendekatan holistik yang menggabungkan tiga isu
                          lingkungan utama dalam satu platform
                        </BulletPoint>
                        <BulletPoint delay={1}>
                          <strong>Citizen Science:</strong> Mekanisme crowdsourcing data yang tervalidasi untuk
                          melengkapi data resmi
                        </BulletPoint>
                        <BulletPoint delay={2}>
                          <strong>Analisis Prediktif:</strong> Implementasi model prediktif untuk forecasting risiko
                          lingkungan
                        </BulletPoint>
                        <BulletPoint delay={3}>
                          <strong>Visualisasi Adaptif:</strong> Teknik visualisasi yang menyesuaikan dengan konteks dan
                          kebutuhan pengguna
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Diferensiasi:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          <strong>Vs. Solusi Komersial:</strong> Fokus spesifik pada konteks lokal Indonesia dengan
                          biaya lebih rendah
                        </BulletPoint>
                        <BulletPoint delay={5}>
                          <strong>Vs. Solusi Open Source:</strong> Integrasi yang lebih baik dengan sistem pemerintahan
                          dan regulasi lokal
                        </BulletPoint>
                        <BulletPoint delay={6}>
                          <strong>Vs. Solusi Existing:</strong> Pendekatan multi-isu vs. solusi single-issue yang ada
                          saat ini
                        </BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Nilai Kebaruan:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={7}>
                          <strong>Metodologi Hybrid:</strong> Kombinasi data resmi, sensor IoT, dan laporan masyarakat
                        </BulletPoint>
                        <BulletPoint delay={8}>
                          <strong>UX Kontekstual:</strong> Antarmuka yang beradaptasi dengan peran pengguna dan konteks
                          penggunaan
                        </BulletPoint>
                        <BulletPoint delay={9}>
                          <strong>Analisis Lintas Sektor:</strong> Kemampuan menganalisis hubungan antar isu lingkungan
                          yang berbeda
                        </BulletPoint>
                        <BulletPoint delay={10}>
                          <strong>Collaborative Decision Support:</strong> Fitur kolaborasi real-time untuk pengambilan
                          keputusan
                        </BulletPoint>
                      </ul>

                      <h3 className="text-xl font-semibold mb-3 mt-6">Potensi Pengembangan:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={11}>
                          <strong>Ekspansi Geografis:</strong> Skalabilitas untuk implementasi di berbagai wilayah
                        </BulletPoint>
                        <BulletPoint delay={12}>
                          <strong>Integrasi Teknologi Baru:</strong> Potensi integrasi dengan AR/VR untuk visualisasi
                          immersive
                        </BulletPoint>
                        <BulletPoint delay={13}>
                          <strong>Ecosystem Development:</strong> Platform untuk pengembangan aplikasi pihak ketiga
                        </BulletPoint>
                        <BulletPoint delay={14}>
                          <strong>Research Platform:</strong> Basis untuk penelitian lingkungan dan kebijakan publik
                        </BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <SlideImage
                    src="/placeholder.svg?height=250&width=600"
                    alt="Diagram Inovasi EcoRadar"
                    height={250}
                    width={600}
                  />
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 19: Kesimpulan */}
            <Slide isActive={currentSlide === 18}>
              <SlideTitle>Kesimpulan</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <p className="text-lg">
                    EcoRadar merupakan solusi Web GIS berbasis vektor yang komprehensif untuk monitoring dan pengelolaan
                    isu lingkungan di Indonesia, dengan fokus pada tiga isu utama: pengelolaan sampah, pencemaran
                    sungai, dan kawasan rawan banjir.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Kelebihan Utama:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={0}>
                          Integrasi data spasial dari berbagai sumber dalam satu platform
                        </BulletPoint>
                        <BulletPoint delay={1}>Visualisasi interaktif yang intuitif dan responsif</BulletPoint>
                        <BulletPoint delay={2}>Analisis spasial yang relevan untuk pengambilan keputusan</BulletPoint>
                        <BulletPoint delay={3}>Pendekatan kolaboratif yang melibatkan berbagai stakeholder</BulletPoint>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Nilai Inovatif:</h3>
                      <ul className="space-y-2">
                        <BulletPoint delay={4}>
                          Pendekatan holistik untuk isu lingkungan yang saling terkait
                        </BulletPoint>
                        <BulletPoint delay={5}>Integrasi citizen science dengan data resmi</BulletPoint>
                        <BulletPoint delay={6}>Analisis prediktif untuk antisipasi risiko lingkungan</BulletPoint>
                        <BulletPoint delay={7}>Desain yang disesuaikan dengan konteks lokal Indonesia</BulletPoint>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Dampak yang Diharapkan:</h3>
                    <ul className="space-y-2">
                      <BulletPoint delay={8}>
                        Peningkatan efisiensi dalam pengelolaan sumber daya lingkungan
                      </BulletPoint>
                      <BulletPoint delay={9}>Pengambilan keputusan berbasis data yang lebih baik</BulletPoint>
                      <BulletPoint delay={10}>Peningkatan kesadaran dan partisipasi masyarakat</BulletPoint>
                      <BulletPoint delay={11}>Kontribusi pada pembangunan berkelanjutan di Indonesia</BulletPoint>
                    </ul>
                  </div>

                  <div className="mt-8 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      <p className="text-xl font-semibold text-primary">
                        "EcoRadar: Memetakan Masa Depan Lingkungan yang Lebih Baik"
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 20: Referensi */}
            <Slide isActive={currentSlide === 19}>
              <SlideTitle>Referensi</SlideTitle>
              <SlideContent>
                <div className="space-y-4 text-sm">
                  <BulletPoint delay={0}>
                    Agafonkin, V. (2019). Leaflet: an open-source JavaScript library for mobile-friendly interactive
                    maps. Retrieved from https://leafletjs.com
                  </BulletPoint>
                  <BulletPoint delay={1}>
                    Burrough, P. A., McDonnell, R. A., & Lloyd, C. D. (2015). Principles of geographical information
                    systems. Oxford University Press.
                  </BulletPoint>
                  <BulletPoint delay={2}>
                    Esri. (2021). ArcGIS API for JavaScript. Retrieved from https://developers.arcgis.com/javascript/
                  </BulletPoint>
                  <BulletPoint delay={3}>
                    Fu, P., & Sun, J. (2018). Web GIS: Principles and applications. Esri Press.
                  </BulletPoint>
                  <BulletPoint delay={4}>
                    Heywood, I., Cornelius, S., & Carver, S. (2019). An introduction to geographical information
                    systems. Pearson.
                  </BulletPoint>
                  <BulletPoint delay={5}>
                    Li, S., Dragicevic, S., & Veenendaal, B. (2020). Advances in web-based GIS, mapping services and
                    applications. CRC Press.
                  </BulletPoint>
                  <BulletPoint delay={6}>
                    Longley, P. A., Goodchild, M. F., Maguire, D. J., & Rhind, D. W. (2015). Geographic information
                    science and systems. John Wiley & Sons.
                  </BulletPoint>
                  <BulletPoint delay={7}>
                    Newman, G., Wiggins, A., Crall, A., Graham, E., Newman, S., & Crowston, K. (2017). The future of
                    citizen science: emerging technologies and shifting paradigms. Frontiers in Ecology and the
                    Environment, 15(6), 298-304.
                  </BulletPoint>
                  <BulletPoint delay={8}>
                    OpenLayers Community. (2020). OpenLayers: A high-performance, feature-packed library for all your
                    mapping needs. Retrieved from https://openlayers.org
                  </BulletPoint>
                  <BulletPoint delay={9}>
                    Tomaszewski, B. (2020). Geographic information systems (GIS) for disaster management. CRC Press.
                  </BulletPoint>
                  <BulletPoint delay={10}>
                    Kementerian Lingkungan Hidup dan Kehutanan. (2022). Status Lingkungan Hidup Indonesia 2021. Jakarta:
                    KLHK.
                  </BulletPoint>
                  <BulletPoint delay={11}>
                    Badan Nasional Penanggulangan Bencana. (2021). Data Bencana Indonesia 2020. Jakarta: BNPB.
                  </BulletPoint>
                  <BulletPoint delay={12}>
                    Dinas Lingkungan Hidup DKI Jakarta. (2022). Laporan Kualitas Lingkungan Hidup DKI Jakarta 2021.
                    Jakarta: DLH DKI.
                  </BulletPoint>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 21: Lampiran */}
            <Slide isActive={currentSlide === 20}>
              <SlideTitle>Lampiran</SlideTitle>
              <SlideContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Dataset Contoh:</h3>
                      <SlideImage
                        src="/placeholder.svg?height=200&width=300"
                        alt="Contoh Dataset"
                        height={200}
                        width={300}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Contoh struktur data tempat sampah dalam format GeoJSON
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Prototipe UI:</h3>
                      <SlideImage
                        src="/placeholder.svg?height=200&width=300"
                        alt="Prototipe UI"
                        height={200}
                        width={300}
                      />
                      <p className="text-sm text-muted-foreground mt-2">Mockup awal antarmuka EcoRadar</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Dokumentasi API:</h3>
                      <SlideImage
                        src="/placeholder.svg?height=200&width=300"
                        alt="Dokumentasi API"
                        height={200}
                        width={300}
                      />
                      <p className="text-sm text-muted-foreground mt-2">Contoh dokumentasi API endpoints</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Hasil Studi Pendahuluan:</h3>
                      <SlideImage
                        src="/placeholder.svg?height=200&width=300"
                        alt="Hasil Studi Pendahuluan"
                        height={200}
                        width={300}
                      />
                      <p className="text-sm text-muted-foreground mt-2">Grafik hasil survei kebutuhan pengguna</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-center text-muted-foreground">
                      Dokumen lengkap tersedia dalam repositori projek dan lampiran proposal
                    </p>
                  </div>
                </div>
              </SlideContent>
            </Slide>

            {/* Slide 22: Penutup */}
            <Slide isActive={currentSlide === 21}>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <div className="w-[100px] h-[100px]"></div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl font-bold mb-8"
                >
                  Terima Kasih
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mb-8"
                >
                  <p className="text-xl mb-6">Ada pertanyaan?</p>
                  <div className="flex justify-center gap-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-2" />
                      <span>ecoradar@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-2" />
                      <span>+62 812 3456 7890</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <div className="w-[200px] h-[200px]"></div>
                  <p className="text-sm text-muted-foreground mt-2">Scan untuk mengakses repository projek</p>
                </motion.div>
              </div>
            </Slide>
          </div>

          {/* Navigasi Presentasi */}
          <div className="flex justify-between items-center p-4 border-t">
            <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0} className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Sebelumnya
            </Button>
            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center"
            >
              Selanjutnya
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
