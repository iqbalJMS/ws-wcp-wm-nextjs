'use server';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';

export default async function SE_PortletVariant02({
  title,
  subtitle,
  buttonItems,
  bgImage,
}: Omit<T_PortletProps, 'variant'>) {
  const background = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/${bgImage}`
    : '';

  return (
    <>
      <div>
        <div className="relative bg-transparent lg:min-h-[25.75rem] mx-auto w-full ">
          <div
            className="relative h-[50vh] lg:mb-[3.125rem] w-full overflow-hidden bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black before:to-black before:opacity-40"
            style={{
              backgroundImage: `url(${background ?? '/images/no-image.png'})`,
              backgroundSize: 'cover',
              backgroundPositionY: 'center',
            }}
          >
            <div className="absolute w-full h-full flex flex-col pl-12 justify-center items-center">
              <div className="mb-3 max-w-[40.125rem]">
                {title && (
                  <div className="text-white text-2xl font-medium mb-3 text-center">
                    {parseHTMLToReact(title)}
                  </div>
                )}
                {subtitle && (
                  <div className="text-white font-light text-lg text-center pt-5">
                    {parseHTMLToReact(subtitle)}
                  </div>
                )}
              </div>
              {buttonItems && (
                <div className="flex gap-4">
                  {buttonItems.map(({ buttonText, buttonLink }, index) => (
                    <Link href={buttonLink ?? ''} extern key={index}>
                      <button className="font-semibold px-12 capitalize text-base bg-privatecolor hover:bg-white lg:rounded-full rounded-lg py-3 text-white hover:text-privatecolor duration-200">
                        {buttonText}
                      </button>
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
