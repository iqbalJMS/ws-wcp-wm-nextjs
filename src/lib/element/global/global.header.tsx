'use client';

import useScrollActive from '@/lib/hook/useScroll';
import Image from './image';
import { T_ResponseGetTopMenuNavbar } from '@/api/navbar-menu/top-navbar/api.get-top-menu-navbar.type';
import { T_ResponseGetMainMenuNavbar } from '@/api/navbar-menu/main-navbar/api.get-main-menu-navbar.type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Link from './link';
import { Tabs } from './tabs';
import { CloseIcon } from './close-icon';

const LIST_LANGUAGES = ['ID', 'EN'];

type T_SearchProps = {
  active: boolean;
  setActive: (_active: boolean) => void;
};

export function Search({ active, setActive }: T_SearchProps) {
  const elementRef = useRef(null);
  useOnClickOutside(elementRef, () => setActive(false));
  return (
    <div
      ref={elementRef}
      className={[
        'fixed top-0 left-0 w-full mdmax:h-screen bg-white z-50',
        active ? 'visible' : 'invisible',
      ].join(' ')}
    >
      <div
        className="absolute top-2 right-4 text-lg cursor-pointer"
        onClick={() => setActive(false)}
      >
        <CloseIcon className="text-blue-02 cursor-pointer" />
      </div>
      <div className="py-20 container">
        <div className="pb-10 border-b border-black">
          <div className="text-center text-2xl mdmax:text-base font-semibold mb-5">
            Temukan yang Anda Butuhkan
          </div>
          <div className="text-center">
            <div className="border border-black rounded-full inline-flex items-center overflow-hidden px-5 py-2 w-[60%] mdmax:w-full">
              <input type="text" className="focus:outline-none flex-1" />
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
            </div>
          </div>
        </div>
        <div>
          <Tabs
            list={[
              { title: 'PRODUK', slug: 'pro' },
              { title: 'BERITA', slug: 'ber' },
            ]}
            value="pro"
            variant="full"
            onChange={() => {}}
          />
        </div>
        <div>
          {/* RESULT */}
          <div className="text-center py-20">
            <div className="text-2xl mdmax:text-sm font-bold">
              Tidak dapat menemukan{' '}
              <span className="text-red-01">apa yang kalian cari?</span>
            </div>
            <div className="mdmax:text-xs">
              Carilah jawaban pada{' '}
              <Link
                className="underline font-semibold"
                href={'https://bri.co.id/web/bri/bantuan'}
              >
                halaman FAQ
              </Link>{' '}
              atau arahkan ke kategori konten berikut
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex px-[15rem] mdmax:hidden">
          {[
            {
              title: 'Simpanan',
              below: [
                {
                  title: 'Tabungan',
                },
              ],
            },
            {
              title: 'Simpanan',
              below: [
                {
                  title: 'Tabungan',
                },
              ],
            },
            {
              title: 'Simpanan',
              below: [
                {
                  title: 'Tabungan',
                },
              ],
            },
            {
              title: 'Simpanan',
              below: [
                {
                  title: 'Tabungan',
                },
              ],
            },
          ].map((subItem, subIndex) => {
            return (
              <div key={subIndex} className="flex-1 mr-40">
                <div className="text-blue-01 font-semibold mb-2">
                  {subItem?.title}
                </div>
                <div>
                  {subItem?.below?.map((item, itemIndex) => {
                    return (
                      <div key={itemIndex}>
                        <div className="flex items-center justify-between">
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function LoginButton() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const logins = [
    {
      title: 'Internet Banking Business',
      color: 'orange-01',
      link: 'https://biz.bri.co.id/',
    },
    {
      title: 'Internet Banking Corporate',
      color: 'green-500',
      link: 'https://biz.bri.co.id/',
    },
  ];
  useOnClickOutside(elementRef, () => setActive(false));
  return (
    <div
      ref={elementRef}
      className="text-white px-6 pr-4 py-2 mdmax:py-1 mdmax:px-4 mdmax:pr-2 rounded-full inline-flex items-center cursor-pointer relative"
      style={{
        background:
          'transparent linear-gradient(90deg, #f59823 0%, #d94a00 100%) 0% 0% no-repeat padding-box',
      }}
      onClick={() => setActive(!active)}
    >
      <div>Login</div>
      <div className="pl-2">
        <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
          />
        </svg>
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
        {logins.map((loginItem, index) => {
          return (
            <div
              key={index}
              className="w-full bg-white mb-2 px-5 py-4 rounded-3xl"
            >
              <Link href={loginItem.link} target="_blank">
                <div className={`flex items-center  text-${loginItem.color}`}>
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6"
                      width="32"
                      height="32"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8"
                      />
                    </svg>
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

export default function GlobalHeader({
  headerTop,
  headerBottom,
  variant = 'transparent',
}: {
  headerTop: T_ResponseGetTopMenuNavbar;
  headerBottom: T_ResponseGetMainMenuNavbar;
  variant: 'transparent' | 'no-transparent';
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
          `${variant === 'transparent' ? 'mdmax:bg-white mdmax:shadow-md' : 'bg-white'}`,
        ].join(' ')}
      >
        <div className="container hidden mdmax:block py-4">
          <div className="flex items-center justify-between">
            <div className="w-[5rem]">
              <Image
                alt="logo-bri"
                src="/images/headers/logo-bri.png"
                width={128}
                height={53}
                className="w-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div>
                  <LoginButton />
                </div>
                <div onClick={() => setActiveMenu(true)}>
                  <svg
                    className="w-7 h-7"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
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
            'container py-5 mdmax:p-0 mdmax:fixed mdmax:w-full mdmax:h-screen mdmax:top-0 mdmax:z-50 mdmax:ease-in-out mdmax:transition-all mdmax:duration-300',
            activeMenu
              ? 'mdmax:visible mdmax:opacity-100'
              : 'mdmax:invisible mdmax:opacity-0',
          ].join(' ')}
        >
          <div
            onClick={() => setActiveMenu(false)}
            className="mdmax:block hidden bg-black bg-opacity-80 absolute top-0 left-0 w-full h-screen"
          ></div>
          <div className="mdmax:bg-white mdmax:w-[80%] mdmax:relative mdmax:z-20 mdmax:flex mdmax:flex-col-reverse mdmax:h-full mdmax:items-start mdmax:justify-end mdmax:p-5 mdmax:pt-10">
            <div
              className="absolute top-7 right-7 mdmax:top-2 mdmax:right-2 hidden mdmax:block"
              onClick={() => setActiveMenu(false)}
            >
              <CloseIcon className="text-blue-02 cursor-pointer" />
            </div>
            <div
              className={[
                `flex items-center mdmax:items-start  mdmax:flex-col gap-5 mdmax:gap-0 justify-end mb-5 `,
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
                        {header.icon && (
                          <Image
                            extern={true}
                            src={`${header.icon}`}
                            width={18}
                            height={18}
                            alt={`icon-${header.icon}`}
                            className="w-3 h-3 mr-2 filter brightness-0 invert mdmax:filter-none"
                          />
                        )}
                        <div
                          className={[
                            `text-[0.813rem] font-light`,
                            `${variant === 'transparent' ? 'text-white mdmax:text-black' : ''}`,
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
                className={[
                  `${variant === 'transparent' ? 'text-white ' : ''}`,
                  'mdmax:hidden',
                ].join(' ')}
              >
                |
              </div>
              <div className="flex items-center mdmax:mt-5 mdmax:items-start gap-5 text-[0.813rem] font-light">
                {LIST_LANGUAGES.map((label) => (
                  <button
                    key={label}
                    onClick={() => onSwitchLanguages(label.toLowerCase())}
                    className={[
                      `text-xs p-1 px-2 rounded-md`,
                      `${variant === 'transparent' ? 'text-white mdmax:text-black' : ''}`,
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
            <div className="flex items-end justify-between mdmax:border-b mdmax:border-black mdmax:w-full mdmax:pb-5 mdmax:mb-5">
              <div className="mdmax:hidden">
                <Image
                  alt="logo-bri"
                  src="/images/headers/logo-bri.png"
                  width={128}
                  height={53}
                  className={`${isScrolling ? '' : 'filter brightness-0 invert'} `}
                />
              </div>
              <div className="mdmax:w-full">
                <div className="flex mdmax:flex-col mdmax:items-start items-center gap-10 mdmax:gap-0 ">
                  {headerBottom?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="pb-2 mdmax:pb-0 group border-b-4 border-transparent hover:border-red-01 "
                      >
                        <Link
                          href={`/aether/${item.nid}/${item.title
                            ?.toLowerCase()
                            .replaceAll(' ', '-')}`}
                          className={[
                            `text-sm font-normal cursor-pointer uppercase relative `,
                            `${isScrolling ? 'text-black' : variant === 'transparent' ? 'text-white mdmax:text-black' : ''}`,
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
                      </div>
                    );
                  })}
                  <div className="pb-2 border-b-4 border-transparent mdmax:hidden">
                    <LoginButton />
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
