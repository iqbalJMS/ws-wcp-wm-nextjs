'use client';

import Image from 'next/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import BannerIcon from '@/lib/element/global/icons/banner-icon';

export function CE_BannerVariant03() {
  const data = [
    {
      imgUrl: '/images/dummy/bannerWm7.png',
      label: 'we will walk with you',
      text: 'Never lose a trusting hand with BRI Prioritas, even on times in need. We will walk with you through paths of life, giving you the best advices to ensure you have all you need to achieve your goals',
    },
    {
      imgUrl: '/images/dummy/bannerWm8.jpg',
      label: 'stay on the bright side stay',
      text: 'times may be changing, but there will always be opportunities and ideas to live on when you keep a positive eye on everything BRI Prioritas is always ready to help you achieve your dreams and keep you on the bright side of life',
    },
    {
      imgUrl: '/images/dummy/bannerWm9.png',
      label: 'experience the good things in life',
      text: 'BRI Prioritas cares about your convenience and offers you never ending supporting services for you to live the best life, no matter what.',
    },
  ];

  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 50000);

    return () => clearInterval(interval);
  }, [data?.length]);

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0); // Reset translate value when a new drag starts
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged enough, change the image
    if (translateX > 40) {
      goToPrevious();
    } else if (translateX < -50) {
      goToNext();
    }

    setTranslateX(0); // Reset translate after slide
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden relative pb-2 ">
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          className="w-full overflow-hidden relative h-[80vh] xl:h-screen z-10"
        >
          {data?.map((bannerItem, bannerIndex: number) => {
            return (
              <div
                key={bannerIndex}
                className={`
                  absolute w-full h-full top-0 left-0
                  transition-all ease-in-out duration-500
                  ${bannerIndex === index ? '' : 'opacity-0'}
                  `}
              >
                <div className="overflow-hidden w-full h-full relative flex justify-center ">
                  <Image
                    src={bannerItem.imgUrl}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
                  <div className="w-full lg:w-9/12 xl:w-10/12 2xl:w-8/12 flex justify-center lg:justify-start absolute top-56 p-5 md:px-32 lg:px-0 transform z-30">
                    <div className="space-y-5">
                      {bannerItem?.label && (
                        <div className="text-4xl mdmax:text-3xl font-semibold text-white uppercase">
                          {parseHTMLToReact(bannerItem?.label)}
                        </div>
                      )}
                      {bannerItem?.text && (
                        <div className="text-sm xl:text-base w-full xl:w-8/12  font-light text-white mb-10">
                          {parseHTMLToReact(bannerItem?.text)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="">
            <BannerIcon
              className="w-full h-44 object-cover absolute z-10 bottom-0"
              stroke={''}
            />
          </div>
        </div>
        {data.length > 1 && (
          <div
            className={[
              'absolute w-full flex justify-center z-30 bottom-44 md:bottom-16',
            ].join(' ')}
          >
            <div className="space-x-1 md:space-x-4 -mt-20 right-20 mdmax:m-0 flex mdmax:gap-2">
              {data?.map((_: any, bannerIndex: number) => (
                <div
                  key={bannerIndex}
                  className={[
                    'w-2 h-2 md:w-[10px] md:h-[10px] rounded-full cursor-pointer',
                    '',
                    `${bannerIndex === index ? 'outline outline-1 outline-gray-600 bg-gray-600 outline-offset-2 ' : 'bg-white bg-opacity-65 '}`,
                    'cursor-pointer',
                  ].join(' ')}
                  onClick={() => {
                    setIndex(bannerIndex);
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div className="w-full h-[50rem] mdmax:h-[20rem] absolute top-4 left-0 bg-black rounded-br-[14rem] mdmax:rounded-br-[7rem] overflow-hidden bg-opacity-10 z-0"></div>
      </div>
    </>
  );
}
