'use client';
import React from 'react';
import ArrowRightIcon from './arrow-rigth-icon';
import { useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';

export default function CardVariant5() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < LIST_CARD_CONTENT.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      textBtn: 'Investasi',
      label: 'BRI',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan2.jpg',
      textBtn: 'Bancassurance',
      label: 'BRI',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan2.jpg',
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
        <section className="w-full overflow-hidden bg-red-300 flex">
          <div
            className="w-full flex transition-all ease-in-out duration-300 "
            style={{
              transform: `translateX(-${currentSlide * (180 / slidesToShow)}%)`,
            }}
          >
            {LIST_CARD_CONTENT.map((item, index) => (
              <picture
                key={index}
                className="relative w-full h-80 overflow-hidden cursor-pointer"
              >
                <div
                  className="flex items-end justify-between w-96 h-80 bg-no-repeat bg-cover hover:scale-125 bg-center transition-all ease-in-out transform-gpu delay-75"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                  <div className="w-full h-full bg-black opacity-50">.</div>
                </div>
                <button className="text-white font-medium absolute left-5 bottom-5">
                  {item.label} <span>{item.textBtn}</span>
                </button>
                <ArrowRightIcon
                  className="absolute right-5 bottom-5"
                  width={20}
                  fill="white"
                  stroke="white"
                />
              </picture>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
