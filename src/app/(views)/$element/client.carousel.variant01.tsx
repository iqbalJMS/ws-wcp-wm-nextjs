'use client';
import React, { useEffect, useRef, useState, MouseEvent } from 'react';
import RightArrow from '@/lib/element/global/icons/right-arrow';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import Link from 'next/link';
import PlayIcon from '@/lib/element/global/icons/play-icon';
import LeftArrow from '@/lib/element/global/icons/left-arrow';

const getSlideToShow = (screenWidth: number) => {
  if (!screenWidth) return 3;

  if (screenWidth > 1200) {
    return 3;
  } else if (screenWidth < 1200 && screenWidth > 768) {
    return 2;
  } else {
    return 1;
  }
};

export default function CE_CarouselVariant1() {
  const data = [
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/b9d018d9-0b7f-6a63-add2-81393d1bf8a8?download=false',
      label: 'A New Perspective of Investment',
      text: 'We are the one stop financial solution for the advancement of your business.',
      btnText: 'test',
    },
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/b27c455d-f0c9-1dfd-4538-b6b1dbb29a1d?download=false',
      label: 'An Old Tradition for a New Generations',
      text: 'As lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.',
      btnText: 'test',
    },
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/31406447-ca4b-dcb6-87aa-a5c51c4bb1de?download=false',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details',
      btnText: 'test',
    },
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/a0c1360b-8105-7777-5806-b82e785ce424?download=false',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
      btnText: 'test',
    },
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/29c21355-0a46-0c54-aedd-b568b6d52a80?download=false',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
      btnText: 'test',
    },
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/29c21355-0a46-0c54-aedd-b568b6d52a80?download=false',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
      btnText: 'test',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;
  const totalSlides = data.length;
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // {Button Next & Prev}
  const goToNext = () => {
    if (currentIndex >= data.length - 2) return;
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + slidesToScroll);
    }
  };

  const goToPrev = () => {
    if (currentIndex <= -1) return;
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - slidesToScroll);
    }
  };

  // {Dragging Slider}
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
      goToPrev();
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

  // {Transitioning}
  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // match this duration with your CSS transition duration

      return () => clearTimeout(transitionTimeout);
    }
  }, [isTransitioning, currentIndex, totalSlides, slidesToShow]);

  useEffect(() => {
    if (currentIndex == -1) {
      sliderRef.current!.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current!.style.transform = `translateX(${100 / slidesToShow}%)`;
    } else {
      sliderRef.current!.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current!.style.transform = `translateX(-${(100 / slidesToShow) * currentIndex}%)`;
    }
  }, [currentIndex, slidesToShow]);

  const getSlideClass = (index: number) => {
    const middleIndex = currentIndex + Math.floor(slidesToShow / 2);
    const actualIndex = index % totalSlides;
    return actualIndex === middleIndex % totalSlides
      ? 'scale-100 z-10 cursor-pointer '
      : 'scale-75 z-0 opacity-60 ';
  };

  return (
    <>
      <div className="w-full h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        <section className="flex justify-between w-11/12 xl:w-8/12  pb-5 md:pb-0">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Video</h1>
            <p className="font-light text-sm pb-3">
              Daftar putar teratas minggu ini
            </p>
            <Link
              href={'#'}
              className="flex items-center text-wmcolor font-semibold uppercase hover:underline"
            >
              Lihat Lainnya{' '}
              <span className="pl-3">
                <RightArrow
                  className=""
                  width={17}
                  height={17}
                  fill="#080087"
                  stroke="#080087"
                />
              </span>
            </Link>
          </div>
          <div className="space-x-3 ">
            <button
              className={[
                ' p-1 bg-wmcolor text-white hover:bg-gray-500 duration-300 delay-75',
                currentIndex < 0
                  ? 'bg-opacity-35 cursor-default'
                  : 'cursor-pointer',
              ].join('')}
              onClick={goToPrev}
            >
              <LeftArrow
                width={27}
                height={27}
                stroke={''}
                fill="white"
                className={currentIndex < 0 ? 'opacity-20' : 'text-white'}
              />
            </button>
            <button
              className={[
                ' p-1 bg-wmcolor text-white hover:bg-gray-500 duration-300 delay-75',
                currentIndex >= data.length - 2
                  ? 'bg-opacity-35 cursor-default'
                  : 'cursor-pointer ',
              ].join('')}
              onClick={goToNext}
            >
              <RightArrow
                width={27}
                height={27}
                stroke={''}
                fill="white"
                className={
                  currentIndex >= data.length - 2 ? 'opacity-20' : 'text-white'
                }
              />
            </button>
          </div>
        </section>
        <section className="relative w-11/12 lg:w-11/12 xl:w-9/12 overflow-hidden">
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={sliderRef}
            className={`flex transition-transform duration-700 ease-in-out transform-gpu w-full`}
          >
            {[...data].map((slide, index) => (
              <div
                key={index}
                className={`w-full flex justify-center items-center transition-transform drop-shadow-2xl duration-300 *: ${getSlideClass(index)}`}
                style={{
                  minWidth: `${100 / slidesToShow}%`,
                }}
              >
                <picture
                  key={index}
                  className="cursor-pointer relative w-full overflow-hidden z-0"
                >
                  <div
                    className="group flex flex-col justify-between w-full h-96 bg-no-repeat bg-cover hover:scale-125 duration-300 bg-center transition-all ease-in-out transform-gpu delay-75 "
                    style={{
                      backgroundImage: `url(${slide.imgUrl})`,
                    }}
                  >
                    <div className=" w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  </div>
                  {/* <div className="absolute h-60 flex flex-col justify-between items-center bottom-0 p-5"> */}
                  <PlayIcon
                    width={50}
                    height={50}
                    stroke="white"
                    className="absolute top-40 left-56 duration-500 p-2 rounded-full border"
                    fill="white"
                  />
                  {/* <div> */}
                  <h1 className="absolute text-white text-xl bottom-20 font-semibold px-7">
                    {slide.label}
                  </h1>
                  <p className="absolute text-white text-sm bottom-8 line-clamp-2 pr-10 pl-7">
                    {slide.text}
                  </p>
                  {/* </div> */}
                  {/* </div> */}
                </picture>
              </div>
            ))}
          </div>
        </section>
        <div className="absolute bg-[#DCDCDC] w-10/12 h-60 -z-10 bottom-20 left-0 rounded-r-full"></div>
      </div>
    </>
  );
}
