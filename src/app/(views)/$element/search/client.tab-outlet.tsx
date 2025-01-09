'use client';

import Image from 'next/image';
import iconImage from '@/../../public/images/dummy/sentra-layanan-bri-prioritas.png';
import { Tooltip } from '@/lib/element/global/tooltip';

type T_TabsProps = {
  list: {
    title: string;
    information?: string;
    slug: string;
  }[];
  value: string;
  onChange: (_value: string) => void;
  variant?: 'full' | 'border-arrow' | 'border';
};
export function CE_TabsOutlet({
  list,
  value,
  onChange,
  variant = 'border',
}: T_TabsProps) {
  return (
    <>
      <div className="flex justify-center w-full space-x-2">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => onChange(item.slug)}
              className={[
                `w-40 flex-1 justify-center items-start p-2 border-b cursor-pointer relative  text-center`,
                variant === 'full' ? 'py-3 ' : 'pb-3 ',
                item.slug === value
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
                    item.slug === value
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
                <div className="mr-2 text-sm pt-2">{item.title}</div>
                {item.information && <Tooltip description={item.information} />}
              </div>
              {variant === 'border-arrow' && (
                <div
                  className={[
                    'absolute bottom-0 left-0',
                    'w-full h-[.2rem] bg-bluedark01',
                    item.slug === value ? 'visible' : 'invisible',
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
                    item.slug === value ? 'visible' : 'invisible',
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
