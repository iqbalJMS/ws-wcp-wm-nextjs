'use client';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import KutipIcon from '@/lib/element/global/icons/kutip-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_CarouselVariant2({
  title,
  bgImage,
  data,
}: {
  title: string;
  bgImage: string;
  data: Array<{ name: string; subtitle: string; image: string; desc: string }>;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 2 : 1;
  const slidesToScroll = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data?.length]);

  const nextSlide = () => {
    if (currentSlide <= data.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide >= data?.length) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen md:h-[70vh] relative overflow-hidden flex"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-full h-full bg-black opacity-80 absolute z-0"></div>
        <div className="w-full flex flex-col justify-center items-center z-10">
          <h1 className="text-white text-4xl font-bold pb-20">{title}</h1>
          <section className="max-w-7xl flex justify-center px-3">
            <div className="w-10/12 h-[75vh] md:w-9/12 md:h-fit flex flex-row justify-center">
              <div className="hidden basis-10 md:flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white mdmax:',
                    currentSlide === 0
                      ? 'text-opacity-10 cursor-default'
                      : 'cursor-pointer',
                  ].join(' ')}
                  onClick={prevSlide}
                >
                  <ArrowLeftIcon
                    width={40}
                    height={40}
                    stroke={'white'}
                    className={currentSlide === 0 ? 'opacity-50' : 'text-white'}
                  />
                </button>
              </div>
              <div className="overflow-hidden basis-11/12 flex justify-center px-1 md:px-0">
                <div
                  className="w-[98%] flex transition-all ease-in-out duration-300 space-x-5"
                  style={{
                    transform: `translateX(-${currentSlide * (207 / slidesToShow)}%)`,
                  }}
                >
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-full h-full flex-none flex flex-col md:flex-row items-center bg-white scroll-pb-5 px-10 md:px-0 md:space-x-3"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image}`}
                        alt="testimoni image"
                        width={2000}
                        height={2000}
                        className="w-60 h-96 object-cover object-center "
                      />
                      <div className="p-5 z-10">
                        <KutipIcon
                          className="pb-2"
                          stroke="#080087"
                          width={35}
                          height={35}
                        />
                        {item?.desc && (
                          <h2 className="pt-5 text-black text-base md:text-sm lg:text-base font-light">
                            {parseHTMLToReact(item?.desc)}
                          </h2>
                        )}
                        <h1 className="pt-8 text-lg font-bold italic text-wmcolor">
                          {item?.name}
                        </h1>
                        <h2 className="text-sm font-extralight italic text-wmcolor">
                          {item?.subtitle}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="basis-10 hidden md:flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
                    currentSlide < data.length - 1 - slidesToShow
                      ? 'cursor-pointer '
                      : 'bg-opacity-10 cursor-default',
                  ].join(' ')}
                  onClick={nextSlide}
                >
                  <ArrowRightIcon
                    width={40}
                    height={40}
                    stroke="white"
                    className={
                      currentSlide === data?.length - 1
                        ? 'opacity-50'
                        : 'text-white text-red'
                    }
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
