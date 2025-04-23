'use client';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useInView, useAnimation } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant5({
  dataCard,
  label,
  sublabel,
}: {
  dataCard: Array<{
    image: string;
    title: string;
    linkCta: string;
  }>;
  label: string;
  sublabel: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide <= dataCard?.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full h-auto flex justify-center py-10">
        <div className="w-full p-5 md:w-11/12 lg:w-10/12 xl:w-full 2xl:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:content-center xl:px-16 2xl:px-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="pb-10 pr-10 lg:pr-0 w-96 md:flex flex-col justify-center "
          >
            {label && (
              <h1 className="pb-3 text-3xl font-bold uppercase ">
                {parseHTMLToReact(label)}
              </h1>
            )}
            {sublabel && (
              <h2 className="text-[#826B64] font-normal text-sm lg:text-base pr-0 md:pr-16">
                {parseHTMLToReact(sublabel)}
              </h2>
            )}
          </div>
          <div className="w-full overflow-hidden mdmax:w-full mdmax:flex-none">
            <div
              className="w-full flex transition-all ease-in-out duration-300 md:space-x-7"
              style={{
                transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
              }}
            >
              {dataCard?.map((item, index) => (
                <Link
                  data-aos="fade-up"
                  href={item?.linkCta ?? '/404'}
                  key={index}
                  className="bg-blue-400 relative w-full h-60 md:h-80 overflow-hidden cursor-pointer flex-none md:flex-1 "
                >
                  <div
                    className="w-full h-96 flex items-end justify-between bg-no-repeat bg-cover hover:scale-125 bg-center transition-all ease-in-out transform-gpu delay-75 duration-300"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''})`,
                    }}
                  >
                    <div className="w-full h-full bg-black opacity-40">.</div>
                  </div>
                  <button className="text-white text-lg font-medium absolute left-5 md:left-2 bottom-5 md:bottom-10 xl:bottom-5">
                    {item?.title}
                  </button>
                  <ArrowRightIcon
                    className="flex md:hidden xl:flex absolute right-5 md:right-2 lg:right-10 bottom-5"
                    width={25}
                    fill="white"
                    stroke="white"
                  />
                  <ArrowRightIcon
                    className="hidden md:flex xl:hidden absolute right-5 md:left-3 bottom-3"
                    width={25}
                    fill="white"
                    stroke="white"
                  />
                </Link>
              ))}
            </div>
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
                  stroke={'#4640A5'}
                  className={
                    currentSlide === 0 ? 'opacity-50' : 'text-white text-red'
                  }
                />
              </button>
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
                  currentSlide < dataCard?.length - 1 - slidesToShow
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
                    currentSlide === dataCard?.length - 1
                      ? 'opacity-50'
                      : 'text-white text-red'
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
