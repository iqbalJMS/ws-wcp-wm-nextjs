import React from 'react';
import Image from 'next/image';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ShapeIcon from '@/lib/element/global/icons/shape-icon';

export default function CardVariant4() {
  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/bg-cv-4b.jpg',
      label: 'BRI',
      logoUrl: '/images/dummy/logo-private-cv4.png',
      text: 'Untuk Pribadi Istimewa',
    },
    {
      imgUrl: '/images/dummy/bg-cv-4.jpg',
      label: 'BRI',
      logoUrl: '/images/dummy/logo-prioritas-cv4.png',
      text: 'Untuk Pribadi Terpilih',
    },
  ];
  return (
    <main className="relative w-full h-auto flex justify-center">
      <section className="w-full lg:w-11/12">
        <h1 className="text-center pb-20 text-3xl font-semibold uppercase">
          layanan kami
        </h1>
        <div className="w-full grid grid-cols-1 gap-y-5 place-items-center lg:grid-cols-2 xl:px-48 ">
          {LIST_CARD_CONTENT.map((item, index) => (
            <picture
              key={index}
              className="cursor-pointer group relative w-full md:w-10/12 lg:w-full h-60 lg:h-72 overflow-hidden"
            >
              <div
                className=" flex flex-col justify-between h-72 bg-no-repeat bg-cover hover:scale-110 bg-center transition-all ease-in-out transform-gpu delay-75"
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                }}
              >
                <div className="w-full h-full bg-black opacity-50">.</div>
              </div>
              <div className="flex justify-between">
                <Image
                  src={item.logoUrl}
                  width={1000}
                  height={1000}
                  alt="service us logo"
                  className="absolute w-40 h-8 top-10 left-10 lg:left-16 lg:w-52 lg:h-12"
                />
                <ArrowRightIcon
                  width={25}
                  height={25}
                  stroke="white"
                  className="absolute top-12 right-14 lg:right-16 group-hover:right-10 duration-300"
                  fill="white"
                />
              </div>
              <span>
                <h1 className="absolute text-white text-base font-medium bottom-12 left-10 lg:left-16">
                  {item.text}
                </h1>
              </span>
            </picture>
          ))}
        </div>
      </section>
      <ShapeIcon
        stroke=""
        width={200}
        className="absolute left-40 top-60 -z-10"
      />
      <ShapeIcon
        stroke=""
        width={200}
        className="absolute right-40 top-28 -z-10"
      />
    </main>
  );
}
