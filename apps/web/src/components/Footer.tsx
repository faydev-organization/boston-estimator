const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex gap-20">
          {/* Hubungi Kami */}
          <div className="w-3/5 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Hubungi Kami</h2>
            <p className="text-gray-300 mb-2">
              Kami sangat senang bisa berkomunikasi dengan Anda. Pastikan selalu
              terhubung dengan kami untuk mendapatkan informasi terbaru.
            </p>
            <p className="text-gray-300">
              <a href="mailto:admin@estimator.id" className="hover:underline">
                admin@example.id
              </a>{' '}
              |{' '}
              <a href="tel:+62274511067" className="hover:underline">
                +8888888888888
              </a>
            </p>
          </div>

          {/* Tentang Kami */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="w-full mr-10">
              <h2 className="text-lg font-semibold mb-2">Tentang Kami</h2>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Ringkasan Eksekutif
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Cara Penggunaan
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-300 hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-300 hover:underline">
                    Peraturan & Ketentuan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2024. LogoName</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
