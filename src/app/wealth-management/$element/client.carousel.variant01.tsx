'use client';
import React, { useState } from 'react';
import RightArrow from '@/lib/element/global/icons/right-arrow';
import LeftArrow from '@/lib/element/global/icons/left-arrow';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';

export default function CE_CarouselVariant1() {
  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/img-promo-cv3.png',
      label: 'Asuransi Griya Proteksi Maksima dan Layanan Safe Deposit Box',
      textBtn: 'Lihat Promo',
    },
    {
      imgUrl: '/images/dummy/img-promo-cv3.png',
      label: 'Layanan BRI Prioritas, Investasi Reksadana dan Tabungan Emas',
      textBtn: 'Lihat Promo',
    },
    {
      imgUrl: '/images/dummy/img-promo-cv3.png',
      label: 'Layanan Advisory BRI Prioritas dan Aplikasi BRIGHTS',
      textBtn: 'Lihat Promo',
    },
    {
      imgUrl: '/images/dummy/img-promo-cv3.png',
      label: 'Airport Lounge',
      textBtn: 'Lihat Promo',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 3 : 2;
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
  return (
    <div className="bg-red-200 w-full h-[70vh] flex justify-center items-center">
      <div className="bg-blue-300 w-8/12 flex flex-col  ">
        <section className="w-full flex justify-between bg-yellow-300">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Video</h1>
            <p className="font-light">Daftar putar teratas minggu ini</p>
            <button className="flex items-center text-lg text-wmcolor uppercase font-semibold hover:underline">
              lihat lainnya
              <span className="pl-3">
                <RightArrow
                  className="font-bold"
                  fill="#080087"
                  height={15}
                  width={15}
                  stroke=""
                />
              </span>
            </button>
          </div>
          <div className="flex space-x-3">
            <LeftArrow
              className="bg-wmcolor hover:bg-gray-500 p-1 cursor-pointer duration-300"
              fill="white"
              height={35}
              width={35}
              stroke=""
            />
            <RightArrow
              className="bg-wmcolor hover:bg-gray-500 p-1 cursor-pointer duration-300"
              fill="white"
              height={35}
              width={35}
              stroke=""
            />
          </div>
        </section>
        <section>
          <section className="w-full flex justify-center">
            <div className="w-11/12 flex flex-row justify-center">
              <div className="basis-20 flex justify-center items-center">
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
              </div>
              <div className="overflow-hidden basis-11/12 flex justify-center p-5">
                <div
                  className="w-full flex -mx-5 transition-all ease-in-out duration-300 space-x-5 "
                  style={{
                    transform: `translateX(-${currentSlide * (180 / slidesToShow)}%)`,
                  }}
                >
                  {LIST_CARD_CONTENT.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-[32%] h-72 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                      style={{
                        backgroundImage: `url(${item.imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="absolute w-full h-72 bg-black opacity-30 rounded-lg">
                        .
                      </div>
                      <h1 className="pb-4 px-2 z-50 text-white text-sm font-medium">
                        {item.label}
                      </h1>
                      <button className="pb-4 px-2 z-50 hover:underline text-white flex items-center text-sm">
                        {item.textBtn}
                        <span className="pl-4">
                          <ArrowRightIcon
                            width={20}
                            height={20}
                            stroke="white"
                            fill="white"
                          />
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="basis-20 flex justify-center items-center">
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
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
