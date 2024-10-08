import React from 'react';
import ArrowRightIcon from './arrow-rigth-icon';
import Image from 'next/image';
export default function CardVariant8() {
  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Reksa Dana',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque doloremque nobis eveniet inventore harum alias veniam saepe commodi odio?',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Reksa Dana',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque doloremque nobis eveniet inventore harum alias veniam saepe commodi odio?',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Reksa Dana',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque doloremque nobis eveniet inventore harum alias veniam saepe commodi odio?',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Reksa Dana',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque doloremque nobis eveniet inventore harum alias veniam saepe commodi odio?',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Reksa Dana',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque doloremque nobis eveniet inventore harum alias veniam saepe commodi odio?',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Reksa Dana',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque doloremque nobis eveniet inventore harum alias veniam saepe commodi odio?',
    },
  ];
  return (
    <main className="w-full flex justify-center">
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 place-items-center">
        {LIST_CARD_CONTENT.map((item, index) => (
          <div
            key={index}
            className="bg-white-02 w-[53vh] xl:w-[40vh] border border-gray-200 shadow-2xl cursor-pointer"
          >
            <div className="w-full p-5">
              <Image
                src={item.imgUrl}
                width={100}
                height={40}
                alt="image produk investasi"
                className="w-full"
              />
            </div>
            <div className="p-5 space-y-8">
              <h1 className="text-2xl font-bold">{item.label}</h1>
              <p className="text-[#C1AB9E] text-sm w-96 xl:w-80">{item.text}</p>
              <button className="flex items-center w-full uppercase text-[#080087]">
                Lihat detail{' '}
                <span className="pl-10">
                  <ArrowRightIcon
                    className=""
                    fill="#080087"
                    width={20}
                    stroke=""
                  />
                </span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
