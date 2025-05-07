'use client';
import React from 'react';
import Image from 'next/image';
import CE_ShareContent from '@/lib/element/global/share-content';
export default function CE_PromoDetailPrivate({
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
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${image ?? ''}`}
                width={1000}
                height={1000}
                alt="image bri prioritas"
                className="w-11/12"
              />
            </div>
            <div className="overflow-hidden w-full h-36 lg:h-32 lg:w-full space-y-5 flex flex-col justify-start lg:flex-row lg:justify-between lg:items-start px-5">
              <h1
                className="text-xl font-semibold"
                dangerouslySetInnerHTML={{
                  __html:
                    title.replace(
                      /\/sites\/default/g,
                      `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                    ) ?? '',
                }}
              />
              <CE_ShareContent />
            </div>
          </section>
          <section className="grid grid-cols-1 sm:flex flex-row ">
            <div className="sm:basis-1/4 px-5 border-b sm:border-b-0 border-[#D6D6D6] sm:w-60">
              <h1 className="font-light">Terms & Condition</h1>
            </div>
            <div className="sm:basis-4/5 p-5">
              <div
                className="text-privatecolor space-y-3 text-sm tracking-wide leading-6"
                dangerouslySetInnerHTML={{
                  __html:
                    terms.replace(
                      /\/sites\/default/g,
                      `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                    ) ?? '',
                }}
              />
            </div>
          </section>
          <div className="w-full pt-10 font-light">
            <div className="sm:hidden">
              <h1 className="py-3 border-y border-[#D6D6D6] px-5">
                Periode Promo
              </h1>
              <h2 className="text-privatecolor p-5 ">
                {formatDate(startDate ?? '')} - {formatDate(endDate ?? '')}
              </h2>
            </div>
            <div className="hidden sm:flex border-y border-[#D6D6D6] font-light p-5">
              <div className="w-[260px]">
                <h1 className="py-3">Periode Promo</h1>
              </div>
              <div>
                <h2 className="text-privatecolor py-3">
                  {formatDate(startDate ?? '')} - {formatDate(endDate ?? '')}
                </h2>
              </div>
            </div>
          </div>
          <div className="sm:hidden font-light">
            <h1 className="p-5 border-y border-[#D6D6D6]">Info Merchant</h1>
            <h2
              className="p-5 text-privatecolor"
              dangerouslySetInnerHTML={{
                __html:
                  merchant.replace(
                    /\/sites\/default/g,
                    `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                  ) ?? '',
              }}
            />
          </div>
          <div className="hidden sm:flex border-[#D6D6D6] font-light p-5">
            <div className="w-[260px]">
              <h1 className="py-3">Info Merchant</h1>
            </div>
            <div className="w-10/12">
              <h2
                className="pt-3 text-privatecolor"
                dangerouslySetInnerHTML={{
                  __html:
                    merchant.replace(
                      /\/sites\/default/g,
                      `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                    ) ?? '',
                }}
              />
            </div>
          </div>
          <div className="sm:hidden font-light">
            <h1 className="p-5 border-y border-[#D6D6D6]">Lokasi</h1>
            <h2 className="p-5 text-privatecolor">{lokasi ?? ''}</h2>
          </div>
          <div className="hidden sm:flex border-y border-[#D6D6D6] font-light p-5">
            <div className="w-[260px]">
              <h1 className="py-3">Lokasi</h1>
            </div>
            <h2 className="pt-3 text-privatecolor">{lokasi ?? ''}</h2>
          </div>
        </section>
      </div>
    </>
  );
}
