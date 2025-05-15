'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useInView, useAnimation } from 'motion/react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant6({
  image,
  label,
  desc,
  linkCta,
  backGround,
}: {
  image: string;
  label: string;
  desc: string;
  linkCta: string;
  backGround: string;
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
      once: false,
    });
  }, []);

  const backgroundImg = backGround
    ? `${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${backGround}`
    : '';

  return (
    <>
      <div
        className="w-full flex justify-center p-5"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center lg:w-11/12 xl:w-full 2xl:w-9/12 xl:px-8 z-10">
          <div className="w-full">
            <div data-aos="fade-up" className="pb-4 sm:hidden">
              {label && (
                <h1 className="text-2xl font-bold uppercase">
                  {parseHTMLToReact(label)}
                </h1>
              )}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="relative w-full overflow-hidden"
            >
              {image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${image}`}
                  width={1000}
                  height={1000}
                  alt="image dummy"
                  className="w-full md:w-10/12 h-full bg-no-repeat bg-cover hover:scale-125 bg-center transition-all ease-in-out transform-gpu duration-300"
                />
              )}
            </div>
          </div>
          <div className="space-y-4 sm:pt-5 w-8/12 flex flex-col items-start">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="hidden sm:flex"
            >
              {label && (
                <h1 className="text-3xl font-bold uppercase">
                  {parseHTMLToReact(label)}
                </h1>
              )}
            </div>
            {desc && (
              <h1
                data-aos="fade-up"
                data-aos-duration="300"
                className="text-[#89829F] text-sm sm:text-base sm:pb-3"
              >
                {parseHTMLToReact(desc)}
              </h1>
            )}
            <Link
              data-aos="fade-up"
              data-aos-duration="300"
              className="bg-wmcolor py-2 px-5 rounded-full hover:bg-gray-700 duration-200 cursor-pointer text-white font-semibold uppercase"
              href={linkCta ?? '/404'}
            >
              lihat selengkapnya
            </Link>
            <section />
          </div>
        </div>
      </div>
    </>
  );
}
