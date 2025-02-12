'use client';

import React from 'react';
import Link from 'next/link';

export default function CE_PortletVariant03({
  buttonLink,
  bgImage,
  buttonText,
}: {
  bgImage: string;
  variant: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <>
      <div>
        <div className=" bg-transparent lg:min-h-[25.75rem] mx-auto w-full ">
          <div
            className=" h-[50vh] lg:mb-[3.125rem] w-full bg-cover "
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage ?? ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            <div className="w-full flex justify-center">
              <div className="w-8/12 mt-20">
                <Link
                  className="bg-white text-sm duration-150 hover:bg-prioritycolor font-medium rounded-full px-5 py-3 cursor-pointer text-blue hover:text-white uppercase"
                  href={buttonLink ?? '/404'}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
