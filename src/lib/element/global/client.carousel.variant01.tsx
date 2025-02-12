'use client';

import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import Image from 'next/image';

export function CarouselVariant1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < LIST_CAROUSEL_CARD.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  const LIST_CAROUSEL_CARD = [
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      label: 'Pakai BRImo, Transfer dan Top Up #dirumahaja',
      text: 'Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      label: 'Pakai BRImo, Transfer dan Top Up #dirumahaja',
      text: 'Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      label: 'Pakai BRImo, Transfer dan Top Up #dirumahaja',
      text: 'Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      label: 'Pakai BRImo, Transfer dan Top Up #dirumahaja',
      text: 'Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      label: 'Pakai BRImo, Transfer dan Top Up #dirumahaja',
      text: 'Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja',
    },
    {
      imgUrl: '/images/dummy/img-produk-unggulan.jpg',
      label: 'Pakai BRImo, Transfer dan Top Up #dirumahaja',
      text: 'Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja',
    },
  ];
  return (
    <>
      <div className="py-20 container">
        <div className="flex mdmax:flex-wrap items-center">
          <div className="w-[20%] mdmax:w-full flex-none">
            <div className="text-2xl font-semibold mb-4">Video</div>
            <div className="flex items-center gap-5 mdmax:gap-1 bg-red-400">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 bg-red-01 text-white',
                  currentSlide === 0
                    ? 'bg-opacity-10 cursor-default'
                    : 'cursor-pointer',
                ].join(' ')}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 bg-red-01 text-white',
                  currentSlide < LIST_CAROUSEL_CARD.length - slidesToShow
                    ? 'cursor-pointer '
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
          </div>
          <div className="overflow-hidden mdmax:w-full mdmax:flex-none p-5 mdmax:p-1">
            <div
              className="flex -mx-2 transition-all ease-in-out duration-300"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {LIST_CAROUSEL_CARD.map((dataItem, index) => (
                <div
                  key={index}
                  className="w-1/4 bg-blue-200 mdmax:w-1/2 flex-none px-2"
                >
                  <Link href={dataItem.text ?? '/404'} target="_blank">
                    <div className="p-4 mdmax:p-2 shadow-lg">
                      <div className="w-full h-[12rem] mb-2">
                        <Image
                          src={dataItem.imgUrl}
                          alt="image"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className=" text-red-01 font-semibold mb-2">
                          {parseHTMLToReact(dataItem.label)}
                        </div>
                        {dataItem.text && (
                          <div className="text-xs h-[4rem] overflow-auto">
                            {parseHTMLToReact(dataItem.text)}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
