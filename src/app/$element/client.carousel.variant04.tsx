'use client';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';
import Image from 'next/image';

export function CE_CarouselVariant04() {
  const data = [
    {
      imgUrl: '/images/dummy/bannerWm1.png',
      label: 'A New Perspective of Investment',
      text: 'We are the one stop financial solution for the advancement of your business.',
      btnText: 'test',
    },
    {
      imgUrl: '/images/dummy/bannerWm2.png',
      label: 'An Old Tradition for a New Generations',
      text: 'As lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.',
      btnText: 'test',
    },
    {
      imgUrl: '/images/dummy/bannerWm3.png',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
      btnText: 'test',
    },
    {
      imgUrl: '/images/dummy/bannerWm3.png',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
      btnText: 'test',
    },
    {
      imgUrl: '/images/dummy/bannerWm3.png',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
      btnText: 'test',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 3 : 2;
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
        <div className="flex items-center mdmax:flex-wrap">
          <div className="w-[20%] mdmax:w-full flex-none">
            <div className="text-2xl font-semibold mb-2">title</div>
            <Link href={'#'} target="_blank">
              <div className="inline-flex gap-2 items-center text-blue-01 mb-5">
                test carousel
                <span className="text-xs">&#10095;</span>
              </div>
            </Link>
            <div className="flex items-center gap-5 mdmax:gap-1">
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
                  currentSlide < data.length - slidesToShow
                    ? 'cursor-pointer '
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
          </div>
          <div className="overflow-hidden p-5 mdmax:p-2">
            <div
              className="flex  -mx-2 transition-all ease-in-out duration-300"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {data.map((dataItem, index) => (
                <div key={index} className="w-1/3 mdmax:w-1/2 flex-none px-2">
                  <Link href={dataItem.btnText} target="_blank">
                    <div className="p-4 bg-white h-full shadow-lg text-center">
                      <div className="w-[5rem] h-[5rem] mb-2 rounded-full overflow-hidden inline-block">
                        <Image
                          extern={true}
                          src={dataItem.imgUrl}
                          alt="image"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className=" text-red-01 font-semibold mb-1">
                          {parseHTMLToReact(dataItem.label)}
                        </div>
                        {dataItem.text && (
                          <div className="text-xs mb-2 overflow-auto">
                            {parseHTMLToReact(dataItem.text)}
                          </div>
                        )}
                        {dataItem.text && (
                          <div className="text-xs h-[4rem] overflow-auto">
                            {parseHTMLToReact(dataItem.text)}
                          </div>
                        )}
                        {dataItem.btnText && (
                          <Link href={dataItem.btnText} target="_blank">
                            <div className="inline-flex gap-2 items-center text-sm text-blue-01 uppercase underline">
                              {parseHTMLToReact(dataItem.btnText)}
                            </div>
                          </Link>
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
