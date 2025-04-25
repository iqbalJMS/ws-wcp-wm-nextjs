'use client';

import useScrollActive from '@/lib/hook/useScroll';
import { T_ResponseGetTopMenuNavbar } from '@/api/navbar-menu/top-navbar/api.get-top-menu-navbar.type';
import { T_ResponseGetMenuItemNavbar } from '@/api/navbar-menu/menu-items/api.get-menu-items-navbar.type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Link from 'next/link';
import { CloseIcon } from '@/lib/element/global/icons/close-icon';
import Image from 'next/image';
import ChevronDown from '@/lib/element/global/icons/chevron-button-navbar';
import {
  T_Items,
  T_ResponseGetMainMenuNavbar,
} from '@/api/navbar-menu/main-navbar/private-navbar/api.get-main-menu-navbar.type';
import { T_ResponGetHeaderLogo } from '@/api/header-logo/api.get-header-logo.type';
import { Search } from '@/lib/element/global/global.search';
import defaultLogo from '@/../../public/images/wefo-blue-logo.png';
import { motion, useInView, useAnimation } from 'motion/react';

const LIST_LANGUAGES = ['ID', 'EN'];

export function LoginButton({
  isActive,
  setIsActive,
  menuItems,
  refElement,
}: {
  isActive: boolean;
  setIsActive: (_val: boolean) => void;
  menuItems: T_ResponseGetMenuItemNavbar;
  refElement: any;
}) {
  const ref = useRef(null);
  const isScrolling = useScrollActive();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={refElement} className="relative">
      <button
        onClick={() => setIsActive(!isActive)}
        className={[
          `${isScrolling ? 'hover:border-blue-800 border-2 border-white' : 'hover:bg-[#080087] focus:bg-[#080087] focus:border-white focus:border-4 focus:text-white'}`,
          `${isScrolling ? 'bg-black text-white text-sm lg:text-base hover:border-blue-800 border-2 border-white' : 'bg-white text-bluedark01 text-sm lg:text-base'}`,
          `text-[#191056] lg:px-6 lg:pr-4 lg:py-2 py-1 px-4 pr-2 rounded-full inline-flex items-center cursor-pointer relative group hover:text-white duration-300`,
          'uppercase font-semibold group-hover:text-white z-20',
        ].join(' ')}
      >
        <span>Login</span>
        <div>
          <ChevronDown
            className={[
              `${isScrolling ? 'hidden' : ''}`,
              `group-hover:hidden group-focus:hidden`,
            ].join(' ')}
            stroke="#141333"
            width={30}
            height={30}
          />
          <ChevronDown
            className={[
              `${isScrolling ? 'group-hover:hidden' : 'group-hover:flex group-focus:flex'}`,
              `hidden `,
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
      </button>

      <div className={`${isActive ? 'block' : 'hidden'} `}>
        <div
          className={`${isScrolling ? 'absolute top-[80px] right-5 rotate-180 border-l-[0.7rem] border-r-[0.7rem] border-t-[0.7rem] border-l-transparent border-r-transparent border-whiteh-5 w-5' : 'absolute top-[60px] right-5 rotate-180 border-l-[0.7rem] border-r-[0.7rem] border-t-[0.7rem] border-l-transparent border-r-transparent border-whiteh-5 w-5'}
          `}
        />
        <section
          className={`${isScrolling ? 'w-fit absolute top-[88px] right-0' : 'w-fit absolute top-[70px] right-0'}`}
        >
          {menuItems?.map((loginItem, index) => {
            return (
              <motion.div
                key={index}
                className="w-80 bg-white mb-2 px-5 py-4 rounded-3xl"
              >
                <Link href={loginItem?.uri ?? '/404'} target="_blank">
                  <div
                    className={`flex items-center space-x-3 text-[#${loginItem?.field_theme_color?.[0]?.value}]'`}
                  >
                    <div className="mr-2">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${loginItem?.icon ?? ''}`}
                        alt=""
                        width={30}
                        height={30}
                        className="text-wmcolor"
                      />
                    </div>
                    <h1 className={``}>{loginItem?.title}</h1>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </section>
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
  const searchParams = useSearchParams();
  const elementRef = useRef<HTMLDivElement>(null);

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isSelectedMenu, setIsSelectedMenu] = useState<T_Items | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const onSwitchLanguages = (language: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set('lang', language);

    // cast to string
    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
    router.refresh();
  };

  const generateLinkBottom = (item: T_ResponseGetMainMenuNavbar[number]) => {
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

  useOnClickOutside(elementRef, () => setIsButtonActive(false));

  useEffect(() => {
    if (activeSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeSearch]);

  return (
    <Fragment>
      {/* Overlay */}
      <div
        className={
          isButtonActive
            ? 'fixed top-0 left-0 bg-black/60 overflow-y-auto overflow-x-hidden justify-center items-center w-full h-screen md:inset-0 max-h-full z-50'
            : 'hidden'
        }
      />
      <header
        className={[
          `${isScrolling ? 'bg-white shadow-md' : 'bg-transparent'}`,
          'fixed left-0 top-0 w-full z-50',
        ].join(' ')}
      >
        <div className="container py-4 z-50">
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
                    {header?.title.toLowerCase() === 'cari' ? (
                      <div
                        className="flex items-center cursor-pointer hover:border-b-[1px] py-[2px] border-white"
                        onClick={() => setActiveSearch(true)}
                      >
                        {header.icon && (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${header?.icon ?? ''}`}
                            width={18}
                            height={18}
                            alt={`icon-${header.icon}`}
                            className={[
                              'w-5 h-5 mr-2 z-50',
                              variant === 'no-transparent'
                                ? ''
                                : 'filter brightness-0 invert',
                            ].join(' ')}
                          />
                        )}
                        <div
                          className={[
                            `text-[0.813rem] font-light`,
                            `${variant === 'transparent' ? 'text-white z-50' : 'z-50'}`,
                          ].join(' ')}
                        >
                          {header.title}
                        </div>
                      </div>
                    ) : (
                      <Link
                        className="flex items-center cursor-pointer hover:border-b-[1px] py-[2px] border-white"
                        href={header?.relative ?? ''}
                      >
                        {header.icon && (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${header?.icon ?? ''}`}
                            width={18}
                            height={18}
                            alt={`icon-${header.icon}`}
                            className={[
                              'w-5 h-5 mr-2 z-50',
                              variant === 'no-transparent'
                                ? ''
                                : 'filter brightness-0 invert',
                            ].join(' ')}
                          />
                        )}
                        <div
                          className={[
                            `text-[0.813rem] font-light`,
                            `${variant === 'transparent' ? 'text-white z-50' : 'z-50'}`,
                          ].join(' ')}
                        >
                          {header.title}
                        </div>
                      </Link>
                    )}
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
                    `text-xs p-1 px-2 rounded-md z-50`,
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
            <Link href={'/'} className="w-[12vh]">
              {headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]
                ?.url ? (
                <Image
                  alt="logo-bri"
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ``}`}
                  width={128}
                  height={53}
                  className={`${isScrolling ? '' : variant === 'no-transparent' ? 'z-50' : 'filter brightness-0 invert z-50'} `}
                />
              ) : (
                <Image
                  alt="logo-bri"
                  src={defaultLogo}
                  width={128}
                  height={53}
                  className={`${isScrolling ? '' : variant === 'no-transparent' ? 'z-50' : 'filter brightness-0 invert z-50'} `}
                />
              )}
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <div>
                  <LoginButton
                    menuItems={itemLogin}
                    isActive={isButtonActive}
                    setIsActive={setIsButtonActive}
                    refElement={elementRef}
                  />
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
            <div className="flex-none z-50">
              <Link className="!text-gray-500 z-50" href="/">
                {headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]
                  ?.uri?.[0]?.url ? (
                  <Image
                    alt="logo-bri"
                    src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${headerLogo?.field_logo_alternative?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ``}`}
                    width={150}
                    height={60}
                    className={`${isScrolling ? 'z-50' : variant === 'no-transparent' ? 'z-50' : 'filter brightness-0 invert z-50'} `}
                  />
                ) : (
                  <Image
                    alt="logo-bri"
                    src={defaultLogo}
                    width={150}
                    height={60}
                    className={`${isScrolling ? 'z-50' : variant === 'no-transparent' ? 'z-50' : 'filter brightness-0 invert z-50'} `}
                  />
                )}
              </Link>
            </div>
            <div className="flex-auto">
              <div className="flex flex-wrap items-end justify-end gap-y-5">
                {headerBottom?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={[
                        'border-b-4 border-transparent hover:border-wmcolor mx-5',
                        item.below?.length ? 'group' : '',
                      ].join(' ')}
                    >
                      <Link
                        href={generateLinkBottom(item ?? '/404')}
                        className={[
                          `text-sm font-normal cursor-pointer uppercase relative `,
                          `${isScrolling ? 'text-black z-50' : variant === 'transparent' ? 'text-white z-50' : 'z-50'}`,
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
                              href={`/${
                                item.alias
                                  ?.toLowerCase()
                                  .replaceAll(' ', '-') ?? '/404'
                              }`}
                            >
                              <div className="text-[1.5rem] mb-4 font-medium">
                                {item?.title}
                              </div>
                            </Link>
                            <div className="flex -mx-5">
                              {item?.below?.map((subItem, subIndex) => {
                                return (
                                  <div key={subIndex} className="px-5">
                                    <Link
                                      href={generateLinkBottom(
                                        subItem ?? '/404'
                                      )}
                                    >
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
                                                href={generateLinkBottom(
                                                  item ?? '/404'
                                                )}
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
            <div className="border-b-4 border-transparent lg:block hidden ml-4">
              <LoginButton
                refElement={elementRef}
                menuItems={itemLogin}
                isActive={isButtonActive}
                setIsActive={setIsButtonActive}
              />
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
                      <h1 className="uppercase">{isSelectedMenu?.title}</h1>
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
                              href={item.relative ?? '/404'}
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
                                  className="absolute left-0 -bottom-2 h-1 rounded-full w-full bg-wmcolor"
                                />
                              ) : (
                                <motion.span
                                  className="absolute left-0 bottom-0 w-0 h-[0.125rem] bg-wmcolor transition-all group-hover:w-full"
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
                            href={item.relative ?? '/404'}
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
                                className="absolute left-0 -bottom-2 h-1 rounded-full w-full bg-wmcolor"
                              />
                            ) : (
                              <motion.span
                                className="absolute left-0 bottom-0 w-0 h-[0.125rem] bg-wmcolor transition-all group-hover:w-full"
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
                        <h1 className="text-sm">
                          {currentLanguage === 'en' ? 'Languages' : 'Bahasa'}
                        </h1>
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
    </Fragment>
  );
}

const NavigationItem = ({
  menuItem,
  level = 1,
}: {
  menuItem: T_Items;
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
            href={menuItem.relative ?? '/404'}
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
