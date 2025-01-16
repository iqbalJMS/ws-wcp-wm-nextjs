'use client';
import React, { useEffect, useRef } from 'react';
import CE_FlipCard from './client.flip.card';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'motion/react';

export default function CE_CardVariant15Priority({
  data,
  topTitle,
  subTitle,
  buttonText,
  buttonUri,
}: {
  data: Array<{
    title: string;
    subtitle: string;
    desc: string;
    frontImage: string;
    backImage: string;
  }>;
  topTitle: string;
  subTitle: string;
  buttonText: string;
  buttonUri: string;
  variant: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <>
      <div className="w-full h-auto flex justify-center pt-20 pb-10">
        <div
          ref={ref}
          className=" w-[40rem] h-full md:w-[50rem] xl:w-[60rem] grid grid-cols-1 "
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="w-full flex flex-col items-center px-16"
          >
            {topTitle && (
              <h1 className="uppercase text-prioritycolor text-2xl md:text-3xl font-bold tracking-wider">
                {parseHTMLToReact(topTitle)}
              </h1>
            )}
            {subTitle && (
              <h2 className="text-sm font-light w-full md:w-10/12 lg:w-8/12 text-center pt-2">
                {parseHTMLToReact(subTitle)}
              </h2>
            )}
          </motion.div>
          <section className="grid grid-cols-1 md:grid-cols-2 pt-0 md:pt-16 space-x-0 lg:space-x-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex justify-center items-start"
            >
              {data && (
                <CE_FlipCard
                  frontImage={data?.[0]?.frontImage}
                  backImage={data?.[0]?.backImage}
                />
              )}
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-center md:text-start pt-0 md:pt-4"
            >
              <div className="space-y-2 px-16 md:px-0">
                {data?.[0]?.title && (
                  <h3 className="text-prioritycolor text-base font-light uppercase">
                    {parseHTMLToReact(data?.[0]?.title)}
                  </h3>
                )}
                {data?.[0]?.subtitle && (
                  <h1 className="text-2xl font-bold tracking-wide">
                    {parseHTMLToReact(data?.[0]?.subtitle)}
                  </h1>
                )}
                {data?.[0]?.desc && (
                  <h2 className="text-sm font-light">
                    {parseHTMLToReact(data?.[0]?.desc)}
                  </h2>
                )}
              </div>
              <div className="pt-8 xl:pt-16 space-x-4">
                <Link
                  href={`${buttonUri}`}
                  className="uppercase bg-prioritycolor text-base font-semibold bg-prtext-prioritycolor text-white rounded-full py-2 px-4 hover:bg-gray-500 duration-300"
                >
                  {buttonText}
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
