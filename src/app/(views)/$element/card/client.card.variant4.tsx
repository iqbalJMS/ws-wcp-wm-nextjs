'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useInView, useAnimation } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant4({
  data,
  title,
}: {
  title: string;
  data: Array<{
    image: string;
    logo: string;
    label: string;
    link: string;
  }>;
}) {
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
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-auto flex justify-center p-5 overflow-hidden">
        <section className="w-full lg:w-11/12">
          <div className="w-full">
            {title && (
              <h1 className="text-center pb-20 text-3xl font-semibold uppercase">
                {parseHTMLToReact(title)}
              </h1>
            )}
          </div>
          <div className="w-full grid grid-cols-1 gap-y-4 place-items-center lg:grid-cols-2 xl:px-0 2xl:px-48">
            {data?.map((item, index) => (
              <Link
                className="cursor-pointer group relative w-full md:w-10/12 h-44 lg:h-64 lg:w-full xl:h-60 2xl:h-72 overflow-hidden bg-center"
                data-aos="fade-right"
                data-aos-duration="1000"
                href={`/${item?.link ?? '/404'}`}
                key={index}
              >
                <div
                  className="flex flex-col justify-between h-64 xl:h-72 bg-no-repeat bg-cover hover:scale-125 duration-300 bg-bottom transition-all ease-in-out transform-gpu delay-75"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.image ?? ''})`,
                  }}
                >
                  <div className="w-full h-full bg-black opacity-50"></div>
                </div>
                <div className="flex justify-between">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.logo ?? ''}`}
                    width={1000}
                    height={1000}
                    alt="logo"
                    className="absolute w-40 h-8 top-10 left-10 lg:left-16 lg:w-52 lg:h-12"
                  />
                  <ArrowRightIcon
                    width={25}
                    height={25}
                    stroke="white"
                    className="absolute top-12 right-14 lg:right-16 group-hover:right-10 duration-500"
                    fill="white"
                  />
                </div>
                <span>
                  {item?.label && (
                    <h1 className="absolute text-white text-base font-medium bottom-5 left-10 lg:left-16">
                      {parseHTMLToReact(item?.label)}
                    </h1>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </section>
        <div className="bg-[#DCDCDC] w-[400px] h-[120px] absolute -z-10 bottom-0 left-20"></div>
        <div className="bg-[#DCDCDC] w-[400px] h-[120px] absolute -z-10 top-[116px] right-20"></div>
      </div>
    </>
  );
}
