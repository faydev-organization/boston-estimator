'use client';
import React from 'react';
import { ContainerScroll, Card } from '../ui/container-scroll-animation';

import Image from 'next/image';
import NumberTicker from '../ui/NumberTickerDemo';

const HeroScrollDemo = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-[70px] mb-2 font-semibold text-black dark:text-white">
              Buat RAB Secara Online! <br />
            </h1>
            <h3 className="text-[30px] text-white mb-10 font-bold">
              Software konstruksi yang memudahkan kontraktor dalam membuat RAB
              dengan harga yang sangat terjangkau.
            </h3>
          </>
        }
      >
        <Image
          src="/preview.png"
          alt="hero"
          height={720}
          width={1400}
          className="min-h-full"
          draggable={false}
        />
      </ContainerScroll>
      <div className="flex justify-center gap-10">
        <div className="flex justify-center items-center text-white gap-2">
          <div className="flex flex-cols text-[70px] font-bold">
            <NumberTicker value={3} direction="up" />
            <h1>X</h1>
          </div>
          <div className="text-[20px]">
            <h1>Lebih cepat dalam</h1>
            <h1>pembuatan RAB</h1>
          </div>
        </div>

        <div className="flex justify-center items-center text-white gap-2">
          <div className="flex flex-cols text-[70px] font-bold">
            <NumberTicker value={70} direction="up" />
            <h1>%</h1>
          </div>
          <div className="text-[20px] ">
            <h1>Peningkatan</h1>
            <h1>Produktifitas</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScrollDemo;
