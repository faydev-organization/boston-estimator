import React from 'react';
import { Filter, Search } from 'lucide-react';

const EstimatorJobList = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/4 pr-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-4 bg-green-600 text-white py-2 px-4 rounded flex items-center">
                <Filter className="mr-2" size={20} /> Filter Pekerjaan
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Pekerjaan
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Ketik Nama Pekerjaan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Satuan
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Pilih Satuan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kategori Pekerjaan
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Pilih kategori pekerjaan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-3/4 pl-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button className="px-4 py-2 text-green-600 border-b-2 border-green-600 font-medium">
                  AHS
                </button>
                <button className="px-4 py-2 text-gray-500">BAHAN</button>
                <button className="px-4 py-2 text-gray-500">UPAH</button>
                <button className="px-4 py-2 text-gray-500">ALAT</button>
              </div>

              {/* Filters */}
              <div className="flex space-x-2 mb-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-full">
                  Semua{' '}
                  <span className="bg-yellow-400 text-green-800 px-2 rounded-full ml-1">
                    2162
                  </span>
                </button>
                <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
                  PUPR{' '}
                  <span className="bg-yellow-400 px-2 rounded-full ml-1">
                    1771
                  </span>
                </button>
                <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
                  SNI{' '}
                  <span className="bg-yellow-400 px-2 rounded-full ml-1">
                    120
                  </span>
                </button>
                <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
                  Estimator.id{' '}
                  <span className="bg-yellow-400 px-2 rounded-full ml-1">
                    271
                  </span>
                </button>
              </div>

              {/* Table */}
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">No.</th>
                    <th className="px-4 py-2 text-left">Nama Pekerjaan</th>
                    <th className="px-4 py-2 text-left">Satuan</th>
                    <th className="px-4 py-2 text-left">Sumber</th>
                    <th className="px-4 py-2 text-left"></th>
                  </tr>
                </thead>
                <tbody className="bg-green-50">
                  {[
                    {
                      id: 1,
                      name: 'Acian Beton',
                      unit: 'm2',
                      source:
                        'AHSP SNI Data Pembaharuan dan Penyesuaian 2017-2018',
                    },
                    {
                      id: 2,
                      name: 'Ahli K3 konstruksi madya selaku pimpinan UKK (personil manajerial) - K3 Gedung',
                      unit: 'OB',
                      source: 'Permen PUPR Nomor 10 Tahun 2021',
                    },
                    {
                      id: 3,
                      name: 'Ahli K3 konstruksi madya selaku pimpinan UKK (personil manajerial) - K3 Jembatan',
                      unit: 'OB',
                      source: 'Permen PUPR Nomor 10 Tahun 2021',
                    },
                    {
                      id: 4,
                      name: 'Ahli K3 konstruksi muda selaku pimpinan UKK (personil manajerial) - K3 IPAL',
                      unit: 'OB',
                      source: 'Permen PUPR Nomor 10 Tahun 2021',
                    },
                    {
                      id: 5,
                      name: 'Ahli keselamatan konstruksi muda - K3 Gedung',
                      unit: 'OB',
                      source: 'Permen PUPR Nomor 10 Tahun 2021',
                    },
                  ].map((job, index) => (
                    <tr
                      key={job.id}
                      className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2">{job.id}</td>
                      <td className="px-4 py-2">{job.name}</td>
                      <td className="px-4 py-2">{job.unit}</td>
                      <td className="px-4 py-2">{job.source}</td>
                      <td className="px-4 py-2">
                        <button className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                          Analisa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Button */}
    </div>
  );
};

export default EstimatorJobList;
