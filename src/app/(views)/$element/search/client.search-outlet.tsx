'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import imageLocation from '@/../../public/images/dummy/location.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

type T_SearchProps = {
  onChange: (_value: string) => void;
  variant: string;
};
export default function CE_SearchOutlet({ onChange, variant }: T_SearchProps) {
  let colorTheme = '';
  if (variant === 'wm-prioritas-main-navigation') {
    colorTheme = 'prioritycolor';
  } else {
    colorTheme = 'wmcolor';
  }

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full h-60 flex flex-col items-center justify-center">
        <section
          className={`uppercase text-2xl lg:text-3xl xl:text-4xl pb-5 text-${colorTheme} font-extrabold`}
        >
          find us
        </section>
        <section
          data-aos="fade-up"
          data-aos-duration="500"
          className="w-11/12 md:w-9/12 lg:w-7/12 2xl:w-6/12 flex flex-col items-center justify-center space-x-4 px-5 2xl:px-7 py-4 bg-white rounded-3xl md:rounded-full shadow-2xl border border-slate-300"
        >
          <div className="flex items-center justify-center w-full space-x-3">
            <div>
              <Image
                alt=""
                src={imageLocation}
                width={35}
                height={35}
                className="w-10/12"
              />
            </div>
            <form className="w-10/12 relative">
              <input
                onChange={(e) => onChange(e.target.value)}
                style={{ outline: 'none' }}
                type="text"
                className="w-full py-2 border-b-[1px] border-black"
                placeholder="Search for a location"
              />
            </form>
            <div className="hidden md:flex text-center w-3/12">
              <Link
                href={'#'}
                className={`w-full bg-${colorTheme} rounded-full px-4 py-3 text-white font-semibold text-base uppercase`}
              >
                search
              </Link>
            </div>
          </div>
          <div className="flex md:hidden pt-4">
            <Link
              href={'#'}
              className=" bg-prioritycolor rounded-full px-8 font-semibold text-sm uppercase py-3 text-white"
            >
              search
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
