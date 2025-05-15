'use client';
import React, { useEffect, useRef } from 'react';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { motion, useInView, useAnimation } from 'motion/react';

export default function CE_CardVariant16({
  title,
  subTitle,
  data,
}: {
  title: string;
  subTitle: string;
  data: Array<{
    uuid: string;
    label: string;
    linkCta: string;
    image: string;
    desc: string;
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
      <div
        ref={ref}
        className="w-full pb-80 md:pb-60 lg:pb-20 flex flex-col items-center space-y-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full text-center"
        >
          {title && (
            <h1
              className={
                'uppercase text-privatecolor text-4xl font-bold -tracking-tighter'
              }
            >
              {parseHTMLToReact(title)}
            </h1>
          )}
          {subTitle && <h1 className="pt-3">{parseHTMLToReact(subTitle)}</h1>}
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="w-8/12 h-full md:w-10/12 md:h-fit lg:w-11/12 xl:w-10/12 2xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center "
        >
          {data?.map((item, index) => (
            <Link
              data-aos="fade-up"
              href={item?.linkCta ?? '/404'}
              key={index}
              className="group w-96 h-80 md:w-80 md:h-72 lg:w-full xl:w-96 2xl:w-full overflow-hidden z-0 rounded-xl"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.image ?? ''})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <div className="z-50 text-white w-full h-full flex items-end justify-between">
                <div className="flex flex-col w-80 mx-5">
                  <div className="">
                    <h1 className="text-lg font-bold pb-5">{item?.label}</h1>
                  </div>
                  <div className="h-fit hidden group-hover:block">
                    {item?.desc && (
                      <h2 className="text-xs pb-4">
                        {parseHTMLToReact(item?.desc)}
                      </h2>
                    )}
                  </div>
                </div>
                <div className="pr-4 pb-5">
                  <ArrowRightIcon
                    stroke={'white'}
                    width={100}
                    height={100}
                    fill="white"
                    className="w-7 h-7"
                  />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
}
