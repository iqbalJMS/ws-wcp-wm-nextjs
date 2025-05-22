'use client';
import React, { useEffect, useRef, useTransition, useState } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import Link from 'next/link';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

const getSlideToShow = (screenWidth: number) => {
  if (!screenWidth) {
    return 3;
  } else {
    return 2;
  }
};
export default function CE_AllMagazine({
  cardData,
  variant,
  display,
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
}) {
  const [pending, transiting] = useTransition();
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [magazineList, setmagazineList] = useState<T_Magazine>([]);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;
  const { form, validateForm, setForm } = useForm<
    T_RequestMagazine,
    T_RequestMagazine
  >(
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
        const items = resp?.rows;
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
  const handleLoadMore = () => {
    if (isFirst) {
      setForm({
        page: String(Number(form.page) + 1),
      });
      setIsFirst(false);
    } else {
      setForm({
        page: String(Number(form.page) + 1),
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

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

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
    labelColor = 'white';
  }

  return (
    <>
      <div
        ref={ref}
        className="w-full h-auto flex flex-col items-center justify-center"
      >
        {/* mobile section */}
        <div className="md:hidden lg:hidden relative overflow-hidden mdmax:w-full mdmax:flex-none p-10 mdmax:p-1 justify-center">
          <div
            className="md:w-10/12 lg:w-8/12 flex justify-start transition-all ease-in-out duration-300"
            style={{
              transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
            }}
          >
            {magazineList?.map((item, index) => (
              <Link
                data-aos="fade-up"
                data-aos-duration="500"
                href={
                  variant == 'wm-private-main-navigation'
                    ? `/magazine-detail-private/${item?.nid?.[0]?.value ?? '/404'}`
                    : `/magazine-detail-prioritas/${item?.nid?.[0]?.value ?? '/404'}`
                }
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="relative w-full h-[500px]  flex-none rounded-lg flex flex-col justify-center items-center bg-center overflow-hidden p-3"
              >
                <div className="w-72 h-[480px] flex-none flex flex-col justify-end items-center relative overflow-hidden ">
                  <div
                    className="w-72 h-96 flex-none flex flex-col justify-end items-start hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div
                    className={`w-full bg-black h-32 p-3 pb-5 px-5 relative overflow-hidden rounded-b-lg`}
                  >
                    <div className="">
                      <span
                        className={`group-hover:underline text-${labelColor} text-sm xl:text-base font-extrabold line-clamp-1`}
                      >
                        {item?.title?.[0]?.value}
                      </span>
                    </div>
                    <div className="pt-2 ">
                      <h1
                        className={`text-${labelColor} text-xs pr-2 font-light`}
                      >
                        {item?.field_text?.[0]?.value}
                      </h1>
                    </div>
                    <Link
                      href={
                        variant == 'wm-private-main-navigation'
                          ? `/magazine-detail-private/${item?.nid?.[0]?.value ?? '/404'}`
                          : `/magazine-detail-prioritas/${item?.nid?.[0]?.value ?? '/404'}`
                      }
                      className="group text-white uppercase text-sm font-bold flex items-center hover:underline duration-200"
                    >
                      selengkapnya
                      <span>
                        <ArrowRightIcon
                          className="pl-2 group-hover:translate-x-2 duration-200"
                          width={30}
                          height={30}
                          stroke="#ffffff"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="md:hidden w-full flex justify-end px-10 py-3 space-x-3 "
          >
            <button
              className={[
                'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white mdmax:',
                currentSlide === 0
                  ? 'text-opacity-10 cursor-default'
                  : 'cursor-pointer',
              ].join(' ')}
              onClick={() => {
                prevSlide();
                handleLoadMore();
              }}
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
              onClick={() => {
                nextSlide();
                handleLoadMore();
              }}
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
        </div>

        {/* Tab Section */}
        <div className="w-full hidden md:flex lg:hidden justify-center px-5">
          <div className="w-full h-[50vh] flex flex-row justify-center">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="basis-20 flex justify-center items-center"
            >
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white ',
                  currentSlide === 0
                    ? 'text-opacity-10 cursor-default'
                    : 'cursor-pointer',
                ].join(' ')}
                onClick={() => {
                  prevSlide();
                  handleLoadMore();
                }}
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
                    data-aos="fade-up"
                    data-aos-duration="500"
                    href={
                      variant == 'wm-private-main-navigation'
                        ? `/magazine-detail-private/${item?.nid?.[0]?.value ?? '/404'}`
                        : `/magazine-detail-prioritas/${item?.nid?.[0]?.value ?? '/404'}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="group relative overflow-hidden w-[48%] h-[450px] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                  >
                    <div className="min-w-80 h-[450px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                      <div
                        className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                        style={{
                          backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div
                        className={`w-full bg-black h-32 p-3 pb-5 px-5 relative overflow-hidden rounded-b-lg`}
                      >
                        <div className="">
                          <span
                            className={`group-hover:underline text-${labelColor} text-sm xl:text-base font-extrabold line-clamp-1`}
                          >
                            {item?.title?.[0]?.value}
                          </span>
                        </div>
                        <div className="pt-2 pb-2">
                          <h1
                            className={`text-${labelColor} text-sm pr-2 font-light`}
                          >
                            {item?.field_text?.[0]?.value}
                          </h1>
                        </div>
                        <Link
                          href={`/magazine-detail/${item?.nid?.[0]?.value ?? '/404'}`}
                          className="group text-white uppercase text-sm font-bold flex items-center hover:underline duration-200"
                        >
                          selengkapnya{' '}
                          <span>
                            <ArrowRightIcon
                              className="pl-2 group-hover:translate-x-2 duration-200"
                              width={30}
                              height={30}
                              stroke="#ffffff"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="basis-20 flex justify-center items-center"
            >
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white',
                  currentSlide >= magazineList?.length - 1 - slidesToShow
                    ? 'cursor-default '
                    : 'bg-opacity-10 cursor-pointer',
                ].join(' ')}
                onClick={() => {
                  nextSlide();
                  handleLoadMore();
                }}
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
        </div>

        {/* Web Section */}
        <div className="hidden lg:flex w-full h-full justify-center items-center ">
          <div className="w-full h-full flex justify-center ">
            <div className="w-fit h-full flex justify-center ">
              <div className="w-full h-full grid grid-cols-4 gap-5">
                {magazineList?.map((item, index) => (
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="group overflow-hidden w-96 lg:w-60 xl:w-72 2xl:w-80 h-[70vh]"
                    href={
                      variant === 'wm-private-main-navigation'
                        ? `/magazine-detail-private/${item?.nid?.[0]?.value ?? '/404'}`
                        : `/magazine-detail-prioritas/${item?.nid?.[0]?.value ?? '/404'}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <div
                      className="w-72 h-[70%] xl:w-80 xl:h-[70%] flex-none flex flex-col justify-end items-start group-hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                      }}
                    ></div>
                    <div
                      className={`w-full bg-black h-32 p-3 pb-5 px-5 relative overflow-hidden rounded-b-lg`}
                    >
                      <div className="">
                        <span
                          className={`group-hover:underline text-${labelColor} text-sm xl:text-base font-extrabold line-clamp-2`}
                        >
                          {item?.title?.[0]?.value}
                        </span>
                      </div>
                      <div className="pt-2 pb-2">
                        <h1
                          className={`text-${labelColor} text-sm pr-2 font-light`}
                        >
                          {item?.field_text?.[0]?.value}
                        </h1>
                      </div>
                      <Link
                        href={
                          variant === 'wm-private-main-navigation'
                            ? `/magazine-detail-private/${item?.nid?.[0]?.value ?? '/404'}`
                            : `/magazine-detail-prioritas/${item?.nid?.[0]?.value ?? '/404'}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-white uppercase text-sm font-bold flex items-center hover:underline duration-200"
                      >
                        selengkapnya{' '}
                        <span>
                          <ArrowRightIcon
                            className="pl-2 group-hover:translate-x-2 duration-200"
                            width={30}
                            height={30}
                            stroke="#ffffff"
                          />
                        </span>
                      </Link>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {!isLastPage ? (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="hidden lg:inline-flex items-center justify-center w-full pt-5"
          >
            <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
            <button
              onClick={() => handleLoadMore()}
              className={`bg-${colorTheme} text-${textColor} hover:bg-gray-600 duration-300 text-[#404041] py-3 px-5 rounded-full uppercase font-semibold border border-gray-500 hover:text-white`}
            >
              Muat Lebih Banyak
            </button>
            <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
          </div>
        ) : null}
      </div>
    </>
  );
}
