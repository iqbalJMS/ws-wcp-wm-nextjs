'use client';
import React, { useState } from 'react';
import GrowthIcon from '@/lib/element/global/icons/growth-icon';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import Link from 'next/link';

type T_MenuGridProps = {
  title: string;
  subTitle?: string;
  listItem: Array<{
    icon?: React.ElementType;
    label: string;
    text: string;
    url?: string;
  }>;
  bgImage?: string;
  variant?: 'wm' | 'wm-private' | 'wm-prioritas';
};

export default function CE_MenuGrid({
  title,
  subTitle,
  listItem,
  bgImage,
  variant = 'wm',
}: T_MenuGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide <= listItem.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  const backgroundImg = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage}`
    : '';

  return (
    <section
      className="w-full bg-no-repeat pt-20 pb-12"
      style={{
        backgroundImage: `url(${
          backgroundImg || 'images/why-us/bg-image.jpg'
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="w-full flex flex-col items-center pb-16">
          <h1
            className={`${variant === 'wm-private' ? 'text-privatecolor' : variant === 'wm-prioritas' ? 'text-prioritycolor' : 'text-wmcolor'} font-semibold text-3xl uppercase`}
          >
            {title.toUpperCase()}
          </h1>
          {subTitle ? (
            <h2 className="text-sm font-light text-center">{subTitle}</h2>
          ) : (
            <div className="w-[3rem] h-0.5 bg-black mt-3"></div>
          )}
        </div>
        <div className="w-full overflow-hidden">
          <div
            className="w-full mx-auto h-auto md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 flex transition-all ease-in-out duration-300"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {listItem.map((item, index) => {
              const Icon = item.icon || GrowthIcon;
              return (
                <Link
                  href={item.url ?? '/'}
                  key={index}
                  className={`group w-full h-auto flex flex-none flex-col items-center justify-center hover:rounded-xl duration-300 py-10 px-6 ${
                    variant === 'wm-private'
                      ? 'hover:bg-[linear-gradient(0deg,#A39053,#D5C285)]'
                      : variant === 'wm-prioritas'
                        ? 'hover:bg-prioritycolor'
                        : 'hover:bg-wmcolor'
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`mb-6 ${
                        variant === 'wm-private'
                          ? 'group-hover:fill-black group-hover:stroke-black'
                          : variant === 'wm-prioritas'
                            ? 'group-hover:fill-black group-hover:stroke-black'
                            : 'group-hover:fill-white group-hover:stroke-white'
                      }`}
                      width={90}
                      stroke="black"
                      fill={
                        variant === 'wm-private'
                          ? '#A28F52'
                          : variant === 'wm-prioritas'
                            ? '#1B1333'
                            : '#080087'
                      }
                    />
                  )}
                  <h2
                    className={`font-bold text-base group-hover:text-white mb-2 ${
                      variant === 'wm-private'
                        ? 'text-black'
                        : variant === 'wm-prioritas'
                          ? 'text-black'
                          : 'text-black'
                    }`}
                  >
                    {item.label}
                  </h2>
                  <h2 className="text-xs font-light group-hover:text-white text-center">
                    {item.text}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden w-full flex justify-end px-10 py-3 space-x-3 ">
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
              stroke={
                variant === 'wm-private'
                  ? '#A28F52'
                  : variant === 'wm-prioritas'
                    ? '#1B1333'
                    : '#080087'
              }
              className={
                currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
              }
            />
          </button>
          <button
            className={[
              'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
              currentSlide < listItem.length - 1 - slidesToShow
                ? 'cursor-pointer '
                : 'bg-opacity-10 cursor-default',
            ].join(' ')}
            onClick={nextSlide}
          >
            <ArrowRightIcon
              width={40}
              height={40}
              stroke={
                variant === 'wm-private'
                  ? '#A28F52'
                  : variant === 'wm-prioritas'
                    ? '#1B1333'
                    : '#080087'
              }
              className={
                currentSlide === listItem?.length - 1
                  ? 'opacity-50'
                  : 'text-white text-red'
              }
            />
          </button>
        </div>
      </div>
    </section>
  );
}
