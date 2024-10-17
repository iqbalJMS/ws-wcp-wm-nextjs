'use client';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import React, { useEffect, useState, MouseEvent, useRef } from 'react';

export function CE_BannerVariant02() {
  const data = [
    {
      imgUrl: '/images/dummy/bannerWm4.png',
      label: 'A New Perspective of Investment',
      text: 'We are the one stop financial solution for the advancement of your business.',
      btnText: 'find out more',
    },
    {
      imgUrl: '/images/dummy/bannerWm5.png',
      label: 'An Old Tradition for a New Generations',
      text: 'As lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.',
    },
    {
      imgUrl: '/images/dummy/bannerWm6.png',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 2 : 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data?.length]);

  const goToNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) =>
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
    <div className="w-full overflow-hidden">
      <section className="w-full flex justify-center">
        <div className="relative overflow-hidden flex justify-center">
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={sliderRef}
            className="w-full h-[70vh] lg:h-screen flex transition-all ease-in-out duration-500"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                }}
                key={index}
                className="w-full flex-none flex flex-col items-start md:items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat xl:bg-fixed"
              >
                <div className="text-start w-10/12 md:w-8/12 space-y-4 ml-5 lg:ml-0">
                  <h1 className="text-3xl lg:text-4xl font-semibold text-white">
                    {item.label}
                  </h1>
                  <p className="text-sm xl:text-base w-full xl:w-8/12 font-light text-white mb-10">
                    {item.text}
                  </p>
                  {item?.btnText && (
                    <button className="group relative overflow-hidden bg-privatecolor text-white uppercase font-semibold py-2 px-5 rounded-full">
                      {item?.btnText}
                      <span className="group-hover:bg-white absolute w-full opacity-20 duration-200 z-10 rounded-full py-5 px-5 top-0 left-0"></span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {data.length > 1 && (
            <div
              className={[
                'absolute w-full flex justify-center z-30 bottom-20 md:bottom-9',
              ].join(' ')}
            >
              <div className="space-x-2 md:space-x-4 -mt-20 right-20 mdmax:m-0 flex mdmax:gap-2">
                {data?.map((_: any, bannerIndex: number) => (
                  <div
                    key={bannerIndex}
                    className={[
                      'w-2 h-2 md:w-[10px] md:h-[10px] rounded-full ',
                      '',
                      `${bannerIndex === currentSlide ? 'outline outline-1 outline-white bg-white outline-offset-2 ' : 'bg-white bg-opacity-65 '}`,
                      'cursor-pointer',
                    ].join(' ')}
                    onClick={() => {
                      setCurrentSlide(bannerIndex);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
