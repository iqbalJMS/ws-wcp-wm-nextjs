'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';

export default function CE_PortletHeader({
  title,
  bgImage,
}: {
  title: string;
  bgImage: string;
}) {
  return (
    <>
      <div>
        <div className="relative bg-transparent lg:min-h-[25.75rem] mx-auto w-full ">
          <div
            className="relative h-[50vh] lg:mb-[3.125rem] w-full overflow-hidden bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black before:to-black before:opacity-40"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage ?? '/images/no-image.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute w-full h-full flex flex-col pl-12 justify-center items-center">
              <div className="mb-6 max-w-[40.125rem]">
                {title && (
                  <div className="text-white text-4xl font-extrabold mb-3 text-center uppercase">
                    {parseHTMLToReact(title)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
