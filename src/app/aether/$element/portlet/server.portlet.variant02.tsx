'use server';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { T_PortletProps } from '@/app/aether/$element/types/portlet';

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
    <div>
      <div className="relative bg-transparent lg:min-h-[25.75rem] mx-auto w-full ">
        <div
          className="relative h-[25.75rem] lg:mb-[3.125rem] w-full overflow-hidden bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black before:to-[#014a94] before:opacity-40"
          style={{
            backgroundImage: `url(${background ?? '/images/no-image.png'})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute h-full flex flex-col pl-12 justify-center">
            <div className="mb-3 max-w-[34.125rem]">
              {title && (
                <div className="text-white text-[1.75rem] font-semibold mb-3">
                  {parseHTMLToReact(title)}
                </div>
              )}
              {subtitle && (
                <div className="text-white font-normal text-2xl leading-9">
                  {parseHTMLToReact(subtitle)}
                </div>
              )}
            </div>
            {buttonItems && (
              <div className="flex gap-4">
                {buttonItems.map(({ buttonText, buttonLink }, index) => (
                  <Link href={buttonLink ?? ''} extern key={index}>
                    <button className="font-semibold px-20 capitalize text-sm bg-orange-01 hover:bg-orange-01/90 lg:rounded-xl rounded-lg py-4 text-white">
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
  );
}
