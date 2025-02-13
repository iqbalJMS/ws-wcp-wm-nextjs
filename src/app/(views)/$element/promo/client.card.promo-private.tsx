'use client';
import React, { useEffect, useState, useTransition } from 'react';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import ArrowLeftIcon from '@/lib/element/global/icons/arrow-left-icon';
import Link from 'next/link';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetPromo,
  CFN_MapToPromoPayload,
  CFN_ValidateGetPromoFields,
} from '@/app/(views)/$function/cfn.get-promo';
import { T_Promo, T_PromoRequest } from '@/api/promo/api.get-promo.type';

export default function CE_CardPromoPrivate({
  title,
  subtitle,
  promoConfig,
  variant,
  link,
}: {
  title: string;
  subtitle: string;
  promoConfig: string;
  variant: string;
  link: string;
}) {
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [pending, transiting] = useTransition();
  const [promoList, setPromoList] = useState<T_Promo>([]);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const { form, validateForm, setForm } = useForm<
    T_PromoRequest,
    T_PromoRequest
  >(
    CFN_MapToPromoPayload({
      limit: promoConfig === 'latest_seven' ? '8' : '4',
      page: '0',
    }),
    CFN_ValidateGetPromoFields
  );

  const handlePromoList = () => {
    if (pending) {
      return;
    }
    const isValid = validateForm();
    if (isValid) {
      CFN_GetPromo(transiting, form, (resp: any) => {
        const items = resp?.field_components?.[1]?.promo_data?.items;
        if (!items?.length) {
          setIsLastPage(true);
          return;
        }

        if (form.page === '0') {
          setPromoList(items);
        } else {
          setPromoList((prev) => [...prev, ...items]);

          if (items.length < form.limit) {
            setIsLastPage(true);
          }
        }
      });
    }
  };

  const handleLoadMore = () => {
    if (isFirst) {
      setForm({
        page: String(Number(form.page) + 3),
        limit: '4',
      });
      setIsFirst(false);
    } else {
      setForm({
        page: String(Number(form.page) + 1),
        limit: '4',
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide <= promoList.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  useEffect(() => {
    handlePromoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.limit, form.page]);

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
            {promoList?.map((item, index) => (
              <div
                key={index}
                className="relative w-1/4 mdmax:w-11/12 h-80 lg:h-64 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute w-full h-80 lg:h-64 bg-black opacity-30 rounded-lg">
                  .
                </div>
                <h1 className="pb-4 px-5 z-50 text-white text-base font-medium">
                  {item?.title?.[0]?.value}
                </h1>
                <Link
                  href={`/promo-detail-private/${item?.nid?.[0]?.value ?? '/404'}`}
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
                currentSlide < promoList?.length - 1 - slidesToShow
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
                  currentSlide === promoList?.length - 1
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
                {promoList?.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-[32%] h-72 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute w-full h-72 bg-black opacity-30 rounded-lg">
                      .
                    </div>
                    <h1 className="pb-4 px-2 z-50 text-white text-sm font-medium">
                      {item?.title?.[0]?.value}
                    </h1>
                    <Link
                      href={`/promo-detail-private/${item?.nid?.[0]?.value ?? '/404'}`}
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
                  currentSlide >= promoList?.length - 1 - slidesToShow
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
                    currentSlide === promoList?.length
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
                {promoList?.map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden lg:w-60 lg:h-72 xl:w-80 xl:h-72 flex-none rounded-lg flex flex-col justify-end items-start bg-center"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute w-full h-full bg-black opacity-20 rounded-lg">
                      .
                    </div>
                    <h1 className="lg:pb-2 xl:pb-4 px-5 z-50 text-white text-sm font-medium">
                      {item?.title?.[0]?.value}
                    </h1>
                    <Link
                      href={`/promo-detail-private/${item?.nid?.[0]?.value ?? '/404'}`}
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

        {!isLastPage ? (
          <section className="hidden xl:inline-flex items-center justify-center w-full pt-5">
            <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
            {promoConfig == 'latest_seven' ? (
              <button
                onClick={() => handleLoadMore()}
                className={`bg-${colorTheme} text-${textColor} hover:bg-gray-600 duration-300 text-$ hover:text-white py-3 px-5 rounded-full uppercase font-semibold border border-black hover:border-none`}
              >
                Muat Lebih Banyak
              </button>
            ) : promoConfig == null ? (
              <Link
                href={link ?? '/404'}
                className={`bg-${colorTheme} text-${textColor} hover:bg-gray-600 duration-300 text-$ hover:text-white py-3 px-5 rounded-full uppercase font-semibold border border-black hover:border-none`}
              >
                lihat semua promo
              </Link>
            ) : null}
            <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
          </section>
        ) : null}
      </div>
    </>
  );
}
