import React from 'react';
import LocationIcon from '@/lib/element/global/location-icon';
import Link from 'next/link';
import Image from 'next/image';

export default function CE_CardOutletMap() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-9/12 md:w-9/12 lg:w-7/12 xl:w-6/12 h-80 flex flex-col-reverse md:flex-row border-[1px] shadow-2xl">
          <section className="bg-white w-full h-80 p-10 md:p-5 lg:p-7 ">
            <div>
              <h1 className="text-2xl font-extrabold text-privatecolor leading-7 ">
                BRI PRIVATE SIGNATURE OUTLET
              </h1>
            </div>
            <div className="pb-24 pt-5 xl:pt-8">
              <h1 className="text-base xl:text-base w-64">
                Gedung BRI 2 Lantai 2 ​​​​​​​Jl. Jendral Sudirman Kav. 44-46
                Jakarta 10210, Indonesia
              </h1>
            </div>
            <div className="flex items-center">
              <LocationIcon
                className="text-privatecolor"
                stroke="#A28F52"
                width={20}
              />
              <Link
                href={''}
                className="pl-1 capitalize hover:underline text-privatecolor text-sm"
              >
                lihat di map
              </Link>
            </div>
          </section>
          <section className=" w-full h-80">
            <Image
              src={''}
              alt={''}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </section>
        </div>
      </div>
    </>
  );
}
