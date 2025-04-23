'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function CE_RequirementBox({
  data,
  variant,
}: {
  data: Array<{ label: string; title: string }>;
  variant: string;
}) {
  let labelVariant = '';
  let color = '';

  if (variant == 'wm-prioritas-main-navigation') {
    labelVariant = 'persyaratan kartu';
  } else if (variant == 'wm-private-main-navigation') {
    labelVariant = 'ketentuan';
  }
  if (variant == 'wm-prioritas-main-navigation') {
    color = 'prioritycolor';
  } else if (variant == 'wm-private-main-navigation') {
    color = 'privatecolor';
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <>
      <div className=" w-full pt-10">
        <section className="w-full">
          <div
            data-aos="fade up"
            data-aos-duration="700"
            className="flex flex-col justify-center items-center"
          >
            <h1
              className={`w-fit pb-4 text-2xl xl:text-3xl font-bold text-center text-${color} uppercase`}
            >
              {labelVariant}
            </h1>
            <hr className="w-20 md:w-14 h-[2px] bg-black border-0 dark:bg-black" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center py-10 p-5">
          <div
            data-aos="fade up"
            data-aos-duration="500"
            className="w-full md:w-6/12 xl:w-5/12 rounded-xl shadow-xl border p-5 xl:p-10"
          >
            {data?.map((item, index) => (
              <div key={index} className="flex">
                <span className="border-r-[1px] w-5/12 xl:w-4/12 py-5 border-bluedark01 ">
                  <h1 className={`text-${color} font-semibold text-base`}>
                    {item?.label ?? 'label'}
                  </h1>
                </span>
                <span className="w-9/12 p-5 border-bluedark01">
                  <h2 className={`text-sm text-${color}`}>
                    {item?.title ?? 'title'}
                  </h2>
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
