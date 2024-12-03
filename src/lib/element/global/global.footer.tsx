'use server';

import React from 'react';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-middle-footer.type';
import { T_ResponseGetBottomLeftFooter } from '@/api/footer/bottom-footer/api.get-bottom-left-footer.type';
import { T_ResponseGetBottomRightFooter } from '@/api/footer/bottom-footer/api.get-bottom-right-footer.type';
import Image from 'next/image';
import { T_ResponseGetMainMiddleFooter } from '@/api/footer/middle-main-footer/api.get-main-middle-footer.type';
import Link from 'next/link';

type T_FooterProps = {
  main_footer?: T_ResponseGetMainFooterMenu;
  middle_main_footer: T_ResponseGetMainMiddleFooter;
  bottom_right_footer: T_ResponseGetBottomRightFooter;
  bottom_left_footer: T_ResponseGetBottomLeftFooter;
};

function RowElement({
  data,
  middleData,
}: {
  data?: T_ResponseGetMainFooterMenu;
  middleData: T_ResponseGetMainMiddleFooter;
}) {
  return (
    <>
      <div className="w-full py-2 flex justify-center lg:flex-none">
        <div className="w-full md:w-10/12 lg:w-full h-full grid grid-cols-1 lg:grid-cols-3 px-5 xl:px-52 place-items-center ">
          <div className="w-full xl:w-80 h-44 flex flex-col items-start border-b lg:border-none border-white py-5 lg:py-0">
            <h1 className="text-[#B2B2B2] text-xl font-bold pb-3">
              Kantor Pusat BRI
            </h1>
            <div>
              <h1 className="text-white text-sm font-extralight">
                {data?.field_company_name?.[0]?.value}
              </h1>
            </div>
            <div className="flex items-start pt-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.field_company_address_icon?.[0]?.thumbnail?.[0]?.uri?.[0]?.url}`}
                width={30}
                height={30}
                alt=""
              />
              {data?.field_company_address?.map(({ value }, index) => (
                <div key={index} className="w-8/12 pl-2">
                  <h1 className="text-white text-sm font-extralight leading-7">
                    {value}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full xl:w-80 h-44 flex flex-col items-start border-b lg:border-none border-white py-5 lg:py-0">
            <h1 className="text-[#B2B2B2] text-xl font-bold pb-3">
              Hubungi Kami
            </h1>
            {middleData?.map(({ title, icon, alias }, index) => (
              <Link
                key={index}
                className="group hover:cursor-pointer flex items-start py-2 "
                href={`/${alias}`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${icon}`}
                  width={20}
                  height={20}
                  alt=""
                />
                <div className="w-full pl-3">
                  <h1 className="text-white group-hover:underline text-sm font-extralight">
                    {title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full xl:w-80 h-44 flex flex-col items-start py-5 lg:py-0">
            <h1 className="text-[#B2B2B2] text-xl font-bold pb-3">
              Terdaftar Dan Diawasi Oleh:
            </h1>
            <div className="flex items-center space-x-3">
              {data?.field_multiple_logo.map((item, index) => (
                <div key={index} className="w-40">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.thumbnail?.[0]?.uri?.[0]?.url}`}
                    width={100}
                    height={100}
                    alt=""
                    className="w-36 h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TermsAllReservedElement({
  termsData,
  socialMediaData,
}: {
  termsData: Array<{
    title: string;
    uri: string;
  }>;
  socialMediaData: Array<{
    icon: string;
    title: string;
    uri: string;
  }>;
}) {
  return (
    <>
      <div className="bg-black lg:py-[1.375rem] py-4">
        <div className="text-center flex items-center lg:flex-row flex-col lg:container justify-between lg:px-0 px-4 lg:items-center lg:justify-between">
          <p className="text-white boxiner inline font-normal text-sm !text-center">
            © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights
            Reserved.
          </p>

          <div className="items-center mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center items-center divide-x-2">
              <div className="flex justify-start items-center px-4">
                {termsData?.map(({ title, uri }, index) => (
                  <div key={index}>
                    <Link
                      href={uri}
                      className="text-sm font-normal text-white hover:underline"
                    >
                      {title}
                    </Link>
                    {index + 1 !== termsData.length && (
                      <span className="text-white mx-2">&#x2022;</span>
                    )}
                  </div>
                ))}
              </div>
              {socialMediaData?.length !== 0 && (
                <div className="flex justify-center items-center gap-6 px-4">
                  {socialMediaData?.map(({ uri, icon, title }, index) => (
                    <Link
                      target="blank"
                      href={uri}
                      key={index}
                      className="text-white flex items-center gap-2  lg:text-sm text-sm justify-center font-normal hover:bg-blue-600 rounded-full p-1"
                    >
                      {icon && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${icon}`}
                          width={16}
                          height={16}
                          alt={title}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default async function GlobalFooter({
  main_footer,
  middle_main_footer,
  bottom_left_footer,
  bottom_right_footer,
}: T_FooterProps) {
  return (
    <footer className="shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)] bg-[#1C1C1C]">
      <div className="w-full h-auto py-10">
        <div className="w-full">
          <RowElement data={main_footer} middleData={middle_main_footer} />
        </div>
      </div>

      <TermsAllReservedElement
        termsData={bottom_left_footer}
        socialMediaData={bottom_right_footer}
      />
    </footer>
  );
}
