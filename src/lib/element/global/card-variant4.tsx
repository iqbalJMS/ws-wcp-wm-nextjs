import React from 'react';
import ShapeIcon from './shape-icon';
import ArrowRightIcon from './arrow-rigth-icon';

export default function CardVariant4() {
  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'BRI',
      category: 'private',
      text: 'Untuk Pribadi Istimewa',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'BRI',
      category: 'prioritas',
      text: 'Untuk Pribadi Terpilih',
    },
  ];
  return (
    <main className="relative w-full h-auto flex justify-center">
      <section className="w-full lg:w-11/12">
        <h1 className="text-center pb-20 text-4xl font-semibold uppercase">
          layanan kami
        </h1>
        <div className="w-full grid grid-cols-1 gap-y-5 place-items-center lg:grid-cols-2 xl:px-60 ">
          {LIST_CARD_CONTENT.map((item, index) => (
            <div
              key={index}
              className="w-full h-60 py-4 px-5 md:px-10 lg:h-72 flex flex-col justify-between"
              style={{
                backgroundImage: `url(${item.imgUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex justify-between">
                <h1 className="text-6xl text-white font-medium">
                  {item.label}
                  <span className="text-4xl font-light">{item.category}</span>
                </h1>
                <ArrowRightIcon width={25} className="" />
              </div>
              <span>
                <h1 className="text-white text-base font-medium">
                  {item.text}
                </h1>
              </span>
            </div>
          ))}
        </div>
      </section>
      <ShapeIcon width={200} className="absolute left-40 top-60 -z-10" />
      <ShapeIcon width={200} className="absolute right-40 top-28 -z-10" />
    </main>
  );
}
