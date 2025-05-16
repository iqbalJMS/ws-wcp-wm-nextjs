// import DistributionIcon from '@/lib/element/global/icons/distribution-icon';
// import GrowthIcon from '@/lib/element/global/icons/growth-icon';
// import ProtectionIcon from '@/lib/element/global/icons/protection-icon';
'use client';
import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';

export default function CE_TestCard({
  data,
  desctitle,
  title,
  subtitle,
}: {
  data: Array<{
    iconcard: string;
    labelcard: string;
    desccard: string;
  }>;
  desctitle: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center p-5">
        <section className="w-full lg:w-10/12 xl:w-8/12 grid grid-cols-1 md:grid-cols-2 pb-16">
          <div className="uppercase space-y-2 pb-5">
            {subtitle && (
              <h3 className="text-base font-light">
                {parseHTMLToReact(subtitle)}
              </h3>
            )}
            {title && (
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                {parseHTMLToReact(title)}
              </h1>
            )}
          </div>
          <div className="flex items-end">
            {desctitle && (
              <h1 className="text-sm md:text-base ">
                {parseHTMLToReact(desctitle)}
              </h1>
            )}
          </div>
        </section>
        <section className="w-full lg:w-10/12 xl:w-8/12 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.map((item, index: number) => (
            <div
              key={index}
              className="group w-full h-60 flex flex-col items-center justify-center hover:bg-black hover:rounded-b-xl duration-300"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.iconcard}`}
                alt={'icon-card'}
                width={90}
                height={90}
              />

              <h1 className="text-wmcolor font-bold text-base group-hover:text-white">
                {item?.labelcard}
              </h1>

              <h2 className="text-sm font-light group-hover:text-white">
                {parseHTMLToReact(item?.desccard)}
              </h2>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
