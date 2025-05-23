'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import iconImage from '@/../../public/images/dummy/sentra-layanan-bri-prioritas.png';
import { Tooltip } from '@/lib/element/global/tooltip';
import AOS from 'aos';
import 'aos/dist/aos.css';

type T_TabsProps = {
  list: {
    type_name: string;
    information?: string;
    type_id: string;
  }[];
  value?: string;
  onChange: (_value: string) => void;
  variant?: 'full' | 'border-arrow' | 'border';
};

export function CE_TabsOutlet({
  list,
  value,
  onChange,
  variant = 'border',
}: T_TabsProps) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="flex justify-center w-full space-x-2">
        {list.map((item, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              key={index}
              onClick={() => onChange(item.type_id)}
              className={[
                `w-40 flex justify-center items-start p-2 border-b cursor-pointer relative  text-center`,
                variant === 'full' ? 'py-3 ' : 'pb-3 ',
                item.type_id === value
                  ? variant === 'full'
                    ? 'bg-bluedark01'
                    : ''
                  : '',
              ].join(' ')}
            >
              <div
                className={[
                  'w-40 text-xl font-medium flex flex-col justify-center items-center',
                  `${
                    item.type_id === value
                      ? variant === 'full'
                        ? 'text-white'
                        : 'text-bluedark01'
                      : 'text-gray-500 group-hover/tab:text-bluedark01'
                  }`,
                ].join(' ')}
              >
                <Image
                  src={iconImage}
                  alt={''}
                  width={50}
                  height={50}
                  className="object-center"
                />
                <div className="mr-2 text-sm pt-2">{item.type_name}</div>
                {item.information && <Tooltip description={item.information} />}
              </div>
              {variant === 'border-arrow' && (
                <div
                  className={[
                    'absolute bottom-0 left-0',
                    'w-full h-[.2rem] bg-bluedark01',
                    item.type_id === value ? 'visible' : 'invisible',
                    'group-hover/tab:visible',
                  ].join(' ')}
                >
                  <div
                    className={`
                                    absolute top-[100%] left-1/2 transform -translate-x-1/2 
                                    border-l-[0.5rem] border-r-[0.5rem] border-t-[0.5rem] 
                                    border-l-transparent border-r-transparent border-bluedark01
                                    h-1 w-1`}
                  ></div>
                </div>
              )}
              {variant === 'border' && (
                <div
                  className={[
                    'absolute bottom-0 left-0',
                    'w-full h-[.2rem] bg-bluedark01',
                    item.type_id === value ? 'visible' : 'invisible',
                    'group-hover/tab:visible',
                  ].join(' ')}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
