import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CE_CardVariant12({
  data,
}: {
  data: Array<{
    title: string;
    desc: string;
    image: string;
    body: string;
  }>;
}) {
  return (
    <main className="w-full flex flex-col justify-center space-y-20 items-center">
      {data && (
        <section className="w-[60vh] md:w-[70vh] lg:w-full xl:w-9/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex flex-col justify-center space-y-5 pr-20">
            <h2 className="text-[#080087] uppercase font-semibold text-lg">
              kisah sukses
            </h2>
            <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
              {data?.[0].title}
            </h1>
            <p className="text-[#52185A] text-sm">{data?.[0].desc}</p>
            <div className="pt-8">
              <Link
                href={'/our-story'}
                className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]"
              >
                selengkapnya
              </Link>
            </div>
          </div>
          <div className="w-full pb-8">
            <Image
              src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0].image}`}
              width={1000}
              height={1000}
              alt="image andi ananda"
              className="w-full h-96 rounded-xl bg-cover bg-center"
            />
          </div>
          <div className="lg:hidden space-y-5">
            <h2 className="text-[#080087] uppercase font-semibold text-lg">
              kisah sukses
            </h2>
            <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
              {data?.[0].title}
            </h1>
            <p className="text-[#52185A] text-sm">{data?.[0].desc}</p>
            <div className="pt-10">
              <Link
                href={'/our-story'}
                className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]"
              >
                selengkapnya
              </Link>
            </div>
          </div>
        </section>
      )}
      {data && (
        <section className="w-[60vh] md:w-[70vh] lg:w-full xl:w-9/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full pb-8">
            <Image
              src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[1].image}`}
              width={1000}
              height={1000}
              alt="image andi ananda"
              className="w-full h-96 rounded-xl bg-cover bg-center"
            />
          </div>
          <div className="hidden lg:flex flex-col justify-center space-y-5 pl-20">
            <h2 className="text-[#080087] uppercase font-semibold text-lg">
              kisah sukses
            </h2>
            <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
              {data?.[1].title}
            </h1>
            <p className="text-[#52185A] text-sm">{data?.[1].desc}</p>
            <div className="pt-8">
              <Link
                href={'/our-story'}
                className="py-2 px-8 hover:bg-gray-600 duration-310 rounded-full uppercase font-semibold text-white bg-[#080087]"
              >
                selengkapnya
              </Link>
            </div>
          </div>
          <div className="lg:hidden space-y-5">
            <h2 className="text-[#080087] uppercase font-semibold text-lg">
              kisah sukses
            </h2>
            <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
              {data?.[1].title}
            </h1>
            <p className="text-[#52185A] text-sm">{data?.[1].desc}</p>
            <div className="pt-10">
              <button className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]">
                selengkapnya
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
