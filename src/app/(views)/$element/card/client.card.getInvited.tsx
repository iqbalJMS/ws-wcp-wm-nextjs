'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_GetInvited({
  firstColumn,
  secondColumn,
}: {
  firstColumn: Array<{
    iconImage: string;
    linkCta: string;
    address: string;
    title: string;
  }>;
  secondColumn: Array<{
    iconImage: string;
    linkCta: string;
    address: string;
    title: string;
  }>;
}) {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center">
        <section>
          <h1 className="uppercase text-xl text-prioritycolor font-extrabold">
            hubungi kami
          </h1>
        </section>
        <section className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-5/12 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
          {firstColumn?.map((item, index) => (
            <div
              key={index}
              className="w-60 h-72 flex flex-col items-center justify-center shadow-2xl bg-white rounded-3xl hover:-translate-y-3 duration-300 cursor-pointer m-5 p-5 space-y-4 border"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.iconImage ?? ''}`}
                alt=""
                width={80}
                height={80}
                className=""
              />
              <Link
                href={'#'}
                className="capitalize text-lg font-bold text-prioritycolor hover:underline"
              >
                {item?.title}
              </Link>
              <h1 className="capitalize text-center text-sm text-[#7992BF]">
                {parseHTMLToReact(item?.address)}
              </h1>
            </div>
          ))}
          {secondColumn?.map((item, index) => (
            <div
              key={index}
              className="w-60 h-72 flex flex-col items-center justify-center shadow-2xl bg-white rounded-3xl hover:-translate-y-3 duration-300 cursor-pointer m-5 p-5 space-y-4 border"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.iconImage ?? ''}`}
                alt=""
                width={80}
                height={80}
                className=""
              />
              <Link
                href={'#'}
                className="capitalize text-lg font-bold text-prioritycolor hover:underline"
              >
                {item?.title}
              </Link>
              <h1 className="capitalize text-center text-sm text-[#7992BF]">
                {parseHTMLToReact(item?.address)}
              </h1>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
