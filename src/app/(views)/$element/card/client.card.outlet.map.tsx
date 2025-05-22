'use client';
import React from 'react';
import LocationIcon from '@/lib/element/global/location-icon';
import Link from 'next/link';
import Image from 'next/image';
import sanitizeUrl from '@/lib/functions/global/sanitizeUrl';

export default function CE_CardOutletMap({
  image,
  title,
  linkTitle,
  linkCta,
  desc,
}: {
  image: string;
  title: string;
  linkTitle: string;
  linkCta: string;
  desc: string;
}) {
  return (
    <>
      <div className="w-full h-96 pt-[50vh] md:pt-40 pb-60 flex justify-center items-center">
        <div className="w-9/12 md:w-9/12 lg:w-7/12 xl:w-5/12 h-80 flex flex-col-reverse md:flex-row border-[1px] shadow-2xl">
          <section className="bg-white w-full h-80 p-10 md:p-5 lg:p-7 ">
            <div>
              <h1 className="text-2xl font-extrabold text-privatecolor leading-7">
                {title}
              </h1>
            </div>
            <div className="pb-24 pt-5 xl:pt-8">
              <h1 className="text-base xl:text-base w-64">{desc ?? ''}</h1>
            </div>
            <div className="flex items-center">
              <LocationIcon
                className="text-privatecolor"
                stroke="#A28F52"
                width={20}
              />
              <Link
                href={sanitizeUrl(linkCta)}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-1 capitalize hover:underline text-privatecolor text-sm"
              >
                {linkTitle}
              </Link>
            </div>
          </section>
          <section className=" w-full h-80">
            <Image
              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${image ?? ''}`}
              alt={''}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </section>
        </div>
      </div>
    </>
  );
}
