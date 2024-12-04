'use client';
import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';

export default function CE_CardVariant2Prioritas({
  data,
  bgImage,
  title,
}: {
  data: Array<{
    icon: string;
    label: string;
    desc: string;
  }>;
  bgImage: string;
  title: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide <= data?.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };
  return (
    <>
      <div
        className="w-full h-auto flex flex-col items-center justify-center p-5 pb-10"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage})`,
          backgroundPosition: 'center',
        }}
      >
        <section className="w-full p-5 md:w-11/12 lg:w-10/12 xl:w-8/12  pb-16">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="uppercase space-y-2 pb-5 flex justify-center"
          >
            {title && (
              <h1 className=" w-fit text-2xl  xl:text-3xl font-bold text-center text-prioritycolor border-b-2 p-2 border-black">
                {parseHTMLToReact(title)}
              </h1>
            )}
          </div>
        </section>
        <section className="md:hidden w-full overflow-hidden mdmax:w-full mdmax:flex-none">
          <div
            className="w-full flex md:grid grid-cols-3 transition-all ease-in-out duration-300 md:space-x-3"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {data?.map(({ label, icon, desc }, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="group hover:bg-prioritycolor relative w-full h-60 md:h-80 px-5 overflow-hidden flex-none flex flex-col items-center justify-center hover:bg-gradient-to-b from-prioritycolor to-[#04040A] rounded-xl duration-500 transition-all ease-in-out cursor-pointer"
                >
                  <Image
                    alt={'icon-card'}
                    width={70}
                    height={70}
                    src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${icon}`}
                    color="black"
                    className="group-hover:invert group-hover:brightness-[12.90]"
                  />

                  {label && (
                    <h1 className="text-black text-lg font-medium group-hover:text-white pt-7">
                      {parseHTMLToReact(label)}
                    </h1>
                  )}
                  {desc && (
                    <h2 className="text-xs pt-2 font-normal text-center group-hover:text-white">
                      {parseHTMLToReact(desc)}
                    </h2>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <section className="hidden md:flex justify-center w-full overflow-hidden mdmax:w-full mdmax:flex-none">
          <div className="w-full lg:w-10/12 xl:w-9/12 flex md:grid grid-cols-3 transition-all ease-in-out duration-300 md:space-x-3">
            {data?.map(({ label, icon, desc }, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="group hover:bg-privatecolor relative w-full xl:w-11/12 h-60 md:h-80 px-5 overflow-hidden flex-none flex flex-col items-center justify-center hover:bg-gradient-to-b from-prioritycolor to-[#04040A] rounded-xl duration-500 transition-all ease-in-out cursor-pointer"
                >
                  <Image
                    alt={'icon-card'}
                    width={70}
                    height={70}
                    src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${icon}`}
                    color="black"
                    className="group-hover:invert group-hover:brightness-50"
                  />

                  {label && (
                    <h1 className="text-black text-lg font-bold group-hover:text-white pt-7">
                      {parseHTMLToReact(label)}
                    </h1>
                  )}
                  {desc && (
                    <h2 className="text-xs pt-2 font-normal text-center group-hover:text-white">
                      {parseHTMLToReact(desc)}
                    </h2>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <div className="md:hidden w-full flex justify-end px-1 py-3 space-x-3">
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
              stroke={'#B7A97B'}
              className={
                currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
              }
            />
          </button>
          <button
            className={[
              'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
              currentSlide < data?.length - 1 - slidesToShow
                ? 'cursor-pointer '
                : 'bg-opacity-10 cursor-default',
            ].join(' ')}
            onClick={nextSlide}
          >
            <ArrowRightIcon
              width={40}
              height={40}
              stroke="#B7A97B"
              className={
                currentSlide === data?.length - 1
                  ? 'opacity-50'
                  : 'text-white text-red'
              }
            />
          </button>
        </div>
      </div>
    </>
  );
}
