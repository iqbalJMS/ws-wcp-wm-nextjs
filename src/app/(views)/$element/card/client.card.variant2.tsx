'use client';
import React, { useEffect, useRef } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useInView, useAnimation } from 'motion/react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant2({
  data,
  desctitle,
  title,
  subtitle,
}: {
  data: Array<{
    iconcard: string;
    labelcard: string;
    desccard: string;
  }>;
  desctitle: string;
  title: string;
  subtitle: string;
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
      <div className="w-full h-auto flex flex-col items-center p-5 pb-20">
        <section className="w-full p-5 md:w-11/12 lg:w-10/12 xl:w-full 2xl:w-8/12 grid grid-cols-1 md:grid-cols-2 pb-16">
          <div data-aos="fade-right" className="uppercase space-y-2 pb-5">
            {subtitle && (
              <h3 className="text-base font-light">
                {parseHTMLToReact(subtitle)}
              </h3>
            )}
            {title && (
              <h1 className="text-4xl lg:text-3xl xl:text-4xl font-extrabold">
                {parseHTMLToReact(title)}
              </h1>
            )}
          </div>
          <div data-aos="fade-left" className="flex items-end">
            {desctitle && (
              <h1 className="text-sm md:text-base ">
                {parseHTMLToReact(desctitle)}
              </h1>
            )}
          </div>
        </section>
        <section
          ref={ref}
          className="w-full lg:w-10/12 xl:w-full 2xl:w-8/12 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {data?.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                key={index}
                className="group w-full h-60 flex flex-col items-center justify-center hover:bg-black hover:rounded-xl duration-300"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.iconcard}`}
                  alt={'icon-card'}
                  width={70}
                  height={70}
                  className="group-hover:invert brightness-50"
                />

                {item?.labelcard && (
                  <h1 className="text-wmcolor font-bold text-base group-hover:text-white pt-7">
                    {item?.labelcard}
                  </h1>
                )}
                {item?.desccard && (
                  <h2 className="text-sm font-light group-hover:text-white">
                    {parseHTMLToReact(item?.desccard)}
                  </h2>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
