'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant15Props = {
  title: string;
  button: {
    title: string;
    link: string;
    extern: boolean;
  };
  data: {
    image: string;
  }[];
};

export function CE_CardVariant15({
  data,
  title,
  button,
}: T_CardVariant15Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className='flex items-center justify-between mb-5'>
          <div className='text-3xl font-semibold'>{parseHTMLToReact(title)}</div>
          <div>
            <Link
              href={button.link}
              extern={button.extern}
              target={button.extern ? '_blank' : ''}
            >
              <ButtonSecondary rounded='full' color='orange-01'>{button.title}</ButtonSecondary>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={[index === 0 ? "w-[50%]" : 'w-1/4 ',"mdmax:w-full flex-none px-2 mb-4"].join(' ')}
              >
                <div className='w-full h-[15rem] rounded-xl overflow-hidden'>
                  <Image
                    extern={true}
                    src={item.image}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
