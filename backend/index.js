import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ecoradar',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful');
    connection.release();
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();

// API Routes
// Get all trash bins with point geometry
app.get('/api/trash-bins', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        id, 
        nama, 
        jenis, 
        kapasitas, 
        kondisi, 
        pengelola, 
        alamat, 
        kecamatan, 
        kelurahan, 
        tanggal_pemeliharaan_terakhir, 
        foto_url, 
        ST_AsGeoJSON(geom) as geom_json 
      FROM tempat_sampah
    `);
    
    // Transform the data to include GeoJSON
    const trashBins = rows.map(row => ({
      id: row.id,
      nama: row.nama,
      jenis: row.jenis,
      kapasitas: row.kapasitas,
      kondisi: row.kondisi,
      pengelola: row.pengelola,
      alamat: row.alamat,
      kecamatan: row.kecamatan,
      kelurahan: row.kelurahan,
      tanggal_pemeliharaan_terakhir: row.tanggal_pemeliharaan_terakhir,
      foto_url: row.foto_url,
      geom: JSON.parse(row.geom_json)
    }));
    
    res.json(trashBins);
  } catch (error) {
    console.error('Error fetching trash bins:', error);
    res.status(500).json({ error: 'Failed to fetch trash bins' });
  }
});

// Get all polluted rivers with linestring geometry
app.get('/api/polluted-rivers', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        id, 
        nama_sungai, 
        panjang_km, 
        lebar_rata_rata_m, 
        tingkat_pencemaran, 
        jenis_pencemaran, 
        sumber_pencemaran, 
        dampak_lingkungan, 
        upaya_penanganan, 
        status_pemulihan, 
        ST_AsGeoJSON(geom) as geom_json 
      FROM sungai_tercemar
    `);
    
    // Transform the data to include GeoJSON
    const pollutedRivers = rows.map(row => ({
      id: row.id,
      nama_sungai: row.nama_sungai,
      panjang_km: row.panjang_km,
      lebar_rata_rata_m: row.lebar_rata_rata_m,
      tingkat_pencemaran: row.tingkat_pencemaran,
      jenis_pencemaran: row.jenis_pencemaran,
      sumber_pencemaran: row.sumber_pencemaran,
      dampak_lingkungan: row.dampak_lingkungan,
      upaya_penanganan: row.upaya_penanganan,
      status_pemulihan: row.status_pemulihan,
      geom: JSON.parse(row.geom_json)
    }));
    
    res.json(pollutedRivers);
  } catch (error) {
    console.error('Error fetching polluted rivers:', error);
    res.status(500).json({ error: 'Failed to fetch polluted rivers' });
  }
});

// Get all flood areas with polygon geometry
app.get('/api/flood-areas', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        id, 
        nama_kawasan, 
        kecamatan, 
        kelurahan, 
        luas_area_ha, 
        kedalaman_rata_rata_cm, 
        penyebab_utama, 
        jumlah_penduduk_terdampak, 
        infrastruktur_terdampak, 
        tingkat_risiko, 
        upaya_mitigasi, 
        ST_AsGeoJSON(geom) as geom_json 
      FROM kawasan_banjir
    `);
    
    // Transform the data to include GeoJSON
    const floodAreas = rows.map(row => ({
      id: row.id,
      nama_kawasan: row.nama_kawasan,
      kecamatan: row.kecamatan,
      kelurahan: row.kelurahan,
      luas_area_ha: row.luas_area_ha,
      kedalaman_rata_rata_cm: row.kedalaman_rata_rata_cm,
      penyebab_utama: row.penyebab_utama,
      jumlah_penduduk_terdampak: row.jumlah_penduduk_terdampak,
      infrastruktur_terdampak: row.infrastruktur_terdampak,
      tingkat_risiko: row.tingkat_risiko,
      upaya_mitigasi: row.upaya_mitigasi,
      geom: JSON.parse(row.geom_json)
    }));
    
    res.json(floodAreas);
  } catch (error) {
    console.error('Error fetching flood areas:', error);
    res.status(500).json({ error: 'Failed to fetch flood areas' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});