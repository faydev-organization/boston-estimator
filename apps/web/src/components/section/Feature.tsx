// pages/index.js
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShieldIcon from '@mui/icons-material/Shield';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Feature = () => {
  // Define the content in an array
  const features = [
    {
      icon: <CheckIcon />,
      title: 'Mudah Digunakan',
      description:
        'Rencanakan.id hadir dengan antarmuka sederhana dan intuitif, memungkinkan kontraktor fokus pada perencanaan anggaran tanpa kerumitan.',
    },
    {
      icon: <FavoriteIcon />,
      title: 'Integrasi Fleksible',
      description:
        'Rencanakan.id dapat terintegrasi dengan berbagai platform, meningkatkan keterhubungan data dan menyelaraskan alur kerja dengan mudah.',
    },
    {
      icon: <MonetizationOnIcon />,
      title: 'Tanpa Biaya Tambahan',
      description:
        'Tanpa biaya tersembunyi, Rencanakan.id menyediakan paket lengkap untuk memberikan kejelasan finansial kepada pengguna.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Jaminan Keamanan Data',
      description:
        'Keamanan data menjadi prioritas, Rencanakan.id melindungi informasi sensitif dengan teknologi enkripsi terkini.',
    },
    {
      icon: <AssessmentIcon />,
      title: 'Ekspor Excel',
      description:
        'Kemampuan ekspor data ke Excel memberikan kontraktor fleksibilitas maksimal dalam berbagi dan menganalisis informasi.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Fitur Kurva S',
      description:
        'Dengan fitur kurva S, kontraktor dapat memantau progres proyek secara visual, memastikan pencapaian target tepat waktu.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-4xl text-white font-bold mb-20 text-center">
        Mengapa {'{BRAND}'}?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 text-white border-2 border-white rounded-full p-4">
              {feature.icon}
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold">
                {feature.title}
              </h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
