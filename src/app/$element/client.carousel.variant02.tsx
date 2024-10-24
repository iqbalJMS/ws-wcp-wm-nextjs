'use client';

// import { T_CarouselMainProps } from '@/app/$action/constants';
import Image from 'next/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';

export function CE_CarouselVariant02() {
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
          <div className="text-center">
            <div className="text-3xl mb-4">hello</div>
          </div>
          <div className="overflow-hidden p-5 mdmax:p-2 relative mb-10">
            <button
              className={[
                'absolute top-1/2 left-0 transform -translate-y-1/2 z-10',
                'w-12 h-12 mdmax:w-8 mdmax:h-8  text-white',
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
                'absolute top-1/2 right-0 transform -translate-y-1/2 z-10',
                'w-12 h-12 mdmax:w-8 mdmax:h-8  text-white',
                currentSlide < data.length - slidesToShow
                  ? 'bg-red-01 cursor-pointer'
                  : 'bg-red-100 cursor-default',
              ].join(' ')}
              onClick={nextSlide}
            >
              &#10095;
            </button>
            <div
              className="flex  -mx-2 transition-all ease-in-out duration-300 relative z-0"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {data.map((dataItem, index) => (
                <div key={index} className="w-1/4 mdmax:w-1/2 flex-none px-2">
                  <Link href="#" target="_blank">
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
                        <div className=" text-red-01 font-semibold mb-1 text-line-1">
                          {parseHTMLToReact(dataItem.label)}
                        </div>
                        <div className="text-xs text-line-1 mb-2">
                          {parseHTMLToReact(dataItem.label || '')}
                        </div>
                        <div className="text-xs h-[4rem] overflow-auto">
                          {parseHTMLToReact(dataItem.text)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            {/* {button && (
              <Link href={button?.link} target="_blank">
                <div className="inline-flex gap-2 items-center text-blue-01">
                  {parseHTMLToReact(button?.name || '')}{' '}
                  <span className="text-xs">&#10095;</span>
                </div>
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
