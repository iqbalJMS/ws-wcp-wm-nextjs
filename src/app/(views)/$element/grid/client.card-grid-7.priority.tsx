'use client';

import React, { useEffect, useRef } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'motion/react';

const CE_CardGrid7Priority = ({
  dataCard,
  variant,
}: {
  dataCard: Array<{
    title: string;
    category: string;
    date: string;
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
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

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
      <div ref={ref} className="w-full py-10 flex justify-center">
        <div className="w-full xl:w-9/12 flex flex-wrap">
          <>
            {dataCard?.map((item, index) => (
              <Link
                key={index}
                href={`/article-detail-priority/${item?.nid ?? '/404'}`}
                className="w-1/2 xl:w-1/3 mdmax:w-full flex-none px-10 mb-10"
              >
                <div className="group">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="w-full h-60 rounded-xl overflow-hidden mb-5"
                  >
                    {item?.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''}`}
                        alt="image"
                        width={900}
                        height={900}
                        className="w-full h-96 object-cover object-bottom group-hover:scale-125 transform scale-100 transition ease-in-out duration-300"
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
                  >
                    <div className="text-xs text-black font-semibold uppercase">
                      <span className="pr-2">{item?.category ?? ''}</span> |
                      <span className="pl-3">
                        {formatDate(item?.date ?? '')}
                      </span>
                    </div>
                    <div
                      className={`text-${theme} line-clamp-2 leading-6 font-bold text-lg mb-1 pt-3`}
                    >
                      {parseHTMLToReact(item?.title)}
                    </div>
                    <div className="font-light line-clamp-3 text-[#BB907C]">
                      {parseHTMLToReact(item?.description)}
                    </div>
                  </motion.div>
                </div>
              </Link>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid7Priority;
