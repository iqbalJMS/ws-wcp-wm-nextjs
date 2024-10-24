'use client';
import React from 'react';
import { useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';

export default function CardVariant5() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide <= LIST_CARD_CONTENT.length - slidesToShow) {
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
  ];

  return (
    <div className="w-full h-auto flex justify-center">
      <section className="w-full md:w-10/12 lg:w-11/12 xl:w-9/12 grid grid-cols-1 lg:grid-cols-2 lg:content-center xl:px-8">
        <div className="pb-10 w-96 lg:flex flex-col justify-center">
          <h1 className="pb-3 text-3xl font-bold uppercase ">
            produk unggulan
          </h1>
          <p className="text-[#826B64] font-normal text-sm lg:text-base">
            Temukan lebih lanjut tentang produk Investasi dan Bancassurance
          </p>
        </div>
        <section className="w-full overflow-hidden mdmax:w-full mdmax:flex-none">
          <div
            className="w-full flex transition-all ease-in-out duration-300 lg:space-x-5"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {LIST_CARD_CONTENT.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-80 overflow-hidden cursor-pointer flex-none lg:flex-1"
              >
                <div
                  className="w-full h-80 flex items-end justify-between bg-no-repeat bg-cover hover:scale-125 bg-center transition-all ease-in-out transform-gpu delay-75"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                  <div className="w-full h-full bg-black opacity-50">.</div>
                </div>
                <button className="text-white font-medium absolute left-5 bottom-5">
                  {item.label} <span>{item.textBtn}</span>
                </button>
                <ArrowRightIcon
                  className="absolute right-16 bottom-5"
                  width={25}
                  fill="white"
                  stroke="white"
                />
              </div>
            ))}
          </div>
          <div className="lg:hidden w-full flex justify-end px-10 py-3 space-x-3 ">
            <button
              className={[
                'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white mdmax:',
                currentSlide === 0
                  ? 'text-opacity-10 cursor-default'
                  : 'cursor-pointer',
              ].join(' ')}
              onClick={prevSlide}
            >
              <ArrowLeftIcon
                width={40}
                height={40}
                stroke={'#4640A5'}
                className={
                  currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
                }
              />
            </button>
            <button
              className={[
                'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
                currentSlide < LIST_CARD_CONTENT.length - 1 - slidesToShow
                  ? 'cursor-pointer '
                  : 'bg-opacity-10 cursor-default',
              ].join(' ')}
              onClick={nextSlide}
            >
              <ArrowRightIcon
                width={40}
                height={40}
                stroke="#4640A5"
                className={
                  currentSlide === LIST_CARD_CONTENT?.length - 1
                    ? 'opacity-50'
                    : 'text-white text-red'
                }
              />
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
