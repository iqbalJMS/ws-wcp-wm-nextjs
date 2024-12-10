'use client';

import React, { useEffect, useRef } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from '@/lib/element/global/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'motion/react';

export default function CE_GridVariant02({
  variant,
  dataCard1,
  dataCard2,
  imageContent1,
  imageContent2,
}: {
  variant: any;
  dataCard1: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  dataCard2: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  imageContent1: string;
  imageContent2: string;
}) {
  let colorTheme;

  if (variant === 'wm-private-main-navigation') {
    colorTheme = 'privatecolor';
  } else {
    colorTheme = 'prioritycolor';
  }

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
      <section ref={ref} className="container py-5 px-5 xl:px-20 ">
        <div className="flex md:flex-row flex-col justify-center relative">
          {imageContent1 && (
            <div
              className={`-z-10 bg-${colorTheme} bg-opacity-15 w-5/12 h-40 absolute right-0 top-0 mdmax:-mr-32`}
            ></div>
          )}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`space-y-8 px-5 max-w-lg mdmax:order-2 mt-4 xl:mt-12`}
          >
            {dataCard1?.[0]?.textTitle && (
              <h1 className="text-2xl text-[#3D3D3D] font-bold uppercase">
                {parseHTMLToReact(dataCard1?.[0]?.textTitle)}
              </h1>
            )}
            {dataCard1?.[0]?.textDesc && (
              <h2 className="text-sm text-[#521452]">
                {parseHTMLToReact(dataCard1?.[0]?.textDesc)}
              </h2>
            )}
            {dataCard1?.[0]?.listMenu &&
              dataCard1?.[0]?.listMenu.length > 0 && (
                <div className="flex gap-5 mt-5">
                  {dataCard1?.[0]?.listMenu.map((item, index) =>
                    item.image ? (
                      <Link
                        key={index}
                        href={item.urlLink ?? ''}
                        className="flex flex-col items-center gap-3 group/menu"
                      >
                        {item.image && (
                          <div
                            className={`p-5 xl:p-8 bg-${colorTheme} rounded-full`}
                          >
                            <Image
                              className="w-8 h-8 xl:w-10 xl:h-10"
                              src={item.image}
                              width={1000}
                              height={1000}
                              alt={`image-${item.image}`}
                            />
                          </div>
                        )}
                        {item.textLink && (
                          <h2
                            className={`text-${colorTheme} text-sm group-hover/menu:underline`}
                          >
                            {item.textLink}
                          </h2>
                        )}
                      </Link>
                    ) : (
                      <Link key={index} href={item.urlLink ?? ''}>
                        <div
                          className={`px-5 py-3 bg-${colorTheme} rounded-3xl hover:opacity-10`}
                        >
                          {item.textLink && (
                            <h2 className={`text-white text-sm uppercase`}>
                              {item.textLink}
                            </h2>
                          )}
                        </div>
                      </Link>
                    )
                  )}
                </div>
              )}
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mdmax:order-1 md:max-w-[50%] flex items-center"
          >
            {imageContent1 && (
              <Image
                src={imageContent1}
                className="w-full h-auto md:w-[50vh] lg:w-full lg:h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent1}`}
              />
            )}
          </motion.div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex md:flex-row flex-col justify-center relative"
        >
          {imageContent2 && (
            <div
              className={`-z-10 bg-${colorTheme} bg-opacity-15 w-5/12 h-40 absolute left-0 top-0 mdmax:-ml-32`}
            ></div>
          )}
          <div className="mdmax:order-1 md:max-w-[50%] flex items-center">
            {imageContent2 && (
              <Image
                src={imageContent2}
                className="w-full h-auto md:w-[50vh] lg:w-full lg:h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent2}`}
              />
            )}
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`space-y-8 pl-10 px-5 max-w-lg mdmax:order-2 mt-4 xl:mt-12`}
          >
            {dataCard2?.[0]?.textTitle && (
              <h1 className="text-2xl text-[#3D3D3D] font-bold uppercase">
                {parseHTMLToReact(dataCard2?.[0]?.textTitle)}
              </h1>
            )}
            {dataCard2?.[0]?.textDesc && (
              <h2 className="text-sm text-[#521452]">
                {parseHTMLToReact(dataCard2?.[0]?.textDesc)}
              </h2>
            )}
            {dataCard2?.[0]?.listMenu &&
              dataCard2?.[0]?.listMenu.length > 0 && (
                <div className="flex gap-5 mt-5">
                  {dataCard2?.[0]?.listMenu.map((item, index) =>
                    item.image ? (
                      <Link
                        key={index}
                        href={item.urlLink ?? ''}
                        className="flex flex-col items-center gap-3 group/menu"
                      >
                        {item.image && (
                          <div
                            className={`p-5 xl:p-8 bg-${colorTheme} rounded-full`}
                          >
                            <Image
                              className="w-8 h-8 xl:w-10 xl:h-10"
                              src={item.image}
                              width={1000}
                              height={1000}
                              alt={`image-${item.image}`}
                            />
                          </div>
                        )}
                        {item.textLink && (
                          <h2
                            className={`text-${colorTheme} text-sm group-hover/menu:underline`}
                          >
                            {item.textLink}
                          </h2>
                        )}
                      </Link>
                    ) : (
                      <Link key={index} href={item.urlLink ?? ''}>
                        <div
                          className={`px-5 py-3 bg-${colorTheme} rounded-3xl hover:opacity-10`}
                        >
                          {item.textLink && (
                            <h2 className={`text-white text-sm uppercase`}>
                              {item.textLink}
                            </h2>
                          )}
                        </div>
                      </Link>
                    )
                  )}
                </div>
              )}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
