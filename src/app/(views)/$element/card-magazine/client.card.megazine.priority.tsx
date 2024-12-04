'use client';
import React from 'react';
import { useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import Link from 'next/link';
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
export default function CE_CardMegazinePriority({
  title,
  label,
  linkMagezine,
}: {
  title: string;
  label: string;
  linkMagezine: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide <= data.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  const data = [
    {
      image:
        'https://bri.co.id/documents/1045040/1397929/Terrasse%2033.jpg/7fb508ee-0f3b-f1e9-7137-aa96b8af5957/',
      label: 'E-Terrase - Edisi 33',
      text: 'E-Terrase',
      date: 'Edisi 32 - 2020',
      link: '/magazine',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1048102/Edisi%2032.jpg/4973614e-f711-e4bb-e113-aa7641c371b4/',
      label: 'Rossa, Indonesia`s Pride',
      text: 'E-Terrase',
      date: 'Edisi 32 - 2020',
      link: '/magazine',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1048095/Edisi%2031.jpg/0af346f9-9f69-f63a-c724-2bae4af50c12/',
      label: 'Happy Salma, The Happiest Happy',
      text: 'E-Terrase',
      date: 'Edisi 32 - 2020',
      link: '/magazine',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1048109/Edisi%2030%20.jpg.png/7aae6732-1cfc-1348-1648-bfd9e842f223/',
      label: 'Irwan Danny Mussry, A Time Traveler',
      text: 'E-Terrase',
      date: 'Edisi 32 - 2020',
      link: '/magazine',
    },
  ];
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <section className="w-full flex flex-col items-center pb-16">
          <h1 className="text-prioritycolor font-semibold text-3xl uppercase">
            {title}
          </h1>
          <h2 className="text-sm font-light text-center w-11/12 md:w-9/12 xl:w-3/12 pt-3 text-[#4C4C4C]">
            {parseHTMLToReact(label)}
          </h2>
          <Link
            href={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${linkMagezine}`}
          />
        </section>

        {/* mobile section */}
        <section className="md:hidden lg:hidden relative overflow-hidden mdmax:w-full mdmax:flex-none p-10 mdmax:p-1 justify-center">
          <div
            className="md:w-10/12 lg:w-8/12 flex justify-start transition-all ease-in-out duration-300"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {data?.map((item, index) => (
              <Link
                href={item?.link}
                target="_blank"
                key={index}
                className="relative w-full h-[500px]  flex-none rounded-lg flex flex-col justify-center items-center bg-center overflow-hidden p-3"
              >
                <div className="w-72 h-[480px] flex-none flex flex-col justify-end items-center relative overflow-hidden ">
                  <div
                    className="w-72 h-96 flex-none flex flex-col justify-end items-start hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                    style={{
                      backgroundImage: `url(${item?.image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div className="w-full bg-white h-20 mt-3 relative overflow-hidden">
                    <div className="">
                      <span className="text-xs pr-2 border-r border-black font-light">
                        {item?.text}
                      </span>
                      <span className="pl-2 text-xs font-light">
                        {item?.date}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h1 className="group-hover:underline text-prioritycolor text-lg font-extrabold">
                        {item?.label}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden w-full flex justify-end px-10 py-3 space-x-3 ">
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
                stroke={'#B9AB7D'}
                className={
                  currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
                }
              />
            </button>
            <button
              className={[
                'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
                currentSlide <= data?.length - 1 - slidesToShow
                  ? 'cursor-pointer'
                  : 'bg-opacity-10 cursor-default',
              ].join(' ')}
              onClick={nextSlide}
            >
              <ArrowRightIcon
                width={40}
                height={40}
                stroke="#B9AB7D"
                className={
                  currentSlide === data?.length - 1
                    ? 'opacity-50'
                    : 'text-white text-red'
                }
              />
            </button>
          </div>
        </section>

        {/* Tab Section */}
        <section className="w-full hidden md:flex lg:hidden justify-center px-5">
          <div className="w-full h-[50vh] flex flex-row justify-center">
            <div className="basis-20 flex justify-center items-center">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white ',
                  currentSlide === 0
                    ? 'text-opacity-10 cursor-default'
                    : 'cursor-pointer',
                ].join(' ')}
                onClick={prevSlide}
              >
                <ArrowLeftIcon
                  width={40}
                  height={40}
                  stroke={'#B9AB7D'}
                  className={
                    currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
                  }
                />
              </button>
            </div>
            <div className="overflow-hidden basis-full flex justify-center ">
              <div
                className="w-full flex justify-start items-center space-x-5 transition-all ease-in-out duration-300 "
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                }}
              >
                {data?.map((item, index) => (
                  <Link
                    href={item?.link}
                    target="_blank"
                    key={index}
                    className="group relative overflow-hidden w-[48%] h-[450px] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                  >
                    <div className="min-w-80 h-[450px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                      <div
                        className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                        style={{
                          backgroundImage: `url(${item?.image})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-full bg-white h-20 mt-3 relative overflow-hidden">
                        <div className="">
                          <span className="text-xs pr-2 border-r border-black font-light">
                            {item?.text}
                          </span>
                          <span className="pl-2 text-xs font-light">
                            {item?.date}
                          </span>
                        </div>
                        <div className="pt-2">
                          <h1 className="group-hover:underline text-prioritycolor text-lg font-extrabold">
                            {item?.label}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="basis-20 flex justify-center items-center">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
                  currentSlide >= data?.length - 1 - slidesToShow
                    ? 'cursor-default '
                    : 'bg-opacity-10 cursor-pointer',
                ].join(' ')}
                onClick={nextSlide}
              >
                <ArrowRightIcon
                  width={40}
                  height={40}
                  stroke="#B9AB7D"
                  className={
                    currentSlide === data?.length
                      ? 'opacity-50'
                      : 'text-white text-red'
                  }
                />
              </button>
            </div>
          </div>
        </section>

        {/* Web Section */}
        <section className="hidden lg:flex w-full h-[60vh] justify-center items-center ">
          <div className="w-11/12 h-full flex justify-center ">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-full flex justify-center space-x-4 ">
                {data?.map((item, index) => (
                  <Link
                    href={item?.link}
                    target="_blank"
                    key={index}
                    className="group overflow-hidden w-96 xl:w-80 h-[92%]"
                  >
                    <div
                      className="w-72 h-[70%] xl:w-80 xl:h-[85%] flex-none flex flex-col justify-end items-start group-hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                      style={{
                        backgroundImage: `url(${item?.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div className="w-full bg-white h-20 pt-3 relative overflow-hidden">
                      <div className="">
                        <span className="text-xs pr-2 border-r border-black font-light">
                          {item?.text}
                        </span>
                        <span className="pl-2 text-xs font-light">
                          {item?.date}
                        </span>
                      </div>
                      <div className="pt-2">
                        <h1 className="group-hover:underline text-prioritycolor text-sm xl:text-base font-extrabold">
                          {item?.label}
                        </h1>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="inline-flex items-center justify-center w-full pt-5">
          <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
          <button className=" hover:bg-gray-600 duration-300 text-[#404041] py-3 px-5 rounded-full uppercase font-semibold border border-gray-500 hover:text-white">
            lihat semua e-magazine
          </button>
          <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
        </section>
      </div>
    </>
  );
}
