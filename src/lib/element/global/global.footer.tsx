'use server';

import React from 'react';
import Image from './image';
import Link from './link';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-main-footer.type';
import { T_ResponseGetBottomLeftFooter } from '@/api/footer/bottom-footer/api.get-bottom-left-footer.type';
import { T_ResponseGetBottomRightFooter } from '@/api/footer/bottom-footer/api.get-bottom-right-footer.type';

type T_FooterProps = {
  main_footer: T_ResponseGetMainFooterMenu;
  bottom_right_footer: T_ResponseGetBottomRightFooter;
  bottom_left_footer: T_ResponseGetBottomLeftFooter;
};

type T_RowElementProps = {
  label: string;
  socialMedia?: Array<{ name: string; icon: string; url: string }>;
  description: Array<{
    className?: string;
    name: string;
    icon?: string;
    url?: string;
    extern?: boolean;
  }>;
};

const RowElement = ({ description, label, socialMedia }: T_RowElementProps) => {
  return (
    <>
      <h1 className="text-[#9F9F9F] lg:mb-5 mb-2 font-semibold lg:text-xl text-lg">
        {label}
      </h1>
      {description?.map(({ className, name, icon, url, extern }) => (
        <Link
          extern={extern}
          href={url ?? '/'}
          key={name}
          className={`px-0 flex items-center gap-2 lg:mb-3 mb-2 lg:text-sm text-sm justify-start font-normal ${className}`}
        >
          {icon && (
            <Image
              src={`/images/footers/${icon}.svg`}
              width={18}
              height={18}
              alt={`icon-${icon}`}
            />
          )}
          {name}
        </Link>
      ))}
      {socialMedia?.length !== 0 && (
        <div className="flex justify-start items-center gap-6">
          {socialMedia?.map(({ url, icon }, index) => (
            <Link
              extern={true}
              href={url ?? '/'}
              key={index}
              className="text-white flex items-center gap-2 lg:mb-3 mb-2 lg:text-sm text-sm justify-center lg:justify-start font-normal"
            >
              {icon && (
                <Image
                  src={`images/footers/${icon}.svg`}
                  width={18}
                  extern={false}
                  height={18}
                  alt={`icon-${icon}`}
                />
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

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
    <div className="bg-black lg:py-[1.375rem] py-4">
      <div className="text-center flex items-center lg:flex-row flex-col lg:container justify-between lg:px-0 px-4 lg:items-center lg:justify-between">
        <p className="text-white boxiner inline font-normal text-sm !text-center">
          © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.
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
                    extern={true}
                    target="blank"
                    href={uri}
                    key={index}
                    className="text-white flex items-center gap-2  lg:text-sm text-sm justify-center font-normal hover:bg-blue-600 rounded-full p-1"
                  >
                    {icon && (
                      <Image
                        src={icon}
                        width={20}
                        extern={false}
                        height={20}
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
  );
}

export default async function GlobalFooter({
  main_footer,
  bottom_left_footer,
  bottom_right_footer,
}: T_FooterProps) {
  return (
    <footer className="pt-6 lg:pt-11 shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)] bg-[#1C1C1C]">
      <div className="container text-left lg:mb-6">
        <div className="grid lg:grid-cols-9 grid-cols-1 lg:space-x-6 lg:mt-6 mt-3">
          {main_footer?.data?.map((list_item, index) => (
            <div className="lg:col-span-2 col-span-1 lg:mb-0 mb-4" key={index}>
              <RowElement
                label={String(list_item?.title ?? '')}
                socialMedia={list_item?.social_media ?? []}
                description={list_item?.list ?? []}
              />
            </div>
          ))}
        </div>
      </div>

      <TermsAllReservedElement
        termsData={bottom_left_footer}
        socialMediaData={bottom_right_footer}
      />
    </footer>
  );
}
