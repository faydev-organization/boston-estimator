// pages/index.js
'use client';
import React from 'react';
import FAQItem from '@/components/FAQ/FAQItems';

const Home = () => {
  const faqs = [
    {
      question:
        'Estimator.id ini aplikasi menghitung RAB atau jasa menghitung RAB?',
      answer: 'Estimator.id adalah web aplikasi untuk menghitung RAB.',
    },
    {
      question:
        'Bagaimana cara mendapatkan aplikasi Estimator.id dan berapa harganya?',
      answer:
        'Estimator.id dapat langsung diakses secara online di https://estimator.id tanpa perlu download ataupun install aplikasi. Cukup hanya dengan membuat akun, maka Anda dapat langsung membuat RAB secara GRATIS.',
    },
    {
      question: 'Bagaimana cara mendaftar di Estimator.id?',
      answer:
        'Cek link berikut untuk tahu cara mendaftar di Estimator.id https://www.youtube.com/watch?v=0c4MPRFR1PI.',
    },
    {
      question:
        'Apakah Estimator.id ada versi mobile-nya (Android ataupun iOS)?',
      answer: 'Saat ini Estimator.id belum ada versi Android ataupun iOS.',
    },
    {
      question: 'Bagaimana cara membuat RAB menggunakan Estimator.id?',
      answer:
        'Cek link berikut untuk tahu cara membuat RAB menggunakan Estimator.id https://www.youtube.com/watch?v=XxVKaPGkJfQ.',
    },
    {
      question: 'Apa saja yang bisa dilakukan dengan Estimator.id?',
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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
        Seputar Pertanyaan Anda Tentang Estimator.id
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Home;
