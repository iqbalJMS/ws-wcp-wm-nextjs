'use client';
import React from 'react';
import Image from 'next/image';
import ShareIcon from '@/lib/element/global/icons/share-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';

export default function CE_CardVariant10({
  title,
  image,
  terms,
  startDate,
  endDate,
  merchant,
  lokasi,
}: {
  title: string;
  image: string;
  terms: string;
  startDate: string;
  endDate: string;
  merchant: string;
  lokasi: string;
}) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <section className="w-full lg:w-11/12 xl:w-7/12">
          <section className="w-full grid grid-cols-1 place-items-start space-y-5 pb-12">
            <div className="w-full flex justify-center md:flex-none lg:w-8/12">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${image}`}
                width={1000}
                height={1000}
                alt="image bri prioritas"
                className="w-11/12"
              />
            </div>
            <div className="w-full lg:w-full flex flex-col space-y-5 lg:flex-row justify-between items-center px-5">
              <h1 className="text-xl font-semibold">{title}</h1>
              <Link
                href={'#'}
                className="w-52 lg:w-60 flex items-center justify-center py-3 rounded-full uppercase font-bold text-base lg:text-xl text-white bg-[#080087] hover:bg-gray-600 duration-300"
              >
                <span className="pr-2">
                  <ShareIcon
                    className="text-white"
                    width={20}
                    height={20}
                    stroke=""
                  />
                </span>
                refer a friend
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-1 sm:flex flex-row">
            <div className="sm:basis-1/4 px-5 border-b sm:border-b-0 border-[#D6D6D6] sm:w-60">
              <h1 className="font-light">Terms & Condition</h1>
            </div>
            <div className="sm:basis-4/5 p-5">
              <div className="text-[#1738C1] space-y-3 text-sm tracking-wide leading-6">
                {parseHTMLToReact(terms)}
              </div>
            </div>
          </section>
          <div className="w-full pt-10 font-light">
            <div className="sm:hidden">
              <h1 className="py-3 border-y border-[#D6D6D6] px-5">
                Periode Promo
              </h1>
              <h2 className="text-[#1738C1] p-5 ">
                {formatDate(startDate)} - {formatDate(endDate)}
              </h2>
            </div>
            <div className="hidden sm:flex border-y border-[#D6D6D6] font-light p-5">
              <div className="w-[260px]">
                <h1 className="py-3">Periode Promo</h1>
              </div>
              <div>
                <h2 className="text-[#1738C1] py-3">
                  {formatDate(startDate)} - {formatDate(endDate)}
                </h2>
              </div>
            </div>
          </div>
          <div className="sm:hidden font-light">
            <h1 className="p-5 border-y border-[#D6D6D6]">Info Merchant</h1>
            <h2 className="p-5 text-[#1738C1]">{merchant}</h2>
          </div>
          <div className="hidden sm:flex border-[#D6D6D6] font-light p-5">
            <div className="w-[260px]">
              <h1 className="py-3">Info Merchant</h1>
            </div>
            <h2 className="pt-3 text-[#1738C1]">{merchant}</h2>
          </div>
          <div className="sm:hidden font-light">
            <h1 className="p-5 border-y border-[#D6D6D6]">Lokasi</h1>
            <h2 className="p-5 text-[#1738C1]">{lokasi}</h2>
          </div>
          <div className="hidden sm:flex border-y border-[#D6D6D6] font-light p-5">
            <div className="w-[260px]">
              <h1 className="py-3">Lokasi</h1>
            </div>
            <h2 className="pt-3 text-[#1738C1]">{lokasi}</h2>
          </div>
        </section>
      </div>
    </>
  );
}
