'use client';
import Image from 'next/image';
import Link from 'next/link';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useEffect, useRef, useState } from 'react';

const CE_ImageSliderMain = () => {
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
      ? 'scale-150 z-10'
      : 'scale-100 z-0 opacity-50';
  };

  return (
    <div className="container py-40 mdmax:py-10">
      <div className="text-2xl text-center font-semibold mb-10">tester</div>
      <div className="relative w-full overflow-hidden ">
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
                <Link href={slide.btnText} target="_blank">
                  <Image
                    src={slide.imgUrl}
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
