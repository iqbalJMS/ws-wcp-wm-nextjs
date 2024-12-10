'use client';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

export default function CE_CardVariant8Deeper({
  firstColumn,
  secondColumn,
}: {
  firstColumn: Array<{
    title: string;
    link: string;
    titleLink: string;
    desc: string;
    image: string;
  }>;
  secondColumn: Array<{
    title: string;
    link: string;
    titleLink: string;
    desc: string;
    image: string;
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

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center py-4 pb-20">
        <div className="w-8/12">
          <section
            ref={ref}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 "
          >
            {firstColumn?.map((item, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                key={index}
                className="group cursor-pointer lg:mt-3 lg:col-start-1 lg:col-span-1 w-full lg:w-[30vh] xl:w-[45vh] h-72 relative overflow-hidden flex justify-center items-center hover:shadow-[8px_10px_rgba(0,0,0,0.3)] transition-all duration-200"
              >
                <div className="group-hover:hidden z-20 text-center flex flex-col items-center space-y-5">
                  <h1 className=" text-white text-3xl uppercase font-bold">
                    {item?.title}
                  </h1>
                  <hr className="w-16 text-lg" style={{ height: 5 }} />
                </div>
                <div className="bg-[#161A39] opacity-40 w-full h-full absolute z-10"></div>

                <Link
                  href={`/${item?.link}`}
                  className=" cursor-pointer opacity-0 flex flex-col group-hover:opacity-80 justify-center items-center space-y-3 bg-[#141838] w-full h-full z-20 absolute bottom-0 transition-all ease-in-out duration-500 text-white"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl uppercase font-extrabold">
                    {item?.title}
                  </h1>
                  <h2 className="text-center font-light text-base px-20 md:px-10 xl:px-20">
                    {parseHTMLToReact(item?.desc)}
                  </h2>
                  <h2 className="pb-4 underline text-base font-semibold uppercase">
                    {item.titleLink}
                  </h2>
                  <hr className="w-16" />
                </Link>
              </motion.div>
            ))}
            {secondColumn?.map((item, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                key={index}
                className="group cursor-pointer lg:mt-3 lg:-col-start-1 w-full lg:w-[30vh] xl:w-[45vh] h-72 relative overflow-hidden flex justify-center items-center hover:shadow-[8px_10px_rgba(0,0,0,0.3)] transition-all duration-200"
              >
                <div className="group-hover:hidden z-20 text-center flex flex-col items-center space-y-5">
                  <h1 className=" text-white text-3xl uppercase font-bold">
                    {item?.title}
                  </h1>
                  <hr className="w-16 text-lg" style={{ height: 5 }} />
                </div>
                <div className="bg-[#161A39] opacity-40 w-full h-full absolute z-10"></div>

                <Link
                  href={`/${item?.link}`}
                  className="opacity-0 flex flex-col group-hover:opacity-80 justify-center items-center space-y-3 bg-[#141838] w-full h-full z-20 absolute bottom-0 transition-all ease-in-out duration-500 text-white"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl uppercase font-extrabold">
                    {item?.title}
                  </h1>
                  <h2 className="text-center font-light text-base px-20 md:px-10 xl:px-20">
                    {parseHTMLToReact(item?.desc)}
                  </h2>
                  <h2 className="pb-4 underline text-base font-semibold uppercase">
                    {item.titleLink}
                  </h2>
                  <hr className="w-16" />
                </Link>
              </motion.div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
