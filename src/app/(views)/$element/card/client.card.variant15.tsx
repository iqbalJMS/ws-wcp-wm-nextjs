import React from 'react';
import CE_FlipCard from './client.flip.card';

export default function CE_CardVariant15() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className=" w-[40rem] h-full md:w-[50rem] xl:w-[60rem] grid grid-cols-1 ">
          <section className="w-full flex flex-col items-center px-16">
            <h1 className="uppercase text-privatecolor text-2xl md:text-3xl font-bold tracking-wider">
              kartu bri private
            </h1>
            <p className="text-sm font-light w-full md:w-10/12 lg:w-8/12 text-center pt-2">
              Nikmati kemudahan akses dan berbagai keuntungan dari pilihan kartu
              BRI Private untuk Anda.
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 pt-16 space-x-0 lg:space-x-16">
            <div className="flex justify-center items-start">
              <CE_FlipCard />
            </div>
            <div className="text-center md:text-start pt-0 md:pt-4">
              <div className="space-y-2 px-16 md:px-0">
                <h3 className="text-privatecolor text-base font-light uppercase">
                  bri private
                </h3>
                <h1 className="text-2xl font-bold tracking-wide">
                  WORLD DEBIT MASTERCARD
                </h1>
                <p className="text-sm font-light">
                  Nikmati berbagai keuntungan dan pengalaman tak terlupakan di
                  seluruh dunia.
                </p>
              </div>
              <div className="pt-8 xl:pt-16 space-x-4">
                <button className="uppercase text-base font-semibold bg-privatecolor text-white rounded-full py-2 px-4 hover:bg-gray-500 duration-300">
                  selengkapnya
                </button>
                <button className="uppercase text-base font-semibold rounded-full py-2 px-4 border-privatecolor border bg-white text-privatecolor hover:bg-privatecolor duration-300 hover:text-white-01">
                  get invited
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
