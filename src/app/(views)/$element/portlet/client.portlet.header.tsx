'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';

export default function CE_PortletHeader({
  title,
  bgImage,
  subTitle,
}: {
  title: string;
  bgImage: string;
  subTitle: string;
}) {
  return (
    <>
      <div>
        <div className="relative bg-transparent lg:min-h-[25.75rem] mx-auto w-full">
          <div
            className="relative h-[65vh] lg:mb-[3.125rem] w-full overflow-hidden bg-cover bg-fixed before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black before:to-black before:opacity-40"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${bgImage ?? '/images/no-image.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            <div className="absolute w-full h-full flex flex-col justify-center items-center">
              <div className="mb-6 max-w-[40.125rem]">
                {title && (
                  <div className="text-white text-4xl font-extrabold mb-3 text-center uppercase">
                    {parseHTMLToReact(title)}
                  </div>
                )}
                {subTitle && (
                  <div className="text-white text-center font-normal md:text-base text-lg md:max-w-4xl leading-8 mdmax:text-center">
                    {parseHTMLToReact(subTitle)}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#D2D2D2] w-full h-5 absolute bottom-0 z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
