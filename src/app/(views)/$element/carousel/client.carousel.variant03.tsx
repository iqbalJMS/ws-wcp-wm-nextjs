'use client';
import React, { useEffect, useRef, useState, MouseEvent } from 'react';
import RightArrow from '@/lib/element/global/icons/right-arrow';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import Link from 'next/link';
import PlayIcon from '@/lib/element/global/icons/play-icon';
import LeftArrow from '@/lib/element/global/icons/left-arrow';
import ModalTester from '@/lib/element/global/modal.tedter';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const getSlideToShow = (screenWidth: number) => {
  if (!screenWidth) return 3;

  if (screenWidth > 1200) {
    return 3;
  } else if (screenWidth <= 1200 && screenWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
};

export default function CE_CarouselVariant3({
  data,
  title,
  subtitle,
  titlelink,
  linkcta,
}: {
  data: Array<{
    id: number;
    image: string;
    alt: string;
    label: string;
    desc: string;
    video: string;
    labelVideo: string;
    subLabel: string;
  }>;
  title: any;
  subtitle: any;
  titlelink: any;
  linkcta: any;
}) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;
  const totalSlides = data?.length;
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setModalIndex(null);
  };

  // {Button Next & Prev}
  const goToNext = () => {
    if (currentIndex >= data.length - 2) return;
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + slidesToScroll);
    }
  };
  const goToNextMobile = () => {
    if (currentIndex >= data.length - 1) return;
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

  const goToPrevMobile = () => {
    if (currentIndex <= 0) return;
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
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="space-y-1"
          >
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="font-light text-sm pb-3">{subtitle}</p>
            <Link
              href={'/videos'}
              className="flex items-center text-wmcolor font-semibold uppercase hover:underline"
            >
              {titlelink}
            </Link>
            <Link
              href={linkcta}
              className="hidden items-center text-wmcolor font-semibold uppercase hover:underline"
            >
              {titlelink}
            </Link>
          </div>

          {/* Button Section */}
          <div className="">
            <div
              className="hidden md:flex space-x-3"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
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
                  '  p-1 bg-wmcolor text-white hover:bg-gray-500 duration-300 delay-75',
                  currentIndex >= data?.length - 2
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
                    currentIndex >= data?.length - 2
                      ? 'opacity-20'
                      : 'text-white'
                  }
                />
              </button>
            </div>

            {/* button for mobile screen */}
            <div
              className="flex md:hidden space-x-3"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <button
                className={[
                  'lg:hidden p-1 bg-wmcolor text-white hover:bg-gray-500 duration-300 delay-75',
                  currentIndex <= 0
                    ? 'bg-opacity-35 cursor-default'
                    : 'cursor-pointer',
                ].join('')}
                onClick={goToPrevMobile}
              >
                <LeftArrow
                  width={27}
                  height={27}
                  stroke={''}
                  fill="white"
                  className={currentIndex <= 0 ? 'opacity-20' : 'text-white'}
                />
              </button>
              <button
                className={[
                  'lg:hidden p-1 bg-wmcolor text-white hover:bg-gray-500 duration-300 delay-75',
                  currentIndex >= data?.length - 1
                    ? 'bg-opacity-35 cursor-default'
                    : 'cursor-pointer ',
                ].join('')}
                onClick={goToNextMobile}
              >
                <RightArrow
                  width={27}
                  height={27}
                  stroke={''}
                  fill="white"
                  className={
                    currentIndex >= data?.length - 1
                      ? 'opacity-20'
                      : 'text-white'
                  }
                />
              </button>
            </div>
          </div>
        </section>
        {/* Modal */}
        {modalOpen && (
          <ModalTester>
            <div
              id="default-modal"
              tabIndex={-1}
              aria-hidden="true"
              className={
                !modalOpen
                  ? 'hidden'
                  : 'bg-black/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 max-h-full'
              }
            >
              <div
                className="flex justify-center items-center p-5 lg:p-4 w-full h-screen"
                onClick={() => closeModal()}
              >
                <div
                  data-aos="fade-down"
                  className="relative w-full md:w-9/12 lg:w-5/12 lg:h-2/3 bg-white  shadow"
                >
                  <div className="h-3/4">
                    <iframe
                      height="450"
                      src={data?.[modalIndex as number]?.video}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="w-full"
                    ></iframe>
                  </div>
                  <div className="h-auto bg-white p-4 md:p-5 border-t border-gray-200 rounded-b space-y-2">
                    <h3 className="text-xs lg:text-sm font-light">
                      20 Jan 2023
                    </h3>
                    <h1 className="font-semibold text-lg lg:text-xl pt-2">
                      {data?.[modalIndex as number]?.labelVideo}
                    </h1>
                    <p className="text-[#555555] font-light text-sm lg:text-base">
                      {data?.[modalIndex as number]?.subLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ModalTester>
        )}
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="relative w-10/12 lg:w-11/12 xl:w-9/12 overflow-hidden"
        >
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={sliderRef}
            className={`flex justify-start items-center transition-transform duration-700 ease-in-out transform-gpu w-full drop-shadow-2xl`}
          >
            {[...data]?.map((slide, index) => (
              <div
                onClick={() => {
                  setModalIndex(index);
                  setModalOpen(true);
                }}
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
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${slide.image})`,
                    }}
                  >
                    <div className=" w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  </div>

                  <PlayIcon
                    width={50}
                    height={50}
                    stroke="white"
                    className="absolute top-40 left-56 duration-500 p-2 rounded-full border"
                    fill="white"
                  />
                  <h1 className="absolute text-white text-xl bottom-20 font-semibold px-7">
                    {slide.label}
                  </h1>
                  <p className="absolute text-white text-sm bottom-8 line-clamp-2 pr-10 pl-7">
                    {slide.desc}
                  </p>
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
