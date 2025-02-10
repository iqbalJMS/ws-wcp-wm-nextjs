'use client';

import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { BREADCRUMB_KEY } from '@/app/(views)/$constant/variables';

export default function CE_PortletVariant02({
  title,
  subtitle,
  buttonLink,
  bgImage,
  variant,
  buttonText,
}: {
  title: string;
  subtitle: string;
  bgImage: string;
  variant: string;
  buttonText: string;
  buttonLink: string;
}) {
  let theme = '';
  let bgHover = '';
  let textColor = '';
  let textHover = '';

  if (variant == 'wm-private-main-navigation') {
    theme = 'privatecolor';
  } else if (variant == 'wm-main-navigation') {
    theme = 'wmcolor';
  } else {
    theme = 'white';
  }
  if (variant == 'wm-private-main-navigation') {
    bgHover = 'white';
  } else if (variant == 'wm-main-navigation') {
    bgHover = 'black';
  } else {
    bgHover = 'black';
  }
  if (variant == 'wm-private-main-navigation') {
    textColor = 'white';
  } else if (variant == 'wm-main-navigation') {
    textColor = 'white';
  } else {
    textColor = 'prioritycolor';
  }
  if (variant == 'wm-private-main-navigation') {
    textHover = 'privatecolor';
  } else if (variant == 'wm-main-navigation') {
    textHover = 'white';
  } else {
    textHover = 'white';
  }

  const generetBreadcrumb = (title: string) => {
    sessionStorage.setItem(
      BREADCRUMB_KEY,
      JSON.stringify([{ title: title, url: '#' }])
    );
  };

  return (
    <>
      <div>
        <div className="relative bg-transparent lg:min-h-[25.75rem] mx-auto w-full ">
          <div
            className="relative h-[50vh] lg:mb-[3.125rem] w-full overflow-hidden bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black before:to-black before:opacity-40"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute w-full h-full flex flex-col pl-12 justify-center items-center">
              <div className="mb-6 max-w-[40.125rem]">
                {title && (
                  <div className="text-white text-3xl font-semibold mb-3 text-center">
                    {parseHTMLToReact(title)}
                  </div>
                )}
                {subtitle && (
                  <div className="text-white font-light text-base text-center pt-4 px-2">
                    {parseHTMLToReact(subtitle)}
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <Link
                  href={buttonLink ?? ''}
                  onClick={() => generetBreadcrumb(buttonText ?? '')}
                >
                  <button
                    className={`font-semibold px-12 capitalize text-base bg-${theme} hover:bg-${bgHover} rounded-full py-3 text-${textColor} hover:text-${textHover} duration-200`}
                  >
                    {buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
