import React from 'react';
import Image from 'next/image';

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
      <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
        {LIST_CARD.map((item, index) => (
          <div
            key={index}
            className="w-80 h-72 flex flex-col justify-between hover:underline cursor-pointer hover:w-96 duration-300"
          >
            <Image
              src={item.imgUrl}
              width={200}
              height={200}
              alt="img dummy"
              className="w-full h-48 rounded-lg"
            />
            <h3 className="text-sm text-[#565656]">{item.date}</h3>
            <h1 className="text-[#10037E] text-lg font-semibold">
              {item.text}
            </h1>
          </div>
        ))}
      </section>
    </main>
  );
}
