import React from 'react';
// import Image from '@/lib/element/global/image';
import Image from 'next/image';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_CardVariant4({
  data,
}: {
  data: Array<{
    image: string;
    logo: string;
    label: string;
    link: string;
  }>;
}) {
  return (
    <main className="relative w-full h-auto flex justify-center  overflow-hidden">
      <section className="w-full lg:w-11/12">
        <h1 className="text-center pb-20 text-3xl font-semibold uppercase">
          layanan kami
        </h1>
        <div className="w-full grid grid-cols-1 gap-y-5 place-items-center lg:grid-cols-2 xl:px-48 ">
          {data?.map((item, index) => (
            <Link
              href={'/bri-private'}
              key={index}
              className="cursor-pointer group relative w-full md:w-10/12 lg:w-full h-60 lg:h-72 overflow-hidden"
            >
              <div
                className="flex flex-col justify-between h-72 bg-no-repeat bg-cover hover:scale-125 duration-300 bg-center transition-all ease-in-out transform-gpu delay-75"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image})`,
                }}
              >
                <div className="w-full h-full bg-black opacity-50"></div>
              </div>
              <div className="flex justify-between">
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.logo}`}
                  width={1000}
                  height={1000}
                  alt="service us logo"
                  className="absolute w-40 h-8 top-10 left-10 lg:left-16 lg:w-52 lg:h-12"
                />
                <ArrowRightIcon
                  width={25}
                  height={25}
                  stroke="white"
                  className="absolute top-12 right-14 lg:right-16 group-hover:right-10 duration-500"
                  fill="white"
                />
              </div>
              <span>
                {item?.label && (
                  <h1 className="absolute text-white text-base font-medium bottom-12 left-10 lg:left-16">
                    {parseHTMLToReact(item?.label)}
                  </h1>
                )}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <div className="bg-[#DCDCDC] w-[400px] h-[120px] absolute -z-10 bottom-0 left-20"></div>
      <div className="bg-[#DCDCDC] w-[400px] h-[120px] absolute -z-10 top-[116px] right-20"></div>
    </main>
  );
}
