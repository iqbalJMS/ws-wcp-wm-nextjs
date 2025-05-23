'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant8Upper({
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
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center pt-10">
        <div className="w-8/12">
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {firstColumn?.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item.image ?? ''})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                key={index}
                className="group cursor-pointer lg:mr-3 lg:col-start-1 lg:col-span-2 w-full h-72 relative overflow-hidden flex justify-center items-center hover:shadow-[8px_10px_rgba(0,0,0,0.3)] transition-all duration-200"
              >
                <div className="group-hover:hidden z-20 text-center flex flex-col items-center space-y-5">
                  <h1 className=" text-white text-3xl uppercase font-bold">
                    {item?.title}
                  </h1>
                  <hr className="w-16 text-lg" style={{ height: 5 }} />
                </div>
                <div className="bg-[#161A39] opacity-40 w-full h-full absolute z-10"></div>

                <Link
                  href={`/${item?.link ?? '/404'}`}
                  className="opacity-0 flex group-hover:opacity-80 flex-col justify-center items-center space-y-3 bg-[#141838]  w-full h-full z-20 absolute bottom-0 transition-all ease-in-out duration-500 text-white"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl uppercase font-extrabold">
                    {item?.title}
                  </h1>
                  <h2 className="text-center font-light text-base px-20 md:px-5 xl:px-10 2xl:px-40">
                    {parseHTMLToReact(item?.desc)}
                  </h2>
                  <h2 className="pb-4 underline text-base font-semibold uppercase">
                    {item.titleLink}
                  </h2>
                  <hr className="w-16" />
                </Link>
              </div>
            ))}
            {secondColumn?.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item.image ?? ''})`,
                  backgroundPosition: 'center',
                }}
                key={index}
                className="w-full group cursor-pointer h-72 lg:col-start-3 lg:col-span-3 relative overflow-hidden flex justify-center items-center hover:shadow-[8px_10px_rgba(0,0,0,0.3)] transition-all duration-200"
              >
                <div className="group-hover:hidden z-20 text-center flex flex-col items-center space-y-5">
                  <h1 className=" text-white text-3xl uppercase font-bold">
                    {item?.title}
                  </h1>
                  <hr className="w-16 text-lg" style={{ height: 5 }} />
                </div>
                <div className="bg-[#161A39] opacity-40 w-full h-full absolute z-10"></div>
                <Link
                  href={`/${item?.link ?? '/404'}`}
                  className="opacity-0 flex flex-col group-hover:opacity-90 justify-center items-center space-y-3 bg-[#141838] w-full h-full z-20 absolute bottom-0 transition-all ease-in-out duration-500 text-white"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl uppercase font-extrabold">
                    {item?.title}
                  </h1>
                  <h2 className="text-center font-light text-base px-20 md:px-5 xl:px-10 2xl:px-40">
                    {parseHTMLToReact(item?.desc)}
                  </h2>
                  <h2 className="pb-4 underline text-base font-semibold uppercase">
                    {item.titleLink}
                  </h2>
                  <hr className="w-16" />
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
