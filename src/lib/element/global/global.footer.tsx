'use server';

import React from 'react';
import Image from './image';
import Link from './link';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-main-footer.type';
import { T_ResponseGetBottomFooterMenu } from '@/api/footer/bottom-footer/api.get-bottom-footer.type';

type T_FooterProps = {
  main_footer: T_ResponseGetMainFooterMenu;
  bottom_footer: T_ResponseGetBottomFooterMenu;
};

type T_RowElementProps = {
  label?: string;
  listItem?: Array<{
    name: string;
    icon?: string;
    extern?: boolean;
    className?: string;
    url?: string;
  }>;
  listImage?: Array<{
    image: string;
    extern?: boolean;
  }>;
  socialMedia?: Array<{
    name?: string;
    icon: string;
    url: string;
  }>;
};

const RowElement = ({
  label,
  listItem,
  listImage,
  socialMedia,
}: T_RowElementProps) => {
  return (
    <>
      <h1 className="text-[#9F9F9F] lg:mb-6 mb-4 font-semibold lg:text-xl text-lg">
        {label}
      </h1>
      {listItem?.length !== 0 && (
        <div className="flex flex-col gap-6">
          {listItem?.map(({ name, icon, url, extern, className }) => (
            <Link
              extern={extern}
              href={url ?? '/'}
              key={name}
              className={`flex items-start gap-2 text-sm font-normal ${className}`}
            >
              {icon && (
                <Image
                  extern={false}
                  src={`/images/footers/${icon}.svg`}
                  width={20}
                  height={20}
                  alt={`icon-${icon}`}
                />
              )}
              {name}
            </Link>
          ))}
        </div>
      )}
      {socialMedia?.length !== 0 && (
        <div className="flex items-center gap-6">
          {socialMedia?.map(({ url, icon }, index) => (
            <Link extern={true} href={url ?? '/'} key={index}>
              {icon && (
                <Image
                  src={`/images/footers/${icon}.svg`}
                  width={18}
                  height={18}
                  alt={`icon-${icon}`}
                  extern={false}
                />
              )}
            </Link>
          ))}
        </div>
      )}
      {listImage?.length !== 0 && (
        <div className="flex items-center gap-4">
          {listImage?.map(({ image }, index) => (
            <Image
              key={index}
              src={`/images/footers/${image}.png`}
              extern={false}
              width={200}
              height={200}
              className="w-auto max-w-full h-12"
              alt={`image-${index}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

type T_PropsTermsAllReservedElement = {
  listItem?: Array<{
    value: string;
    url: string;
    extern: boolean;
  }>;
  socialMedia?: Array<{
    name?: string;
    icon: string;
    url: string;
  }>;
};

function TermsAllReservedElement({
  listItem,
  socialMedia,
}: T_PropsTermsAllReservedElement) {
  return (
    <div className="bg-black lg:py-[1.375rem] py-4">
      <div className="flex justify-between items-center lg:flex-row flex-col container lg:px-0 px-4">
        <p className="text-white font-normal text-sm">
          © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.
        </p>

        <div className="mt-6 lg:mt-0 mdmax:w-full">
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex justify-start items-center lg:px-4 px-0 lg:py-0 py-4 lg:border-0 border-b border-[white] mdmax:w-full mdmax:justify-center">
              {listItem?.map(({ extern, url, value }, index) => (
                <div key={index}>
                  <Link
                    href={url}
                    extern={extern}
                    className="text-sm font-normal text-white"
                  >
                    {value}
                  </Link>
                  {index + 1 !== listItem.length && (
                    <span className="text-white mx-2">&#x2022;</span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-white lg:block hidden">|</div>
            {socialMedia?.length !== 0 && (
              <div className="flex items-center gap-6 lg:px-4 px-0 lg:py-0 py-4">
                {socialMedia?.map(({ url, icon }, index) => (
                  <Link extern={true} href={url ?? '/'} key={index}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function GlobalFooter({
  main_footer,
  bottom_footer,
}: T_FooterProps) {
  return (
    <footer className="pt-6 lg:pt-11 shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)] bg-[#1C1C1C]">
      <div className="container lg:mb-6 py-5">
        <div className="flex flex-wrap justify-center lg:mt-6 mt-3">
          {main_footer?.data?.map((list_item, index) => (
            <div className="lg:w-1/3 w-full lg:mb-0 mb-4" key={index}>
              <RowElement
                label={String(list_item?.title ?? '')}
                listItem={list_item?.listItem ?? []}
                listImage={list_item?.listImage ?? []}
                socialMedia={list_item?.socialMedia ?? []}
              />
            </div>
          ))}
        </div>
      </div>

      <TermsAllReservedElement
        listItem={bottom_footer?.data.listItem ?? []}
        socialMedia={bottom_footer?.data.socialMedia}
      />
    </footer>
  );
}
