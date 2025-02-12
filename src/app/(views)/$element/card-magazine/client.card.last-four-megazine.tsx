'use client';
import React, { useEffect, useRef, useTransition, useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'motion/react';
import {
  T_Magazine,
  T_RequestMagazine,
} from '@/api/e-magazine/api.get-e-magazine.type';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetMagazine,
  CFN_MapToMagazinePayload,
  CFN_ValidateGetMagazineFields,
} from '@/app/(views)/$function/cfn.get-magazine';
import { BREADCRUMB_KEY } from '@/app/(views)/$constant/variables';
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
export default function CE_LastFourMagazine({
  cardData,
  variant,
  display,
  heading,
  subHeading,
}: {
  cardData: Array<{
    title: string;
    subtitle: string;
    image: string;
    date: string;
    category: string;
    link: string;
  }>;
  display: string;
  variant: string;
  heading: string;
  subHeading: string;
}) {
  const [pending, transiting] = useTransition();
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [magazineList, setmagazineList] = useState<T_Magazine>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;

  const generetBreadcrumb = (title: string) => {
    sessionStorage.setItem(
      BREADCRUMB_KEY,
      JSON.stringify([{ title: title, url: '#' }])
    );
  };

  const { form, validateForm } = useForm<T_RequestMagazine, T_RequestMagazine>(
    CFN_MapToMagazinePayload({
      page: '0',
    }),
    CFN_ValidateGetMagazineFields
  );

  const handleMagazineList = () => {
    if (pending) {
      return;
    }
    const isValid = validateForm();
    if (isValid) {
      CFN_GetMagazine(transiting, form, display, (resp: any) => {
        const items = resp;
        if (!items?.length) {
          setIsLastPage(true);
          return;
        }

        if (form.page === '0') {
          setmagazineList(items);
        } else {
          setmagazineList((prev) => [...prev, ...items]);

          if (items.length < form.page) {
            setIsLastPage(true);
          }
        }
      });
    }
  };

  useEffect(() => {
    handleMagazineList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.page]);

  const nextSlide = () => {
    if (currentSlide <= magazineList.length - slidesToShow) {
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

  let labelColor = '';
  if (variant === 'wm-private-main-navigation') {
    labelColor = 'privatecolor';
  } else {
    labelColor = 'prioritycolor';
  }

  return (
    <>
      <div
        ref={ref}
        className="w-full h-auto flex flex-col items-center justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full flex flex-col items-center pb-16"
        >
          <h1 className={`text-${labelColor} font-semibold text-3xl uppercase`}>
            {heading}
          </h1>
          <h2 className="text-sm font-light text-center w-11/12 md:w-9/12 xl:w-3/12 pt-3 text-[#4C4C4C]">
            {parseHTMLToReact(subHeading)}
          </h2>
          <Link href={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${''}`} />
        </motion.div>

        {/* mobile section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:hidden lg:hidden relative overflow-hidden mdmax:w-full mdmax:flex-none p-10 mdmax:p-1 justify-center"
        >
          <div
            className="md:w-10/12 lg:w-8/12 flex justify-start transition-all ease-in-out duration-300"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {magazineList?.map((item, index) => (
              <Link
                href={`/magazine-detail/${item?.nid?.[0]?.value ?? '/404'}`}
                target="_blank"
                key={index}
                className="relative w-full h-[500px]  flex-none rounded-lg flex flex-col justify-center items-center bg-center overflow-hidden p-3"
              >
                <div className="w-72 h-[480px] flex-none flex flex-col justify-end items-center relative overflow-hidden ">
                  <div
                    className="w-72 h-96 flex-none flex flex-col justify-end items-start hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div className="w-full bg-white h-20 mt-3 relative overflow-hidden">
                    <div className="">
                      <span className="text-xs pr-2 border-r border-black font-light">
                        {item?.title?.[0]?.value}
                      </span>
                      <span className="pl-2 text-xs font-light">
                        {item?.title?.[0]?.value}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h1
                        className={`group-hover:underline text-${labelColor} text-lg font-extrabold`}
                      >
                        {item?.field_text?.[0]?.value}
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
                currentSlide <= cardData?.length - 1 - slidesToShow
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
                  currentSlide === cardData?.length - 1
                    ? 'opacity-50'
                    : 'text-white text-red'
                }
              />
            </button>
          </div>
        </motion.div>

        {/* Tab Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full hidden md:flex lg:hidden justify-center px-5"
        >
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
                {magazineList?.map((item, index) => (
                  <Link
                    href={`/magazine-detail/${item?.nid?.[0]?.value ?? '/404'}`}
                    target="_blank"
                    key={index}
                    className="group relative overflow-hidden w-[48%] h-[450px] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                  >
                    <div className="min-w-80 h-[450px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                      <div
                        className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                        style={{
                          backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-full bg-white h-20 mt-3 relative overflow-hidden">
                        <div className="">
                          <span className="text-xs pr-2 border-r border-black font-light">
                            {item?.title?.[0]?.value}
                          </span>
                          <span className="pl-2 text-xs font-light">
                            {item?.created?.[0]?.value}
                          </span>
                        </div>
                        <div className="pt-2">
                          <h1
                            className={`group-hover:underline text-${labelColor} text-lg font-extrabold`}
                          >
                            {item?.field_text?.[0]?.value}
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
                  currentSlide >= magazineList?.length - 1 - slidesToShow
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
                    currentSlide === magazineList?.length
                      ? 'opacity-50'
                      : 'text-white text-red'
                  }
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Web Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex w-full h-[60vh] justify-center items-center "
        >
          <div className="w-11/12 h-full flex justify-center ">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-full flex justify-center space-x-4 ">
                {magazineList?.map((item, index) => (
                  <Link
                    href={`/magazine-detail/${item?.nid?.[0]?.value ?? '/404'}`}
                    target="_blank"
                    key={index}
                    className="group overflow-hidden w-96 xl:w-80 h-[92%]"
                  >
                    <div
                      className="w-72 h-[70%] xl:w-80 xl:h-[85%] flex-none flex flex-col justify-end items-start group-hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div className="w-full bg-white h-20 pt-3 relative overflow-hidden">
                      <div className="">
                        <span className="text-xs pr-2 border-r border-black font-light">
                          {item?.title?.[0]?.value}
                        </span>
                        <span className="pl-2 text-xs font-light">
                          {item?.title?.[0]?.value}
                        </span>
                      </div>
                      <div className="pt-2">
                        <h1
                          className={`group-hover:underline text-${labelColor} text-sm xl:text-base font-extrabold`}
                        >
                          {item?.field_text?.[0]?.value}
                        </h1>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {!isLastPage ? (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="inline-flex items-center justify-center w-full pt-5"
          >
            <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
            <Link
              onClick={() => generetBreadcrumb(heading ?? '')}
              href={
                variant == 'wm-private-main-navigation'
                  ? '/private-magazine'
                  : '/prioritas-magazine'
              }
              className={`bg-${colorTheme} text-${textColor} hover:bg-gray-600 duration-300 text-[#404041] text-center text-xs lg:text-base py-2 px-2 lg:py-3 lg:px-5 rounded-full uppercase font-semibold border border-gray-500 hover:text-white`}
            >
              lihat semua e-magazine
            </Link>
            <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
          </motion.div>
        ) : null}
      </div>
    </>
  );
}
