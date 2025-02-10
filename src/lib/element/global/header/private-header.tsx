'use client';

import useScrollActive from '@/lib/hook/useScroll';
import { T_ResponseGetTopMenuNavbar } from '@/api/navbar-menu/top-navbar/api.get-top-menu-navbar.type';
import { T_ResponseGetMenuItemNavbar } from '@/api/navbar-menu/menu-items/api.get-menu-items-navbar.type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Link from 'next/link';
import { CloseIcon } from '@/lib/element/global/icons/close-icon';
import ChevronDown from '@/lib/element/global/icons/chevron-button-navbar';
import {
  T_PrivateItems,
  T_ResponseGetPrivateMenuNavbar,
} from '@/api/navbar-menu/main-navbar/private-navbar/api.get-private-menu-navbar.type';
import { T_ResponGetHeaderLogo } from '@/api/header-logo/api.get-header-logo.type';
import { T_ResponGetHeaderLogoPrivate } from '@/api/header-logo/header-private-logo/api.get-header-logo.private.type';
import Image from 'next/image';
import { Search } from '@/lib/element/global/global.search';
import { motion } from 'framer-motion';

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
        `${isScrolling ? 'hover:border-privatecolor border-2' : 'hover:bg-privatecolor'}`,
        `text-[#191056] lg:px-6 lg:pr-4 lg:py-2 py-1 px-3 pr-2 rounded-full inline-flex items-center cursor-pointer relative group hover:text-white duration-300`,
      ].join(' ')}
      onClick={() => setActive(!active)}
    >
      <div
        className={[
          `${isScrolling ? 'text-white text-sm lg:text-base' : 'text-privatecolor text-sm lg:text-base'}`,
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
          stroke="#A29679"
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

                  <div className="">{loginItem.title}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PrivateHeader({
  headerTop,
  headerBottom,
  variant = 'transparent',
  itemLogin,
  headerLogo,
  privateLogo,
}: {
  headerTop: T_ResponseGetTopMenuNavbar;
  headerBottom: T_ResponseGetPrivateMenuNavbar;
  variant: 'transparent' | 'no-transparent';
  itemLogin: T_ResponseGetMenuItemNavbar;
  headerLogo?: T_ResponGetHeaderLogo;
  privateLogo?: T_ResponGetHeaderLogoPrivate;
}) {
  const pathname = usePathname();
  const currentLanguage = useSearchParams().get('lang');
  const router = useRouter();
  const isScrolling = useScrollActive();

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isSelectedMenu, setIsSelectedMenu] = useState<T_PrivateItems | null>(
    null
  );

  const onSwitchLanguages = (language: string) => {
    if (currentLanguage !== language) {
      const queryParams = new URLSearchParams({
        lang: language,
      }).toString();

      router.push(`${pathname}?${queryParams}`);
      router.refresh();
    }
  };

  const generateLinkBottom = (item: T_ResponseGetPrivateMenuNavbar[number]) => {
    if (!item) {
      return '';
    }
    if (item.alias) {
      return `/${item.alias?.toLowerCase().replaceAll(' ', '-')}`;
    }
    if (item.uri) {
      return item.uri;
    }

    return '/';
  };

  const activeTab = (url: string) => {
    return pathname.includes(url);
  };

  return (
    <>
      <header
        className={[
          `${isScrolling ? 'bg-white shadow-md' : ''}`,
          'z-50 fixed w-full ',
          `${variant === 'transparent' ? '' : 'bg-white'}`,
        ].join(' ')}
      >
        <div className="container py-4">
          <div
            className={[
              `lg:flex items-center gap-5 justify-end mb-5 hidden`,
              `${isScrolling ? 'lg:hidden' : ''}`,
            ].join(' ')}
          >
            <div className="flex items-center gap-8">
              {headerTop?.map((header, index) => {
                return (
                  <div key={index}>
                    <div
                      className="flex items-center cursor-pointer hover:border-b-[1px] py-[2px] border-white"
                      onClick={() =>
                        header.title.toLowerCase() === 'cari'
                          ? setActiveSearch(true)
                          : router.push(`${header?.relative}`)
                      }
                    >
                      {header.icon && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${header?.icon}`}
                          width={18}
                          height={18}
                          alt={`icon-${header.icon}`}
                          className={[
                            'w-5 h-5 mr-2 ',
                            variant === 'no-transparent'
                              ? ''
                              : 'filter brightness-0 invert',
                          ].join(' ')}
                        />
                      )}
                      <div
                        className={[
                          `text-[0.813rem] font-light`,
                          `${variant === 'transparent' ? 'text-white' : ''}`,
                        ].join(' ')}
                      >
                        {header.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`${variant === 'transparent' ? 'text-white ' : ''}`}
            >
              |
            </div>
            <div className="flex items-center gap-5 text-[0.813rem] font-light">
              {LIST_LANGUAGES.map((label) => (
                <button
                  key={label}
                  onClick={() => onSwitchLanguages(label.toLowerCase())}
                  className={[
                    `text-xs p-1 px-2 rounded-md`,
                    `${variant === 'transparent' ? 'text-white' : ''}`,
                    `${
                      (currentLanguage ?? 'id')?.includes(label.toLowerCase())
                        ? 'border border-orange-01'
                        : ''
                    }`,
                  ].join(' ')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:hidden items-center justify-between flex">
            <div className="w-[21vh] flex items-center space-x-1">
              <Link href="/">
                <Image
                  alt="logo-bri"
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                  width={128}
                  height={53}
                  className={`${isScrolling || variant === 'no-transparent' ? '' : 'filter brightness-0 invert'} `}
                />
              </Link>
              <Link href="/bri-private">
                <Image
                  alt="logo-bri"
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${privateLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                  width={150}
                  height={60}
                  className={`${isScrolling || variant === 'no-transparent' ? '' : 'filter brightness-0 invert pl-2 border-l border-white'} `}
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div>
                  <LoginButton menuItems={itemLogin} />
                </div>
                {!activeMenu && (
                  <div
                    onClick={() => setActiveMenu(true)}
                    className="cursor-pointer"
                  >
                    <svg
                      className={`w-7 h-7  ${isScrolling || variant === 'no-transparent' ? 'fill-black' : 'lg:fill-current fill-white'} `}
                      width="32"
                      height="32"
                      viewBox="0 0 256 256"
                    >
                      <path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:flex items-center justify-between hidden">
            <div className="flex items-center space-x-3 flex-none">
              <Link href={'/'}>
                <Image
                  alt="logo-bri"
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                  width={128}
                  height={53}
                  className={`${isScrolling ? '' : variant === 'no-transparent' ? '' : 'filter brightness-0 invert'} `}
                />
              </Link>
              <Link href={'/bri-private'}>
                <Image
                  alt="logo-bri"
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${privateLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                  width={150}
                  height={60}
                  className={`${isScrolling ? 'pl-4 border-l border-black' : 'filter brightness-0 invert pl-4 border-l border-white'} `}
                />
              </Link>
            </div>

            <div className="flex-auto">
              <div className="flex flex-wrap items-center justify-end gap-y-5">
                {headerBottom?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={[
                        'pb-2 border-b-4 border-transparent hover:border-privatecolor mx-5',
                        item.below?.length ? 'group' : '',
                      ].join(' ')}
                    >
                      <Link
                        href={generateLinkBottom(item)}
                        className={[
                          `text-sm font-normal cursor-pointer uppercase relative`,
                          `${isScrolling ? 'text-black' : variant === 'transparent' ? 'text-white' : ''}`,
                        ].join(' ')}
                      >
                        {item?.title}
                        <div
                          className={[
                            `invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-100`,
                            `absolute top-[210%] left-1/2 transform -translate-x-1/2 rotate-180`,
                            `border-l-[0.7rem] border-r-[0.7rem] border-t-[0.7rem] `,
                            `border-l-transparent border-r-transparent border-white`,
                            `h-5 w-5`,
                          ].join(' ')}
                        ></div>
                      </Link>
                      <div className="absolute left-0 w-full invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 pt-10">
                        <div className="bg-white">
                          <div className="container py-5">
                            <Link
                              href={`/${item.alias
                                ?.toLowerCase()
                                .replaceAll(' ', '-')}`}
                            >
                              <div className="text-[1.5rem] mb-4 font-medium">
                                {item?.title}
                              </div>
                            </Link>
                            <div className="flex -mx-5">
                              {item?.below?.map((subItem, subIndex) => {
                                return (
                                  <div key={subIndex} className="px-5">
                                    <Link href={generateLinkBottom(subItem)}>
                                      <div className="text-red-01 font-semibold text-sm mb-3">
                                        {subItem?.title}
                                      </div>
                                    </Link>
                                    <div>
                                      {subItem?.below?.map(
                                        (item, itemIndex) => {
                                          return (
                                            <div
                                              key={itemIndex}
                                              className="flex-1"
                                            >
                                              <Link
                                                href={generateLinkBottom(item)}
                                              >
                                                <div className="flex items-center justify-between w-full mb-2">
                                                  <div className="text-sm flex-1">
                                                    {item.title}
                                                  </div>
                                                  <Image
                                                    src={`/web/guest/images/headers/arrow-right.svg`}
                                                    width={18}
                                                    height={18}
                                                    alt={`icon-arrow-right`}
                                                    className="w-3 h-3 ml-4"
                                                  />
                                                </div>
                                              </Link>
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
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pb-2 border-b-4 border-transparent lg:block hidden ml-4">
              <LoginButton menuItems={itemLogin} />
            </div>
          </div>
        </div>

        {activeMenu && (
          <div className="fixed top-0 w-full h-screen z-50">
            <div
              onClick={() => {
                setActiveMenu(false);
                setIsSelectedMenu(null);
              }}
              className="bg-black bg-opacity-30 absolute top-0 left-0 w-full h-screen"
            ></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-black max-w-[80%] relative z-20 h-full p-5 pt-10 overflow-y-auto"
            >
              <div
                className="absolute top-2 right-2"
                onClick={() => {
                  setActiveMenu(false);
                  setIsSelectedMenu(null);
                }}
              >
                <CloseIcon className="text-blue-02 cursor-pointer" />
              </div>
              <nav className="flex flex-col items-start text-white">
                <div className="flex items-center w-full border-b border-white py-2 mb-6">
                  <div>
                    <svg
                      className="w-7 h-7"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="appearance-none pl-2 bg-transparent border-none w-full placeholder:text-sm text-sm text-white placeholder-gray-500 focus:outline-none"
                    placeholder=""
                  />
                </div>

                {isSelectedMenu !== null ? (
                  <div className="w-full">
                    <button
                      className="flex items-center gap-1 uppercase text-sm mb-6"
                      onClick={() => setIsSelectedMenu(null)}
                    >
                      <Image
                        alt="icon-arrow-right"
                        src="/web/guest/images/headers/arrow-right.svg"
                        width={24}
                        height={24}
                        style={{ rotate: '180deg' }}
                        className="filter brightness-0 invert"
                      />
                      <p className="uppercase">{isSelectedMenu?.title}</p>
                    </button>

                    {isSelectedMenu.below &&
                      isSelectedMenu.below.length > 0 &&
                      isSelectedMenu.below.map((item) => (
                        <NavigationItem menuItem={item} key={item.key} />
                      ))}
                  </div>
                ) : (
                  <>
                    {headerBottom?.map((item) => (
                      <div
                        key={item.key}
                        className="w-full flex py-2 justify-between items-center"
                      >
                        {item.below ? (
                          <div className="flex justify-between items-center w-full">
                            <Link
                              href={item.relative}
                              className="relative text-sm font-light capitalize group"
                            >
                              <span className="uppercase">{item.title}</span>

                              {activeTab(item.relative) ? (
                                <motion.div
                                  initial={{
                                    scaleX: 0,
                                  }}
                                  animate={{
                                    scaleX: 1,
                                  }}
                                  transition={{ duration: 0.5 }}
                                  className="absolute left-0 -bottom-2 h-1 rounded-full w-full bg-privatecolor"
                                />
                              ) : (
                                <motion.span
                                  className="absolute left-0 bottom-0 w-0 h-[0.125rem] bg-privatecolor transition-all group-hover:w-full"
                                  layoutId="underline"
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </Link>
                            <button onClick={() => setIsSelectedMenu(item)}>
                              <Image
                                alt="icon-arrow-right"
                                src="/web/guest/images/headers/arrow-right.svg"
                                width={24}
                                height={24}
                                className="filter brightness-0 invert"
                              />
                            </button>
                          </div>
                        ) : (
                          <Link
                            href={item.relative}
                            className="relative text-sm font-light capitalize group"
                          >
                            <span className="uppercase">{item.title}</span>

                            {activeTab(item.relative) ? (
                              <motion.div
                                initial={{
                                  scaleX: 0,
                                }}
                                animate={{
                                  scaleX: 1,
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-0 -bottom-2 h-1 rounded-full w-full bg-privatecolor"
                              />
                            ) : (
                              <motion.span
                                className="absolute left-0 bottom-0 w-0 h-[0.125rem] bg-privatecolor transition-all group-hover:w-full"
                                layoutId="underline"
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </Link>
                        )}
                      </div>
                    ))}
                    <div className="mt-10 w-full">
                      <div className="flex justify-between w-full items-center mt-4">
                        <p className="text-sm">
                          {currentLanguage === 'en' ? 'Languages' : 'Bahasa'}
                        </p>
                        <div className="flex items-center gap-4">
                          {LIST_LANGUAGES.map((label) => (
                            <button
                              key={label}
                              onClick={() =>
                                onSwitchLanguages(label.toLowerCase())
                              }
                              className={`text-xs p-1 px-2 rounded-md ${
                                (!currentLanguage || currentLanguage === 'id'
                                  ? 'id'
                                  : 'en'
                                )?.includes(label.toLowerCase())
                                  ? 'border border-orange-01'
                                  : ''
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </nav>
            </motion.div>
          </div>
        )}
        <Search active={activeSearch} setActive={setActiveSearch} />
      </header>
    </>
  );
}

const NavigationItem = ({
  menuItem,
  level = 1,
}: {
  menuItem: T_PrivateItems;
  level?: number;
}) => {
  const [openedSubItems, setOpenedSubItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSubItem = (url: string) => {
    setOpenedSubItems((prevState) => ({
      ...prevState,
      [url]: !prevState[url],
    }));
  };

  const isOpenMenuItem = openedSubItems[menuItem.relative];

  const paddingLeft = level * 20;
  const fontSize = 14 - level * 0.5;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        style={{ paddingLeft: `${paddingLeft}px` }}
        className="py-2 "
      >
        <div className="flex justify-between items-center w-full">
          <Link
            className="py-1 font-normal flex items-center justify-between w-full"
            href={menuItem.relative}
            style={{ fontSize: `${fontSize}px` }}
          >
            {menuItem.title}
            {!menuItem.below && (
              <Image
                alt="icon-arrow-right"
                src="/web/guest/images/headers/arrow-right.svg"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
            )}
          </Link>
          {menuItem.below && (
            <button onClick={() => toggleSubItem(menuItem.relative)}>
              <Image
                alt="icon-arrow-right"
                src="/web/guest/images/headers/arrow-right.svg"
                width={20}
                height={20}
                style={{
                  rotate: isOpenMenuItem ? '90deg' : '0deg',
                }}
                className="filter brightness-0 invert"
              />
            </button>
          )}
        </div>
      </motion.div>

      {menuItem.below && isOpenMenuItem && (
        <div>
          {menuItem.below.map((subItem) => (
            <NavigationItem
              key={subItem.key}
              menuItem={subItem}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </>
  );
};
