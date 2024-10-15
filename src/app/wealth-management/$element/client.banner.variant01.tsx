'use client';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export function CE_BannerVariant01() {
  const data = [
    {
      imgUrl: '/images/dummy/bannerWm1.png',
      label: 'A New Perspective of Investment',
      text: 'We are the one stop financial solution for the advancement of your business.',
    },
    {
      imgUrl: '/images/dummy/bannerWm2.png',
      label: 'An Old Tradition for a New Generations',
      text: 'As lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.',
    },
    {
      imgUrl: '/images/dummy/bannerWm3.png',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
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
    }, 7000);

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
          className="w-full overflow-hidden relative h-[70vh] lg:h-screen z-10"
        >
          {data?.map((bannerItem, bannerIndex: number) => {
            return (
              <div
                key={bannerIndex}
                className={`
                  absolute w-full h-[70vh] lg:h-screen top-0 left-0
                  transition-all ease-in-out duration-500
                  ${bannerIndex === index ? '' : 'opacity-0'}
                  `}
              >
                <div className=" w-full h-[70vh] lg:h-full flex justify-center bg-fixed">
                  <div
                    style={{ backgroundImage: `url(${bannerItem.imgUrl})` }}
                    className="w-full h-[70vh] lg:h-full bg-cover bg-center bg-no-repeat xl:bg-cover xl:bg-fixed xl:bg-center"
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full "></div>
                  <div className="w-full lg:w-9/12 xl:w-10/12 2xl:w-8/12 flex justify-center lg:justify-start absolute top-56 lg:top-80 p-5 md:px-32 lg:px-0 transform z-30">
                    <div className="space-y-5">
                      {bannerItem?.label && (
                        <div className="text-2xl lg:text-4xl font-semibold text-white">
                          {parseHTMLToReact(bannerItem?.label)}
                        </div>
                      )}
                      {bannerItem?.text && (
                        <div className="text-sm xl:text-base w-full xl:w-8/12 font-light text-white mb-10">
                          {parseHTMLToReact(bannerItem?.text)}
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
              'absolute w-full flex justify-center z-30 bottom-28 md:bottom-16',
            ].join(' ')}
          >
            <div className="space-x-2 md:space-x-4 -mt-20 right-20 mdmax:m-0 flex mdmax:gap-2">
              {data?.map((_: any, bannerIndex: number) => (
                <div
                  key={bannerIndex}
                  className={[
                    'w-2 h-2 md:w-[10px] md:h-[10px] rounded-full ',
                    '',
                    `${bannerIndex === index ? 'outline outline-1 outline-white bg-white outline-offset-2 ' : 'bg-white bg-opacity-65 '}`,
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
