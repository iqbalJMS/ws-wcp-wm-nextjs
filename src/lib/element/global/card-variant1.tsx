import React from 'react';
import Image from 'next/image';
import PlayIcon from './play-icon';

export default function CardVariant1() {
  const LIST_CARD = [
    {
      imgUrl: '/images/dummy/banner.jpg',
      date: '20 JAN 2023',
      text: 'Lorem ipsum, dolor sit amet consectetur!',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      date: '20 JAN 2023',
      text: 'Lorem ipsum, dolor sit amet consectetur!',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      date: '20 JAN 2023',
      text: 'Lorem ipsum, dolor sit amet consectetur!',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      date: '20 JAN 2023',
      text: 'Lorem ipsum, dolor sit amet consectetur!',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      date: '20 JAN 2023',
      text: 'Lorem ipsum, dolor sit amet consectetur!',
    },
  ];
  return (
    <main className="w-full h-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold uppercase">Video</h1>
      <p className="font-extralight pt-2 pb-16">
        Daftar putar teratas minggu ini
      </p>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {LIST_CARD.map((item, index) => (
          <div
            key={index}
            className="group relative min-w-80  h-max flex flex-col cursor-pointer rounded-lg"
          >
            <picture className=" relative overflow-hidden rounded-lg ">
              <Image
                src={item.imgUrl}
                width={1000}
                height={1000}
                alt="img dummy"
                className="w-80 h-48 group-hover:scale-150 transition-all ease-in-out object-cover rounded-lg overflow-hidden duration-300 group-hover:blur-sm"
              />
              <PlayIcon
                width={50}
                height={50}
                fill="white"
                className="absolute top-20 left-40 -z-10 group-hover:z-10 group-hover:ease-out group-hover:duration-500"
                stroke=""
              />
            </picture>
            <h3 className="text-xs font-semibold text-[#190D4B] pt-5">
              {item.date}
            </h3>
            <h1 className="text-[#141333] text-lg font-semibold group-hover:underline ">
              {item.text}
            </h1>
          </div>
        ))}
      </section>
    </main>
  );
}
