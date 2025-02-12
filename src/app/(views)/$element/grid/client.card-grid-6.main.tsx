'use client';

import React, { useEffect, useRef } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'motion/react';

const CE_CardGrid6Main = ({
  dataCard,
  variant,
}: {
  dataCard: Array<{
    title: string;
    image: string;
    description: string;
    nid: string;
  }>;
  variant: string;
}) => {
  let theme = '';

  if (variant == 'wm-private-main-navigation') {
    theme = 'privatecolor';
  } else if (variant == 'wm-prioritas-main-navigation') {
    theme = 'prioritycolor';
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
      <div className="container py-10 px-20 mdmax:px-10">
        <div ref={ref} className="flex flex-wrap -mx-10">
          {dataCard.map((item, index) => (
            <Link
              href={`/program-detail/${item?.nid ?? '/404'}`}
              key={index}
              className="w-1/3 mdmax:w-full flex-none px-10 mb-10"
            >
              <div className="bg-white shadow-xl cursor-pointer group">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="w-full h-[30rem]  overflow-hidden mb-2"
                >
                  {item?.image && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''}`}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain object-top group-hover:scale-125 transform scale-100 transition ease-in-out duration-300"
                    />
                  )}
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="p-5"
                >
                  <div className={`text-${theme} text-xl font-bold mb-2`}>
                    {item?.title}
                  </div>
                  <div className="mb-5 text-slate-600">
                    {parseHTMLToReact(item?.description)}
                  </div>
                  <div>
                    <div
                      className={`text-${theme} uppercase text-sm inline-flex items-center justify-center gap-2`}
                    >
                      read more
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid6Main;
