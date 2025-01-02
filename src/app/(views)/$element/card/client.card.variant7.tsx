import React from 'react';
import LocationIcon from '@/lib/element/global/location-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_CardOutlet({
  dataOutlet,
}: {
  dataOutlet: Array<{
    OfficeName: string;
    Address: string;
    phone: string;
    gmaps: string;
  }>;
}) {
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <section className="w-full 2xl:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2 place-items-center">
          {dataOutlet.map((item, index) => (
            <div
              key={index}
              className="bg-white-02 object h-60 w-72 xl:w-96 rounded-2xl flex flex-col justify-between p-5 border border-gray-300 shadow-2xl"
            >
              <div className="space-y-3">
                <h1 className="uppercase text-[#070059] text-xl font-extrabold hover:underline cursor-pointer">
                  {item.OfficeName}
                </h1>
                <h2 className="text-[#7D809D] font-light text-sm">
                  {parseHTMLToReact(item.Address)}
                </h2>
                <h3 className="text-sm text-[#7D809D]">{item.phone}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <LocationIcon className="" width={20} stroke="#070059" />
                <a
                  target="_blank"
                  href={`https://www.google.com/maps/place/${item?.gmaps}`}
                  className="text-[#3E4182] text-base hover:underline"
                >
                  Lihat di Peta
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
