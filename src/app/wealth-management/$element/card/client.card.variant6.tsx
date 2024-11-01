import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CE_CardVariant6({
  data,
}: {
  data: Array<{
    image: string;
    label: string;
    desc: string;
    buttonText: string;
    link: string;
  }>;
}) {
  return (
    <main className="w-full flex justify-center">
      {data?.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 md:place-items-center lg:w-11/12 xl:w-9/12 xl:px-8"
        >
          <section className="w-full">
            <div className="pb-4 sm:hidden">
              <h1 className="text-2xl font-bold uppercase">{item?.label}</h1>
            </div>
            <div className="relative w-full  overflow-hidden">
              <Image
                src={item?.image}
                width={1000}
                height={1000}
                alt="image dummy"
                className="w-10/12 h-full bg-no-repeat bg-cover hover:scale-125 bg-center transition-all ease-in-out transform-gpu delay-75"
              />
            </div>
          </section>
          <section className="space-y-4 sm:pt-5 w-8/12 flex flex-col  items-start">
            <div className="hidden sm:flex">
              <h1 className="text-3xl font-bold uppercase">{item?.label}</h1>
            </div>
            <h1 className="text-[#89829F] text-sm sm:text-base sm:pb-3">
              {item?.desc}
            </h1>
            <Link
              href={item?.link}
              className="bg-wmcolor py-2 px-5 rounded-full hover:bg-gray-700 duration-200 cursor-pointer text-white font-semibold uppercase"
            >
              {item?.buttonText}
            </Link>
          </section>
        </div>
      ))}
    </main>
  );
}
