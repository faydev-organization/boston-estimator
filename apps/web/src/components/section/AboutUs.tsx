import React from 'react';

const AboutUs = () => {
  return (
    <section className="flex h-full gap-10 mx-20 my-24">
      <div className="flex justify-center items-center ml-20 ">
        <div
          children="company image"
          className="bg-gray-400 w-[400px] h-[400px] flex justify-center items-center  text-white"
        />
      </div>

      <div className="text-white mx-24 ">
        <h1 className="text-[50px] font-bold">Apakah {'{BRAND}'} Itu?</h1>
        <p className="text-xl mt-6">
          Rencanakan.id merupakan sebuah platform media yang telah dirancang
          khusus untuk memberikan kemudahan kepada kontraktor kecil dalam proses
          perencanaan dan penyusunan Rencana Anggaran Biaya (RAB), dengan
          menawarkan layanan ini dengan harga yang sangat terjangkau, sehingga
          memungkinkan para kontraktor kecil untuk mengakses dan memanfaatkan
          segala keunggulan teknologi dalam mengoptimalkan efisiensi serta
          kualitas pekerjaan.
        </p>
        <div className="mt-20">
          <button className="border-2 w-[235px] h-[52px] border-white text-xl rounded-md bg-black text-white">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
