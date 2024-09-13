// pages/index.js
'use client';
import TermItems from '@/components/terms/TermsItems';
import React from 'react';

const terms = [
  {
    section: 'Syarat & Ketentuan',
    content:
      'Halaman ini (bersama dengan dokumen yang dirujuk atasnya) memberi tahu Anda syarat-syarat penggunaan di mana Anda dapat menggunakan situs website kami, baik sebagai tamu atau pengguna terdaftar. Harap baca persyaratan penggunaan ini dengan seksama sebelum Anda mulai menggunakan situs ini. Dengan menggunakan situs Kami, Anda menunjukkan bahwa Anda menerima persyaratan penggunaan ini dan Anda setuju untuk mematuhinya.',
  },
  {
    section: 'Informasi Tentang Kami',
    content:
      'Kami mengoperasikan situs website www.estimator.id. Kami adalah PT. Baracipta Esa Engineering, perusahaan yang terdaftar di Indonesia dan dengan kantor terdaftar kami di Ngemplak Karangjati Sinduadi Mlati Sleman Yogyakarta.',
  },
  {
    section: 'Mengakses Situs Website Kami',
    content:
      'Akses ke situs website kami diizinkan untuk sementara, dan kami berhak untuk menarik atau mengubah layanan yang kami sediakan di situs website kami tanpa pemberitahuan. Kami tidak akan bertanggung jawab jika karena alasan apapun situs website kami tidak tersedia setiap saat atau untuk periode apapun. Dari waktu ke waktu, kami dapat membatasi akses ke beberapa bagian dari situs website kami, atau seluruh situs website kami, kepada pengguna yang telah terdaftar dengan kami.',
  },
  {
    section: 'Hak Kekayaan Intelektual',
    content:
      'Kami adalah pemilik atau pemegang lisensi dari semua hak kekayaan intelektual di situs website kami, dan dalam materi yang dipublikasikan di dalamnya. Karya-karya tersebut dilindungi oleh undang-undang hak cipta dan perjanjian di seluruh dunia. Semua hak tersebut dilindungi. Anda dapat mencetak satu salinan, dan dapat mengunduh ekstrak, dari setiap halaman dari situs kami untuk referensi pribadi Anda dan Anda dapat menarik perhatian orang lain dalam organisasi Anda ke materi yang diposting di situs website kami.',
  },
  {
    section: 'Ketergantungan pada Informasi yang Diposting',
    content:
      'Komentar dan materi lain yang dipasang di situs website kami tidak dimaksudkan untuk memberi saran yang harus ditempatkan. Oleh karena itu, kami menyangkal semua tanggung jawab yang timbul dari ketergantungan apapun yang ditempatkan pada materi tersebut oleh setiap pengunjung ke situs website kami, atau oleh siapapun yang mungkin diberi tahu tentang isinya.',
  },
  {
    section: 'Situs Website Kami Berubah Secara Teratur',
    content:
      'Kami bertujuan untuk memperbarui situs website kami secara teratur, dan dapat mengubah konten setiap saat. Jika diperlukan, kami dapat menangguhkan akses ke situs website kami, atau menutupnya tanpa batas. Setiap materi di situs website kami mungkin sudah ketinggalan zaman pada waktu tertentu, dan kami tidak berkewajiban memperbarui materi tersebut.',
  },
  {
    section: 'Tanggung Jawab Kami',
    content:
      'Materi yang ditampilkan di situs website kami disediakan tanpa jaminan, kondisi, atau jaminan apapun mengenai keakuratannya. Sejauh diizinkan oleh undang-undang, kami, anggota lain dari kelompok perusahaan kami dan pihak ketiga yang terhubung dengan kami dengan ini secara tegas mengecualikan semua kondisi, jaminan dan ketentuan lain yang mungkin dinyatakan secara tersirat oleh undang-undang, common law atau hukum ekuitas, dan setiap pertanggungjawaban atas kerugian atau kerusakan langsung, tidak langsung atau konsekuensial.',
  },
  {
    section: 'Informasi Tentang Anda dan Kunjungan Anda ke Situs Website Kami',
    content:
      'Kami memproses informasi tentang Anda sesuai dengan kebijakan privasi kami. Dengan menggunakan situs website kami, Anda menyetujui pemrosesan tersebut dan Anda menjamin bahwa semua data yang diberikan oleh Anda akurat.',
  },
  {
    section: 'Virus, Peretasan, dan Pelanggaran Lainnya',
    content:
      'Anda tidak boleh menyalahgunakan situs website kami dengan secara sengaja memperkenalkan virus, trojan, worm, bom logika, atau materi lain yang berbahaya atau berbahaya secara teknologi. Anda tidak boleh berusaha mendapatkan akses tidak sah ke situs website kami, tempat situs website kami disimpan atau server, komputer atau basis data apapun yang terhubung ke situs website kami.',
  },
  {
    section: 'Menautkan ke Situs Website Kami',
    content:
      'Anda dapat menautkan ke laman beranda kami, asalkan Anda melakukannya dengan cara yang adil dan sah dan tidak merusak reputasi kami atau memanfaatkannya, tetapi Anda tidak boleh membuat tautan sedemikian rupa untuk menyarankan bentuk asosiasi apapun, di mana tidak ada persetujuan atau dukungan pada pihak kami.',
  },
  {
    section: 'Tautan dari Situs Website Kami',
    content:
      'Jika situs website kami berisi tautan ke situs dan sumber lain yang disediakan oleh pihak ketiga, tautan ini disediakan hanya untuk informasi Anda. Kami tidak memiliki kendali atas konten situs atau sumber daya tersebut, dan tidak bertanggung jawab atas kerugian atau kerusakan yang mungkin timbul dari penggunaan Anda terhadapnya.',
  },
  {
    section: 'Yurisdiksi dan Hukum yang Berlaku',
    content:
      'Pengadilan Indonesia akan memiliki yurisdiksi eksklusif atas klaim apapun yang timbul dari, atau terkait dengan, kunjungan ke situs website kami meskipun kami memiliki hak untuk mengajukan tuntutan terhadap Anda karena pelanggaran terhadap kondisi ini di negara tempat tinggal Anda atau negara terkait lainnya.',
  },
  {
    section: 'Variasi',
    content:
      'Kami dapat merevisi ketentuan penggunaan ini kapan saja dengan mengubah halaman ini. Anda diharapkan untuk memeriksa halaman ini dari waktu ke waktu untuk memperhatikan perubahan yang kami buat, karena mereka mengikat Anda.',
  },
  {
    section: 'Kontak',
    content:
      'Pertanyaan, komentar dan permintaan terkait syarat penggunaan situs website kami, dapat ditujukan ke alamat terdaftar kami atau mail@estimator.id.',
  },
];

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
        Syarat & Ketentuan
      </h1>
      {terms.map((terms, index) => (
        <TermItems
          key={index}
          section={terms.section}
          content={terms.content}
        />
      ))}
    </div>
  );
};

export default Home;
