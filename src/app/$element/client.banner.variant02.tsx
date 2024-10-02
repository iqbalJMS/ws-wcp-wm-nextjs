'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export function CE_BannerVariant02({
  data,
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
  }>;
}) {
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
    }, 3000);

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
    if (translateX > 50) {
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
      <div className="overflow-hidden relative pb-5">
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          className="overflow-hidden relative rounded-br-[14rem] h-[30rem] mdmax:h-[10rem] mdmax:rounded-br-[7rem] z-10"
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
                <div className=" overflow-hidden w-full h-full relative ">
                  <Image
                    extern={true}
                    src={bannerItem.image}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-30 left-[12rem] mdmax:left-5">
                    <div>
                      {bannerItem?.title && (
                        <div className="text-[5rem] mdmax:text-3xl font-semibold text-white">
                          {parseHTMLToReact(bannerItem?.title)}
                        </div>
                      )}
                      {bannerItem?.desc && (
                        <div className="text-[1rem] mdmax:text-sm font-medium text-white">
                          {parseHTMLToReact(bannerItem?.desc)}
                        </div>
                      )}
                      {bannerItem?.button && (
                        <div>
                          <ButtonSecondary
                            size="lg"
                            color="red-01"
                            rounded="full"
                            className="px-20"
                          >
                            {bannerItem?.button}
                          </ButtonSecondary>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {data.length > 1 && (
          <div
            className={[
              'absolute top-1/2 transform -translate-y-1/2 z-30 right-[12rem]',
              'mdmax:top-[initial] mdmax:bottom-2 mdmax:right-[initial] mdmax:left-1/2 mdmax:-translate-x-1/2',
            ].join(' ')}
          >
            <div className="-mt-10 mdmax:m-0 mdmax:flex mdmax:gap-2">
              {data?.map((_: any, bannerIndex: number) => (
                <div
                  key={bannerIndex}
                  className={[
                    'w-5 h-5 rounded-full bg-red-01 mb-3 ',
                    'mdmax:w-4 mdmax:h-4',
                    `${bannerIndex === index ? '' : 'bg-opacity-50'}`,
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

        <div className="w-full h-[30rem] absolute top-4 left-0 bg-black rounded-br-[14rem] mdmax:h-[10rem] mdmax:rounded-br-[7rem] overflow-hidden bg-opacity-10 z-0"></div>
      </div>
    </>
  );
}
