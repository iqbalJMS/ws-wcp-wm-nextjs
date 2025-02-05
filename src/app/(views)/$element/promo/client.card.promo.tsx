'use client';
import React, { useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import Link from 'next/link';
import noImage from '@/../../public/images/no-image.png';

export default function CE_LatestFourPromo({
  data,
  title,
  subtitle,
  link,
  variant,
}: {
  data: Array<{
    nid: number;
    image: string;
    label: string;
  }>;
  title: string;
  subtitle: string;
  link: string;
  variant: string;
}) {
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;
  const [currentSlide, setCurrentSlide] = useState(0);

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

  let colorTheme = '';
  if (variant === 'wm-private-main-navigation') {
    colorTheme = 'white';
  } else if (variant === 'wm-prioritas-main-navigation') {
    colorTheme = 'prioritycolor';
  } else {
    colorTheme = 'wmcolor';
  }
  let textColor = '';
  if (variant === 'wm-private-main-navigation') {
    textColor = 'black';
  } else {
    textColor = 'white';
  }

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center pb-20 pt-14">
        <section className="w-full flex flex-col items-center pb-16">
          <h1 className="text-[#3D3D3D] font-semibold text-3xl uppercase">
            {title}
          </h1>
          <h2 className="text-sm font-light text-center">{subtitle}</h2>
        </section>
        {/* mobile section */}
        <section className="md:hidden lg:hidden relative overflow-hidden mdmax:w-full mdmax:flex-none p-10 mdmax:p-1 justify-center">
          <div
            className="pl-16 md:pl-0 md:w-10/12 lg:w-8/12 flex -mx-5 transition-all ease-in-out duration-300 space-x-10"
            style={{
              transform: `translateX(-${currentSlide * (180 / slidesToShow)}%)`,
            }}
          >
            {data?.map((item, index) => (
              <div
                key={index}
                className="relative w-1/4 mdmax:w-11/12 h-80 lg:h-64 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute w-full h-80 lg:h-64 bg-black opacity-30 rounded-lg">
                  .
                </div>
                <h1 className="pb-4 px-5 z-50 text-white text-base font-medium">
                  {item?.label}
                </h1>
                <Link
                  href={'#'}
                  className="pb-4 px-5 z-50 hover:underline text-white flex items-center"
                >
                  lihat promo
                  <span className="pl-4">
                    <ArrowRightIcon
                      width={20}
                      height={20}
                      stroke="white"
                      fill="white"
                    />
                  </span>
                </Link>
              </div>
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
                stroke={'#4640A5'}
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
                stroke="#4640A5"
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
        <section className="w-full hidden md:flex lg:hidden justify-center">
          <div className="w-11/12 flex flex-row justify-center">
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
                  stroke={'#4640A5'}
                  className={
                    currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
                  }
                />
              </button>
            </div>
            <div className="overflow-hidden basis-full flex justify-center p-5">
              <div
                className="w-full flex -mx-5 transition-all ease-in-out duration-300 space-x-5 "
                style={{
                  transform: `translateX(-${currentSlide * (150 / slidesToShow)}%)`,
                }}
              >
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-[32%] h-72 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute w-full h-72 bg-black opacity-30 rounded-lg">
                      .
                    </div>
                    <h1 className="pb-4 px-2 z-50 text-white text-sm font-medium">
                      {item?.label}
                    </h1>
                    <Link
                      href={'#'}
                      className="pb-4 px-2 z-50 hover:underline text-white flex items-center text-sm"
                    >
                      lihat promo
                      <span className="pl-4">
                        <ArrowRightIcon
                          width={20}
                          height={20}
                          stroke="white"
                          fill="white"
                        />
                      </span>
                    </Link>
                  </div>
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
                  stroke="#4640A5"
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
        <section className="w-full hidden lg:flex justify-center">
          <div className="w-full flex justify-center ">
            <div className="w-fit h-full flex justify-center p-5">
              <div className="w-full h-full grid grid-cols-4 gap-5">
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden lg:w-60 lg:h-72 xl:w-80 xl:h-72 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? `${noImage}`})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute w-full h-full bg-black opacity-20 rounded-lg">
                      .
                    </div>
                    <h1 className="lg:pb-2 xl:pb-4 px-5 z-50 text-white text-sm font-medium">
                      {item?.label}
                    </h1>
                    <Link
                      href={`/promo-detail/${item?.nid}`}
                      className="lg:pb-3 xl:pb-8 px-5 z-50 hover:underline text-white flex items-center text-sm"
                    >
                      lihat promo
                      <span className="pl-4">
                        <ArrowRightIcon
                          width={20}
                          height={20}
                          stroke="white"
                          fill="white"
                        />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="inline-flex items-center justify-center w-full pt-5">
          <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
          <Link
            className={`bg-${colorTheme} hover:bg-gray-600 duration-300 text-$ text-${textColor} hover:text-white py-3 px-5 rounded-full uppercase font-semibold border border-black hover:border-none`}
            href={`${link}`}
          >
            lihat semua promo
          </Link>
          <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
        </section>
      </div>
    </>
  );
}
