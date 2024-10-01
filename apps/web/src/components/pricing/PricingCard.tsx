import React from 'react';

// Define the types for features
type Feature = {
  name: string;
  tooltip: string;
};

// Define the types for the features in a plan
type PlanFeatures = {
  [key: string]: string | string[]; // Allows both strings and arrays of strings
};

// Define the types for a single plan
type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  features: PlanFeatures;
};

// Define the features array
const features: Feature[] = [
  { name: 'Online dan Realtime', tooltip: 'Realtime updates' },
  { name: 'Katalog Produk Suplier', tooltip: 'Access to supplier catalog' },
  { name: 'Jumlah Akun', tooltip: 'Number of accounts' },
  { name: 'Template Proyek', tooltip: 'Project templates' },
  { name: 'Jumlah Proyek', tooltip: 'Number of projects' },
  { name: 'Kolaborasi Tim Estimator', tooltip: 'Team collaboration' },
  { name: 'Maksimal Nilai Proyek', tooltip: 'Maximum project value' },
  {
    name: 'Database Analisa Harga Satuan Pekerjaan (AHSP)',
    tooltip: 'AHSP database',
  },
  { name: 'Kelola Koleksi AHSP', tooltip: 'Manage AHSP collection' },
  {
    name: 'Database Harga Material dan Upah',
    tooltip: 'Material and wage database',
  },
  { name: 'Format Laporan Proyek', tooltip: 'Project report format' },
  { name: 'Duplikasi Proyek', tooltip: 'Project duplication' },
  {
    name: 'Kalkulasi Volume Otomatis',
    tooltip: 'Automatic volume calculation',
  },
  {
    name: 'Impor dan Ekspor Template Volume',
    tooltip: 'Import/export volume templates',
  },
  { name: 'Bantuan Teknis', tooltip: 'Technical support' },
  { name: 'Kustomisasi Database', tooltip: 'Database customization' },
  { name: 'Kustomisasi Tampilan', tooltip: 'UI customization' },
];

// Define the plans array
const plans: Plan[] = [
  {
    name: 'Standard',
    price: 'GRATIS',
    features: {
      'Online dan Realtime': 'GRATIS',
      'Katalog Produk Suplier': 'GRATIS',
      'Jumlah Akun': '1 Akun',
      'Template Proyek': '1',
      'Jumlah Proyek': '10',
      'Kolaborasi Tim Estimator': '2 Estimator',
      'Maksimal Nilai Proyek': 'Rp 200.000.000',
      'Database Analisa Harga Satuan Pekerjaan (AHSP)': [
        'PUPR',
        'SNI',
        'Empiris',
      ],
      'Kelola Koleksi AHSP': 'GRATIS',
      'Database Harga Material dan Upah': 'GRATIS',
      'Format Laporan Proyek': 'GRATIS',
      'Duplikasi Proyek': 'GRATIS',
      'Kalkulasi Volume Otomatis': 'GRATIS',
      'Impor dan Ekspor Template Volume': 'GRATIS',
      'Bantuan Teknis': 'GRATIS',
      'Kustomisasi Database': 'GRATIS',
      'Kustomisasi Tampilan': 'GRATIS',
    },
  },
  {
    name: 'Professional',
    price: 'Rp 149.000',
    originalPrice: 'Rp 299.000',
    discount: '53% OFF',
    features: {
      'Online dan Realtime': 'GRATIS',
      'Katalog Produk Suplier': 'GRATIS',
      'Jumlah Akun': '1 Akun',
      'Template Proyek': '1',
      'Jumlah Proyek': '10',
      'Kolaborasi Tim Estimator': '2 Estimator',
      'Maksimal Nilai Proyek': 'Rp 200.000.000',
      'Database Analisa Harga Satuan Pekerjaan (AHSP)': [
        'PUPR',
        'SNI',
        'Empiris',
      ],
      'Kelola Koleksi AHSP': 'GRATIS',
      'Database Harga Material dan Upah': 'GRATIS',
      'Format Laporan Proyek': 'GRATIS',
      'Duplikasi Proyek': 'GRATIS',
      'Kalkulasi Volume Otomatis': 'GRATIS',
      'Impor dan Ekspor Template Volume': 'GRATIS',
      'Bantuan Teknis': 'GRATIS',
      'Kustomisasi Database': 'GRATIS',
      'Kustomisasi Tampilan': 'GRATIS',
    },
  },
  {
    name: 'Corporate',
    price: 'Rp 179.000',
    originalPrice: 'Rp 379.000',
    discount: '53% OFF',
    features: {
      'Online dan Realtime': 'GRATIS',
      'Katalog Produk Suplier': 'GRATIS',
      'Jumlah Akun': '1 Akun',
      'Template Proyek': '1',
      'Jumlah Proyek': '10',
      'Kolaborasi Tim Estimator': '2 Estimator',
      'Maksimal Nilai Proyek': 'Rp 200.000.000',
      'Database Analisa Harga Satuan Pekerjaan (AHSP)': [
        'PUPR',
        'SNI',
        'Empiris',
      ],
      'Kelola Koleksi AHSP': 'GRATIS',
      'Database Harga Material dan Upah': 'GRATIS',
      'Format Laporan Proyek': 'GRATIS',
      'Duplikasi Proyek': 'GRATIS',
      'Kalkulasi Volume Otomatis': 'GRATIS',
      'Impor dan Ekspor Template Volume': 'GRATIS',
      'Bantuan Teknis': 'GRATIS',
      'Kustomisasi Database': 'GRATIS',
      'Kustomisasi Tampilan': 'GRATIS',
    },
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: {
      'Online dan Realtime': 'GRATIS',
      'Katalog Produk Suplier': 'GRATIS',
      'Jumlah Akun': '1 Akun',
      'Template Proyek': '1',
      'Jumlah Proyek': '10',
      'Kolaborasi Tim Estimator': '2 Estimator',
      'Maksimal Nilai Proyek': 'Rp 200.000.000',
      'Database Analisa Harga Satuan Pekerjaan (AHSP)': [
        'PUPR',
        'SNI',
        'Empiris',
      ],
      'Kelola Koleksi AHSP': 'GRATIS',
      'Database Harga Material dan Upah': 'GRATIS',
      'Format Laporan Proyek': 'GRATIS',
      'Duplikasi Proyek': 'GRATIS',
      'Kalkulasi Volume Otomatis': 'GRATIS',
      'Impor dan Ekspor Template Volume': 'GRATIS',
      'Bantuan Teknis': 'GRATIS',
      'Kustomisasi Database': 'GRATIS',
      'Kustomisasi Tampilan': 'GRATIS',
    },
  },
];

const PricingTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 border-r font-semibold text-left">Fitur</th>
            {plans.map((plan, index) => (
              <th key={index} className="p-4 border-r text-center">
                <div>
                  <h2 className="text-lg font-bold">{plan.name}</h2>
                  {plan.discount && (
                    <div className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded mt-1">
                      {plan.discount}
                    </div>
                  )}
                  <div className="text-xl font-bold mt-2">{plan.price}</div>
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through text-sm">
                      {plan.originalPrice}
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={`border-b ${
                plans.some((plan) => plan.price === 'GRATIS') && 'bg-green-100'
              }`}
            >
              <td className="p-4">{feature.name}</td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex} className="p-4 text-center">
                  {plan.features[feature.name] ? (
                    Array.isArray(plan.features[feature.name]) ? (
                      <ul className="list-disc list-inside">
                        {(plan.features[feature.name] as string[]).map(
                          (item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {item}
                            </li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {plan.features[feature.name]}
                      </div>
                    )
                  ) : (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      -
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
