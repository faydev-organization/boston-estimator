const PricingCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {/* Freelancer Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-transparent hover:border-blue-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Standar</h2>
          <p className="text-gray-500 mb-4">
            Buat RAB Anda dengan metode terbaru yang lebih cepat dan akurat
          </p>
          <div className="text-4xl font-bold mb-4 text-red-500">Gratis</div>
          <ul className="mb-6 space-y-2">
            <li>❌ Online dan Realtime</li>
            <li>❌ Katalog Produk Suplier</li>
            <li>✅ Jumlah Akun: 1</li>
            <li>✅ Template Proyek: 2</li>
            <li>✅ Jumlah Proyek: 5</li>
            <li>❌ Kolaborasi Tim Estimator</li>
            <li>✅ Maksimal Nilai Proyek: $10,000</li>
            <li>❌ Database Analisa Harga Satuan Pekerjaan (AHSP)</li>
            <li>❌ Kelola Koleksi AHSP</li>
            <li>✅ Database Harga Material dan Upah</li>
            <li>✅ Format Laporan Proyek: Standar</li>
            <li>❌ Duplikasi Proyek</li>
            <li>❌ Kalkulasi Volume Otomatis</li>
            <li>❌ Impor dan Ekspor Template Volume</li>
            <li>✅ Bantuan Teknis: 48 jam</li>
            <li>❌ Kustomisasi Database</li>
            <li>❌ Kustomisasi Tampilan</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Coba
          </button>
        </div>

        {/* Startup Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-transparent hover:border-blue-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Profesional</h2>
          <p className="text-gray-500 mb-4">
            Efisiensikan pekerjaan perhitungan RAB Anda dengan berbagai fitur
            unggulan kami
          </p>
          <div className="text-4xl font-bold mb-4">
            Rp. 150.000<span className="text-lg">/Bulan</span>
          </div>
          <ul className="mb-6 space-y-2">
            <li>✅ Online dan Realtime</li>
            <li>✅ Katalog Produk Suplier</li>
            <li>✅ Jumlah Akun: 5</li>
            <li>✅ Template Proyek: 10</li>
            <li>✅ Jumlah Proyek: 25</li>
            <li>✅ Kolaborasi Tim Estimator</li>
            <li>✅ Maksimal Nilai Proyek: $50,000</li>
            <li>✅ Database Analisa Harga Satuan Pekerjaan (AHSP)</li>
            <li>✅ Kelola Koleksi AHSP</li>
            <li>✅ Database Harga Material dan Upah</li>
            <li>✅ Format Laporan Proyek: Kustom</li>
            <li>✅ Duplikasi Proyek</li>
            <li>✅ Kalkulasi Volume Otomatis</li>
            <li>✅ Impor dan Ekspor Template Volume</li>
            <li>✅ Bantuan Teknis: 24 jam</li>
            <li>❌ Kustomisasi Database</li>
            <li>❌ Kustomisasi Tampilan</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Buy plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-transparent hover:border-blue-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Perusahaan</h2>
          <p className="text-gray-500 mb-4">
            Maksimalkan kinerja tim estimator di perusahaan Anda dan pilih paket
            berlangganan sesuai kebutuhan
          </p>
          <div className="text-4xl font-bold mb-4">
            Rp. 300.000<span className="text-lg">/Bulan</span>
          </div>
          <ul className="mb-6 space-y-2">
            <li>✅ Online dan Realtime</li>
            <li>✅ Katalog Produk Suplier</li>
            <li>✅ Jumlah Akun: Tidak terbatas</li>
            <li>✅ Template Proyek: Tidak terbatas</li>
            <li>✅ Jumlah Proyek: Tidak terbatas</li>
            <li>✅ Kolaborasi Tim Estimator</li>
            <li>✅ Maksimal Nilai Proyek: Tidak terbatas</li>
            <li>✅ Database Analisa Harga Satuan Pekerjaan (AHSP)</li>
            <li>✅ Kelola Koleksi AHSP</li>
            <li>✅ Database Harga Material dan Upah</li>
            <li>✅ Format Laporan Proyek: Kustom</li>
            <li>✅ Duplikasi Proyek</li>
            <li>✅ Kalkulasi Volume Otomatis</li>
            <li>✅ Impor dan Ekspor Template Volume</li>
            <li>✅ Bantuan Teknis: 1 jam</li>
            <li>✅ Kustomisasi Database</li>
            <li>✅ Kustomisasi Tampilan</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Buy plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
