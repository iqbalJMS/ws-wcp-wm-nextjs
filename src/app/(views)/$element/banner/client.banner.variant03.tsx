'use client';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import React, { useEffect, useState, MouseEvent, useRef } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const getSlideToShow = (screenWidth: number) => {
  if (!screenWidth) return 3;

  if (screenWidth > 1200) {
    return 2;
  } else if (screenWidth <= 1200 && screenWidth >= 768) {
    return 2;
  } else {
    return 2;
  }
};

export default function CE_BannerVariant03({
  data,
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
  }>;
}) {
  const [slider, setSlider] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);

  useEffect(() => {
    if (currentSlide === slider?.length - 1) {
      setSlider((currSlider) => [...currSlider, ...data]);
    }
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => prevIndex + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, data, data.length, slider?.length]);

  const goToNext = () => {
    if (currentSlide === slider?.length - 1) {
      setSlider((currSlider) => [...currSlider, ...data]);
    }
    setCurrentSlide((prevIndex) => prevIndex + 1);
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
    <>
      <div className="w-full">
        <section className="w-full flex justify-center">
          <div className="w-full relative overflow-hidden flex justify-center">
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              ref={sliderRef}
              className="w-full h-[70vh] md:h-screen flex transition-all ease-in-out duration-500"
              style={{
                transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
              }}
            >
              {slider?.map((item, index: number) => {
                return (
                  <div
                    key={index}
                    className="w-full flex-none flex flex-col items-start md:items-center justify-center bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item.image ?? ''})`,
                      backgroundAttachment: 'fixed',
                    }}
                  >
                    <div className="bg-wmcolor opacity-20 w-full h-full absolute z-10"></div>
                    <div className="text-start w-9/12 lg:w-9/12 xl:w-8/12 space-y-4 ml-16 lg:ml-0 z-20">
                      {item?.title && (
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-poppins">
                          {parseHTMLToReact(item?.title)}
                        </h1>
                      )}
                      {item?.desc && (
                        <h2 className="text-sm xl:text-base w-full xl:w-8/12 font-light text-white mb-10 font-h2oppins">
                          {parseHTMLToReact(item?.desc)}
                        </h2>
                      )}
                      {item?.button && (
                        <button className="group relative overflow-hidden bg-privatecolor text-white uppercase font-semibold py-2 px-5 rounded-full">
                          {item?.button}
                          <span className="group-hover:bg-white absolute w-full opacity-20 duration-200 z-10 rounded-full py-5 px-5 top-0 left-0"></span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <svg
              className="w-full  absolute z-20 top-[55vh] md:top-[80vh]"
              width="1920.001"
              height="300.001"
              viewBox="900 10 100 200"
            >
              <path
                d="M960 130.001c-57.229 0-117.474-1.3-179.063-3.867-55.987-2.333-114.337-5.763-173.437-10.195-99.528-7.465-202.986-17.874-307.5-30.938L177.188 68.477 82.5 54.063 0 40.001l70.789 7.988 188.769 17.574c91.331 7.42 182.627 13.333 271.35 17.574 110.9 5.3 218.073 7.988 318.533 7.988L960.001 90c57.228-1.192 117.473-3.459 179.062-6.738l173.438-11.543c99.531-7.879 202.988-18.13 307.5-30.469l217.5-28.594L1920.001 0v40l-.048.01-82.452 14.053-94.687 14.414L1620 85.001c-104.514 13.064-207.971 23.473-307.5 30.937-59.1 4.432-117.45 7.863-173.437 10.2-61.593 2.563-121.833 3.863-179.063 3.863z"
                fill="#e9eaea"
              />
              <path
                d="M1920 300H0V40s30.58 5.719 82.5 14.062l94.688 14.415L300 85c104.529 13.065 207.987 23.474 307.5 30.937 59.093 4.432 117.446 7.862 173.437 10.2C842.515 128.7 902.761 130 960 130c57.206 0 117.451-1.3 179.063-3.864 55.984-2.336 114.336-5.768 173.436-10.2C1412.01 108.476 1515.468 98.067 1620 85l122.814-16.525 94.687-14.414L1920 40v260z"
                fill="#fff"
              />
            </svg>
            {data && (
              <div
                className={[
                  'absolute w-full flex justify-center z-30 bottom-20 md:bottom-20',
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
    </>
  );
}
