'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_Travel({
  firstColumnProps,
  secondColumnProps,
  variant,
}: {
  firstColumnProps: Array<{ image: string }>;
  secondColumnProps: Array<{ content: string; desc: string; label: string }>;
  variant: string;
}) {
  let theme = '';
  if (variant == 'wm-private-main-navigation') {
    theme = 'privatecolor';
  } else {
    theme = 'prioritycolor';
  }

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full h-fit flex justify-center py-10">
        <div className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 flex flex-col md:flex-row ">
          <section
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${firstColumnProps?.[0]?.image ?? '/images/no-images.png'}`}
              alt={''}
              width={500}
              height={500}
              className="w-full h-80 object-contain"
            />
          </section>
          <section
            data-aos="fade-left"
            data-aos-duration="800"
            className="w-full h-full p-3 flex flex-col justify-center"
          >
            {secondColumnProps?.map((item, index) => (
              <div key={index} className="space-y-5 pt-5">
                <h1
                  className={`capitalize text-${theme} text-lg font-bold`}
                  dangerouslySetInnerHTML={{ __html: item?.label }}
                />
                <h1
                  className="capitalize text-prioritycolor text-base"
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
