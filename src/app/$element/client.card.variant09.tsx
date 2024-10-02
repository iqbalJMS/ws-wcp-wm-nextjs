'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant09Props = {
  data: {
    title: string;
    description: string;

    button: {
      title: string;
      link: string;
      image: string;
      extern: boolean;
    };
  }[];
};

export function CE_CardVariant09({ data }: T_CardVariant09Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-full flex-none px-5 mb-10">
                <div className="rounded-xl bg-white shadow-xl">
                  
                  <div >
                    <div className="p-10 mdmax:p-5 flex mdmax:flex-col items-center mdmax:items-start justify-between">
                      <div className='mdmax:mb-5'>
                        <div className="text-2xl font-semibold text-blue-01 text-line-1 mb-2">
                          {parseHTMLToReact(item.title)}
                        </div>
                        
                        <div className="text-black text-opacity-70">
                          {parseHTMLToReact(item.description)}
                        </div>
                      </div>
                      <div className="text-right">
                        <Link
                          href={item.button.link}
                          extern={item.button.extern}
                          target={item.button.extern ? '_blank' : ''}
                        >
                          <div className="inline-flex text-blue-01 text-base">
                            <div className='w-5 h-5 mr-2'>
                              <Image
                                extern={true}
                                src={item.button.image}
                                alt="image"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {item.button.title}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
