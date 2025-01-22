'use client';

import useScrollActive from '@/lib/hook/useScroll';
import { T_ResponseGetTopMenuNavbar } from '@/api/navbar-menu/top-navbar/api.get-top-menu-navbar.type';
import { T_ResponseGetMenuItemNavbar } from '@/api/navbar-menu/menu-items/api.get-menu-items-navbar.type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Link from 'next/link';
// import { Tabs } from '@/lib/element/global/tabs';
import { CloseIcon } from '@/lib/element/global/icons/close-icon';
import Image from 'next/image';
import ChevronDown from '@/lib/element/global/icons/chevron-button-navbar';
import { T_ResponseGetMainMenuNavbar } from '@/api/navbar-menu/main-navbar/private-navbar/api.get-main-menu-navbar.type';
import { T_ResponGetHeaderLogo } from '@/api/header-logo/api.get-header-logo.type';
import { Search } from '@/lib/element/global/global.search';

const LIST_LANGUAGES = ['ID', 'EN'];

export function LoginButton({
  menuItems,
}: {
  menuItems: T_ResponseGetMenuItemNavbar;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const isScrolling = useScrollActive();

  useOnClickOutside(elementRef, () => setActive(false));

  return (
    <div
      ref={elementRef}
      className={[
        `${isScrolling ? 'bg-black' : 'bg-white'}`,
        `${isScrolling ? 'hover:border-blue-800 border-2' : 'hover:bg-bluedark01'}`,
        `text-[#191056] px-6 pr-4 py-2 mdmax:py-1 mdmax:px-4 mdmax:pr-2 rounded-full inline-flex items-center cursor-pointer relative group hover:text-white duration-300`,
      ].join(' ')}
      onClick={() => setActive(!active)}
    >
      <div
        className={[
          `${isScrolling ? 'text-white' : 'text-bluedark01'}`,
          'uppercase font-semibold group-hover:text-white',
        ].join(' ')}
      >
        Login
      </div>
      <div className="pl-2">
        <ChevronDown
          className={[
            `${isScrolling ? 'hidden' : ''}`,
            `group-hover:hidden`,
          ].join(' ')}
          stroke="#141333"
          width={30}
          height={30}
        />
        <ChevronDown
          className={[
            `${isScrolling ? 'group-hover:hidden' : ''}`,
            `hidden group-hover:flex`,
          ].join(' ')}
          stroke="white"
          width={30}
          height={30}
        />
        <ChevronDown
          className={[`${isScrolling ? '' : 'hidden'}`, ,].join(' ')}
          stroke="white"
          width={30}
          height={30}
        />
      </div>
      <div
        className={[
          'absolute w-[20rem] right-0  pt-5',
          'transition-all ease-in-out duration-200',
          active ? 'top-full visible opacity-100' : 'top-0 invisible opacity-0',
        ].join(' ')}
      >
        <div
          className={`
          absolute top-[1%] right-4 rotate-180
          border-l-[0.7rem] border-r-[0.7rem] border-t-[0.7rem] 
          border-l-transparent border-r-transparent border-white
          h-5 w-5`}
        />
        {menuItems?.map((loginItem, index) => {
          return (
            <div
              key={index}
              className="w-full bg-white mb-2 px-5 py-4 rounded-3xl"
            >
              <Link href={loginItem?.uri} target="_blank">
                <div
                  className={`flex items-center space-x-3 ${loginItem?.field_theme_color?.[0]?.value == 'orange' ? 'text-green-300' : 'text-orange-400'}`}
                >
                  <div className="mr-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${loginItem?.icon}`}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <h1>{loginItem.title}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HomeHeader({
  headerTop,
  headerBottom,
  variant = 'transparent',
  itemLogin,
  headerLogo,
}: {
  headerTop: T_ResponseGetTopMenuNavbar;
  headerBottom: T_ResponseGetMainMenuNavbar;
  variant: 'transparent' | 'no-transparent';
  itemLogin: T_ResponseGetMenuItemNavbar;
  headerLogo?: T_ResponGetHeaderLogo;
}) {
  const pathname = usePathname();
  const currentLanguage = useSearchParams().get('lang');
  const router = useRouter();
  const isScrolling = useScrollActive();

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const onSwitchLanguages = (language: string) => {
    if (currentLanguage !== language) {
      const queryParams = new URLSearchParams({
        lang: language,
      }).toString();

      router.push(`${pathname}?${queryParams}`);
      router.refresh();
    }
  };

  return (
    <>
      <header
        className={[
          `${isScrolling ? 'bg-white shadow-md' : ''}`,
          'z-50 fixed w-full ',
          `${variant === 'transparent' ? '' : 'bg-black'}`,
        ].join(' ')}
      >
        <div className="container hidden mdmax:block py-4">
          <div className="flex items-center justify-between ">
            <div className="w-[5rem]">
              <Image
                alt="logo-bri"
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                width={128}
                height={53}
                className={`${isScrolling ? '' : ''} `}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div>
                  <LoginButton menuItems={itemLogin} />
                </div>
                <div onClick={() => setActiveMenu(true)}>
                  <svg
                    className="w-7 h-7"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="white"
                      d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={[
            'container py-5 pb-2 mdmax:p-0 mdmax:fixed mdmax:w-full mdmax:h-screen mdmax:top-0 mdmax:z-50 mdmax:ease-in-out mdmax:transition-all mdmax:duration-300 flex justify-center',
            activeMenu
              ? 'mdmax:visible mdmax:opacity-100'
              : 'mdmax:invisible mdmax:opacity-0',
          ].join(' ')}
        >
          <div
            onClick={() => setActiveMenu(false)}
            className="mdmax:block hidden bg-black bg-opacity-80 absolute top-0 left-0 w-full h-screen"
          ></div>
          <div className="w-[85%] mdmax:relative mdmax:z-20 mdmax:flex mdmax:flex-col-reverse mdmax:h-full mdmax:items-start mdmax:justify-end mdmax:p-5 mdmax:pt-10">
            <div
              className="absolute top-7 right-7 mdmax:top-2 mdmax:right-2 hidden mdmax:block "
              onClick={() => setActiveMenu(false)}
            >
              <CloseIcon className="text-blue-02 cursor-pointer" stroke={''} />
            </div>
            <div
              className={[
                `flex items-center mdmax:items-start  mdmax:flex-col gap-5 mdmax:gap-0 justify-end mb-5`,
                `${isScrolling ? 'hidden mdmax:flex' : ''}`,
              ].join(' ')}
            >
              <div className="flex mdmax:flex-col items-center mdmax:items-start gap-8 mdmax:gap-0">
                {headerTop?.map((header, index) => {
                  return (
                    <div key={index} className="mdmax:mb-2">
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() =>
                          header.title.toLowerCase() === 'cari'
                            ? setActiveSearch(true)
                            : false
                        }
                      >
                        {header?.icon && (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${header?.icon}`}
                            alt={`icon-${header.alt}`}
                            width={500}
                            height={500}
                            className="w-5 h-5 mr-2 filter brightness-0 invert  bg-red"
                          />
                        )}
                        <Link
                          className={[
                            `text-[15px] font-light`,
                            `${variant === 'transparent' ? 'text-white mdmax:text-black hover:underline' : ''}`,
                          ].join(' ')}
                          href={`/${header?.alias}`}
                        >
                          {header.title}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className={[
                  `${variant === 'transparent' ? 'text-white ' : ''}`,
                  'mdmax:hidden',
                ].join(' ')}
              >
                |
              </div>
              <div className={['relative z-50 group text-white'].join('')}>
                <div className="flex cursor-pointer items-center gap-2">
                  <div>
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="m57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8l57.9 16.5c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5.3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3c-92.8 0-171.5 60.9-198.2 145M464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"
                      />
                    </svg>
                  </div>
                  <div className="uppercase font-light">
                    {currentLanguage ?? 'id'}
                  </div>
                </div>
                <div className="absolute z-50 right-0 top-full bg-white p-2 shadow-md rounded-md hidden group-hover:block">
                  {LIST_LANGUAGES.map((label) => (
                    <button
                      key={label}
                      onClick={() => onSwitchLanguages(label.toLowerCase())}
                      className={[
                        `text-sm p-1 px-2 rounded-md  w-[6rem]`,
                        `${variant === 'transparent' ? 'text-black mdmax:text-black' : ''}`,
                        `${
                          (currentLanguage ?? 'id')?.includes(
                            label.toLowerCase()
                          )
                            ? 'border border-bluedark01'
                            : ''
                        }`,
                      ].join(' ')}
                    >
                      {label === 'ID' ? 'INDONESIA' : 'ENGLISH'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between mdmax:border-b mdmax:border-black mdmax:w-full mdmax:pb-5 mdmax:mb-5 ">
              <Link className="flex items-center space-x-3" href={'/'}>
                <Image
                  alt="logo-bri"
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                  width={150}
                  height={60}
                  className={`${isScrolling ? '' : 'filter brightness-0 invert'} `}
                />
              </Link>
              <div className="mdmax:w-full">
                <div className="flex mdmax:flex-col mdmax:items-start items-center gap-10 mdmax:gap-0 ">
                  {headerBottom?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="pb-2 mdmax:pb-0 group border-b-4 border-transparent hover:border-blue-01 "
                      >
                        <Link
                          href={`/${item?.alias}`}
                          className={[
                            `text-sm tracking-wide font-normal cursor-pointer uppercase relative `,
                            `${isScrolling ? 'text-black' : variant === 'transparent' ? 'text-white mdmax:text-black' : ''}`,
                          ].join(' ')}
                        >
                          {item?.title}
                          {item?.below?.length > 0 && (
                            <div
                              className={[
                                `invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-100`,
                                `absolute top-[210%] left-1/2 transform -translate-x-1/2 rotate-180`,
                                `border-l-[0.7rem] border-r-[0.7rem] border-t-[0.7rem] `,
                                `border-l-transparent border-r-transparent border-white`,
                                `h-5 w-5`,
                              ].join(' ')}
                            ></div>
                          )}
                        </Link>
                        {item?.below?.length > 0 && (
                          <div className="absolute left-0 w-full invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 pt-10">
                            <div className="bg-white">
                              <div className="container py-5">
                                <div className="text-[1.5rem] mb-4 font-medium">
                                  {item?.title}
                                </div>
                                <div className="flex">
                                  {item?.below?.map((subItem, subIndex) => {
                                    return (
                                      <div key={subIndex} className="mr-40">
                                        <div className="text-red-01 font-semibold mb-2">
                                          {subItem?.title}
                                        </div>
                                        <div>
                                          {subItem?.below?.map(
                                            (item, itemIndex) => {
                                              return (
                                                <div key={itemIndex}>
                                                  <div className="flex items-center justify-between">
                                                    {item.title}
                                                    <Image
                                                      src={`/images/headers/arrow-right.svg`}
                                                      width={18}
                                                      height={18}
                                                      alt={`icon-arrow-right`}
                                                      className="w-3 h-3 ml-4"
                                                    />
                                                  </div>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="pb-2 border-b-4 border-transparent mdmax:hidden">
                    <LoginButton menuItems={itemLogin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Search active={activeSearch} setActive={setActiveSearch} />
      </header>
    </>
  );
}
