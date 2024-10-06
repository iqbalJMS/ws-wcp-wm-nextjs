import React from 'react';
import ArrowRightIcon from './arrow-rigth-icon';

export default function CardVariant5() {
  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/banner.jpg',
      textBtn: 'Investasi',
      label: 'BRI',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      textBtn: 'Bancassurance',
      label: 'BRI',
    },
  ];
  return (
    <main className="flex justify-center">
      <section className="w-full lg:w-11/12 xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 lg:content-center">
        <div className="pb-10 w-96 lg:flex flex-col justify-center">
          <h1 className="pb-3 text-3xl font-bold uppercase ">
            produk unggulan
          </h1>
          <p className="text-[#826B64] font-normal text-sm lg:text-base">
            Temukan lebih lanjut tentang produk Investasi dan Bancassurance
          </p>
        </div>
        <section className="grid grid-cols-1 gap-5">
          {LIST_CARD_CONTENT.map((item, index) => (
            <div
              key={index}
              className="flex items-end justify-between w-full h-48 pb-5 pr-5 pl-2"
              style={{
                backgroundImage: `url(${item.imgUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <button className="text-white font-medium">
                {item.label} <span>{item.textBtn}</span>
              </button>
              <ArrowRightIcon width={20} />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
