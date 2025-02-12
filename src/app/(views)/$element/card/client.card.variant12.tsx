'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import noImage from '@/../../public/images/no-image.png';

export default function CE_CardVariant12({
  data,
}: {
  data: Array<{
    title: string;
    desc: string;
    image: string;
    body: string;
    id: string;
    nid: number;
  }>;
}) {
  return (
    <>
      <div className="w-full flex flex-col justify-center space-y-20 items-center pb-20 px-10">
        {data?.map((item, index) => (
          <section
            key={index}
            className="w-[50vh] md:w-[70vh] lg:w-full xl:w-9/12 2xl:w-8/12 lg:flex even:flex-row-reverse "
          >
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="hidden lg:flex flex-col justify-center space-y-5 px-10"
            >
              <h2 className="text-[#080087] uppercase font-semibold text-base">
                kisah sukses
              </h2>
              <h1 className="font-bold text-2xl text-[#3D3D3D] uppercase">
                {item?.title}
              </h1>
              <h2 className="text-[#52185A] text-sm">{item?.desc}</h2>
              <div className="pt-8">
                <Link
                  href={`/our-story/${item?.nid} ?? '/404`}
                  className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]"
                >
                  selengkapnya
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="w-full h-[50vh] pb-8"
            >
              {item?.image ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''}`}
                  width={10000}
                  height={10000}
                  alt="image"
                  className="object-center object-cover w-full h-full rounded-xl"
                />
              ) : (
                <Image
                  src={`${noImage}`}
                  width={500}
                  height={500}
                  alt="image"
                  className="object-center object-cover w-full h-full rounded-xl"
                />
              )}
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="lg:hidden space-y-5"
            >
              <h2 className="text-[#080087] uppercase font-semibold text-base">
                kisah sukses
              </h2>
              <h1 className="font-bold text-lg text-[#3D3D3D] uppercase">
                {item?.title}
              </h1>
              <h2 className="text-[#52185A] text-sm">{item?.desc}</h2>
              <div className="pt-8">
                <Link
                  href={`/our-story/${item?.nid ?? '/404'}`}
                  className="py-2 px-8 hover:bg-gray-600 duration-300 rounded-full uppercase font-semibold text-white bg-[#080087]"
                >
                  selengkapnya
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
