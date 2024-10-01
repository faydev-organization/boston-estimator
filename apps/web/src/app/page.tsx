import React from 'react';
import Hero from '@/components/section/heros';
import AboutUs from '@/components/section/AboutUs';
import Feature from '@/components/section/Feature';
import FAQItem from '@/components/FAQ/FAQItems';

const page = () => {
  const faqs = [
    {
      question: '{BRAND} ini aplikasi menghitung RAB atau jasa menghitung RAB?',
      answer: '{BRAND} adalah web aplikasi untuk menghitung RAB.',
    },
    {
      question:
        'Bagaimana cara mendapatkan aplikasi {BRAND} dan berapa harganya?',
      answer:
        '{BRAND} dapat langsung diakses secara online di https://{BRAND} tanpa perlu download ataupun install aplikasi. Cukup hanya dengan membuat akun, maka Anda dapat langsung membuat RAB secara GRATIS.',
    },
    {
      question: 'Bagaimana cara mendaftar di {BRAND}?',
      answer:
        'Cek link berikut untuk tahu cara mendaftar di {BRAND} https://www.youtube.com/watch?v=0c4MPRFR1PI.',
    },
    {
      question: 'Apakah {BRAND} ada versi mobile-nya (Android ataupun iOS)?',
      answer: 'Saat ini {BRAND} belum ada versi Android ataupun iOS.',
    },
    {
      question: 'Bagaimana cara membuat RAB menggunakan {BRAND}?',
      answer:
        'Cek link berikut untuk tahu cara membuat RAB menggunakan {BRAND} https://www.youtube.com/watch?v=XxVKaPGkJfQ.',
    },
    {
      question: 'Apa saja yang bisa dilakukan dengan {BRAND}?',
      answer:
        'Dengan Estimator.id estimator dapat membuat RAB secara online dan kolaborasi, membuat AHS empiris, melihat katalog produk-produk suplier, hingga membeli material untuk proyek.',
    },
    {
      question: 'Sudah daftar tapi belum menerima email verifikasi, kenapa ya?',
      answer:
        'Ada dua kemungkinan belum menerima email verifikasi yaitu salah penulisan alamat email yang didaftarkan atau email telah terkirim tetapi masuk ke spam.',
    },
  ];
  return (
    <div className="bg-black py-24">
      <Hero />
      <AboutUs />
      <Feature />
      <div className="mx-24 mt-40">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Seputar Pertanyaan Anda Tentang {'{BRAND}'}
        </h1>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default page;
