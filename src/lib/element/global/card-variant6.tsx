import React from 'react';
import Image from 'next/image';

export default function CardVariant6() {
  return (
    <main className="w-full flex justify-center">
      <section className=" grid grid-cols-1 md:grid-cols-2 md:place-items-center lg:w-11/12 xl:w-8/12">
        <section className="">
          <div className="pb-4 sm:hidden">
            <h1 className="text-3xl font-bold uppercase">
              informasi Investasi
            </h1>
          </div>
          <div className="">
            <Image
              src={'/images/dummy/banner.jpg'}
              width={100}
              height={100}
              alt="image dummy"
              className="w-full h-72 "
            />
          </div>
        </section>
        <section className="space-y-4 sm:pt-5 md:w-10/12 xl:w-9/12 ">
          <div className="hidden sm:flex">
            <h1 className="text-3xl font-bold uppercase">
              informasi Investasi
            </h1>
          </div>
          <h1 className="text-[#89829F] text-sm sm:text-base sm:pb-3">
            Temukan lebih banyak informasi tentang kinerja produk investasi
            reksa dana
          </h1>
          <button className="bg-[#080087] py-2 px-5 rounded-full hover:bg-gray-700 duration-200 cursor-pointer text-white font-semibold uppercase">
            lihat selengkapnya
          </button>
        </section>
      </section>
    </main>
  );
}
