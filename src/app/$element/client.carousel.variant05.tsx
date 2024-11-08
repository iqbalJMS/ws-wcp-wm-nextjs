'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';

export function CE_CarouselVariant05() {
  const data = [
    {
      dummy: {
        link: '',
        image: '',
        title: '',
      },
      title: 'data dumy',
      description: 'data dumy',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < data.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };
  return (
    <>
      <div className="py-20 container">
        <div>
          <div className="text-center mb-5">
            <div className="text-3xl ">
              {parseHTMLToReact(data?.[0]?.title || '')}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl mdmax:text-sm mb-4">
                {parseHTMLToReact(data?.[0]?.description || '')}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className={[
                  'w-10 h-10 mdmax:w-8 mdmax:h-8  text-white',
                  currentSlide === 0
                    ? 'bg-red-100 cursor-default'
                    : 'bg-red-01 cursor-pointer',
                ].join(' ')}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className={[
                  'w-10 h-10 mdmax:w-8 mdmax:h-8  text-white',
                  currentSlide < data.length - slidesToShow
                    ? 'bg-red-01 cursor-pointer'
                    : 'bg-red-100 cursor-default',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
          </div>
          <div className="overflow-hidden p-5 mdmax:p-2 relative mb-10">
            <div
              className="flex  -mx-2 transition-all ease-in-out duration-300 relative z-0"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {data.map((dataItem, index) => (
                <div key={index} className="w-1/4 mdmax:w-1/2 flex-none px-2">
                  <Link href={dataItem?.dummy?.link || ''} target="_blank">
                    <div className="p-4 shadow-lg">
                      <div className="w-full h-[12rem] mb-2">
                        <Image
                          extern={true}
                          src={dataItem?.dummy?.image}
                          alt="image"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className=" text-red-01 font-semibold mb-1 text-line-1">
                          {parseHTMLToReact(dataItem?.title)}
                        </div>
                        <div className="text-xs text-line-1 mb-2">
                          {parseHTMLToReact(dataItem?.description || '')}
                        </div>
                        <div className="text-xs h-[4rem] overflow-auto">
                          {parseHTMLToReact(dataItem?.description)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            {data?.[0]?.dummy?.link && (
              <Link href={data?.[0]?.dummy?.link} target="_blank">
                <div className="inline-flex gap-2 items-center text-blue-01">
                  {parseHTMLToReact(data?.[0]?.dummy?.link || '')}{' '}
                  <span className="text-xs">&#10095;</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
