'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useEffect, useRef, useState } from 'react';

const CE_ImageSliderMain = ({
  data,
  title,
}: {
  data: Array<{
    image: string;
    link: string;
  }>;
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(data.length);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 5 : 3;

  const slidesToScroll = 1;
  const totalSlides = data.length;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + slidesToScroll);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - slidesToScroll);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);

        // Handle the loop when we reach the cloned slides
        if (currentIndex >= totalSlides * 2) {
          setCurrentIndex(totalSlides);
          sliderRef.current!.style.transition = 'none';
          sliderRef.current!.style.transform = `translateX(-${(100 / slidesToShow) * totalSlides}%)`;
        } else if (currentIndex < totalSlides) {
          setCurrentIndex(totalSlides + (currentIndex % totalSlides));
          sliderRef.current!.style.transition = 'none';
          sliderRef.current!.style.transform = `translateX(-${(100 / slidesToShow) * totalSlides}%)`;
        }
      }, 500); // match this duration with your CSS transition duration

      return () => clearTimeout(transitionTimeout);
    }
  }, [isTransitioning, currentIndex, totalSlides, slidesToShow]);

  useEffect(() => {
    sliderRef.current!.style.transition = 'transform 0.5s ease-in-out';
    sliderRef.current!.style.transform = `translateX(-${(100 / slidesToShow) * currentIndex}%)`;
  }, [currentIndex, slidesToShow]);

  const getSlideClass = (index: number) => {
    const middleIndex = currentIndex + Math.floor(slidesToShow / 2);
    const actualIndex = index % totalSlides;
    return actualIndex === middleIndex % totalSlides
      ? 'scale-100 z-10'
      : 'scale-100 z-0 opacity-50';
  };

  return (
    <div className="container py-40 mdmax:py-10">
      <div className="text-2xl text-center font-semibold mb-10">{title}</div>
      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex transition-transform duration-500 ease-in-out transform-gpu`}
        >
          {[...data, ...data, ...data].map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-1/5 mdmax:w-1/3 flex justify-center items-center p-2 transition-transform ${getSlideClass(index)}`}
              style={{ minWidth: `${100 / slidesToShow}%` }}
            >
              <div className="w-full h-40 mdmax:h-[5rem] border-[.12rem] border-transparent hover:border-orange-01 overflow-hidden rounded-md">
                <Link href={slide.link} target="_blank">
                  <Image
                    extern={true}
                    src={slide.image}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    alt={`slide-${index}`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 w-10 h-10 bg-red-01 text-white"
          onClick={goToPrev}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 w-10 h-10 bg-red-01 text-white"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CE_ImageSliderMain;
