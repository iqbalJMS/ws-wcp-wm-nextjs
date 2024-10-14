import React from 'react';
import Image from 'next/image';

export default function CardVariant13() {
  return (
    <main className="w-full flex justify-center">
      <section className="w-[60vh] md:w-[70vh] lg:w-full xl:w-9/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden flex-col justify-center space-y-5 pr-20">
          <h2 className="text-[#080087] uppercase font-semibold text-lg">
            kisah sukses
          </h2>
          <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
            andi ananda manggabarani, the young leader
          </h1>
          <p className="text-[#52185A] text-sm">
            Muda dan penuh semangat menjadikan Pribadi Terpilih BRI Prioritas
            kali ini begitu inspiratif dalam perbincangan yang begitu menarik.
          </p>
          <div className="pt-8">
            <button className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]">
              selengkapnya
            </button>
          </div>
        </div>
        <div className="w-full pb-8">
          <Image
            src={'/images/dummy/banner.jpg'}
            width={100}
            height={100}
            alt="image andi ananda"
            className="w-full h-80 rounded-xl"
          />
        </div>
        <div className="space-y-5 flex-col justify-center pl-20">
          <h2 className="text-[#080087] uppercase font-semibold text-lg">
            kisah sukses
          </h2>
          <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
            andi ananda manggabarani, the young leader
          </h1>
          <p className="text-[#52185A] text-sm">
            Muda dan penuh semangat menjadikan Pribadi Terpilih BRI Prioritas
            kali ini begitu inspiratif dalam perbincangan yang begitu menarik.
          </p>
          <div className="pt-10">
            <button className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]">
              selengkapnya
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
