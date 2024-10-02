'use client';

import { ChevronRightIcon } from '@/lib/element/global/chevron-right-icon';
import { ChevronUpIcon } from '@/lib/element/global/chevron-up-icon';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import React from 'react';

type T_InfoSahamMainProps = {
  stockId: string;
  lastUpdate: string;
  buyPrice: string;
  cumulativeVol: string;
  low: string;
  high: string;
  low52WKS: string;
  high52WKS: string;
  percentChange: string;
};

export default function CE_InfoSahamMain({
  stockId,
  lastUpdate,
  buyPrice,
  cumulativeVol,
  low,
  high,
  low52WKS,
  high52WKS,
  percentChange,
}: T_InfoSahamMainProps) {
  const social_media = [
    {
      name: '',
      icon: 'facebook',
      url: 'https://www.facebook.com/BRIofficialpage',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'instagram',
      url: 'https://www.instagram.com/bankbri_id',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'twitter',
      url: 'https://x.com/kontakbri',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'youTube',
      url: 'https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA',
      className: 'text-blue-01 ',
    },
  ];
  const [isSosmedOpen, setIsSosmedOpen] = React.useState(false);
  return (
    <section className="container py-10">
      <div className="p-10 rounded-md shadow-md space-y-8">
        <div className="flex md:flex-row flex-col justify-between items-center gap-4">
          <div>
            <h3 className="text-3xl font-bold mb-3">Info Saham BRI</h3>
            <p>{`Pembaharuan terakhir ${lastUpdate.substring(0, 4)}/${lastUpdate.substring(4, 6)}/${lastUpdate.substring(6, 8)} ${lastUpdate.substring(9)} WIB Untuk transaksi kurang dari eq. USD 2.500`}</p>
          </div>
          <Link
            className="flex items-center text-blue-01 font-medium"
            href={'#'}
          >
            Lebih Lanjut
            <ChevronRightIcon
              width={20}
              height={20}
              className="ml-2 stroke-blue-01"
            />
          </Link>
        </div>
        <div className="flex divide-y-2 md:flex-row md:divide-x-2 md:divide-y-0 divide-x-0 flex-col">
          <div className="flex md:flex-row flex-col justify-between md:w-1/2 w-full p-4">
            <div className="flex md:flex-col flex-row gap-2 items-center">
              <div
                onClick={() => setIsSosmedOpen((prev) => !prev)}
                className="flex items-center mb-3"
              >
                {stockId}
                <Image
                  className="ml-2"
                  src="/images/icon-menu/config.png"
                  width={20}
                  height={20}
                  alt="Share Stock BBRI"
                />
              </div>
              <div
                className={`justify-start items-center gap-6 ${isSosmedOpen ? 'hidden' : 'flex'}`}
              >
                {social_media?.map(({ url, icon }, index) => (
                  <Link
                    extern={true}
                    href={url ?? '/'}
                    key={index}
                    className="text-blue-02 flex items-center gap-2 lg:mb-3 mb-2 lg:text-sm text-sm justify-center lg:justify-start font-normal"
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
            </div>
            <div>
              <p className="text-2xl text-blue-01 font-medium md:text-end text-start">
                {buyPrice}
              </p>
              <div>
                {buyPrice < high ? (
                  <div className="flex items-center gap-2">
                    <ChevronUpIcon
                      width={30}
                      height={30}
                      className="stroke-green-500"
                    />
                    <p className="text-2xl text-blue-01 font-medium">
                      {`+${Number(high) - Number(buyPrice)}.00(+${percentChange}%)`}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ChevronUpIcon
                      width={30}
                      height={30}
                      className="stroke-red-01"
                    />
                    <p className="text-2xl text-blue-01 font-medium">
                      {`-${Math.abs(Number(high) - Number(buyPrice))}.00(-${percentChange}%)`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:w-1/2 w-full grid-cols-1 p-4 gap-3">
            <h3 className="col-span-1">Volume</h3>
            <p className="col-span-1 text-2xl text-blue-01 font-medium">
              {cumulativeVol}
            </p>
            <h3 className="col-span-1 ">Day&apos;s Range</h3>
            <p className="col-span-1 text-2xl text-blue-01 font-medium">{`${low} - ${high}`}</p>
            <h3 className="col-span-1">52wk Range</h3>
            <p className="col-span-1 text-2xl text-blue-01 font-medium">{`${low52WKS} - ${high52WKS}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
