'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant07Props = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    button: {
      title: string;
      link: string;
      extern: boolean;
    };
  }[];
};

export function CE_CardVariant07({ data }: T_CardVariant07Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-full flex-none px-5 mb-10">
                <div className="flex mdmax:flex-wrap bg-white shadow-xl">
                  <div className="w-[40%] mdmax:w-full flex-none">
                    <div className="w-full h-[17rem] rounded-br-[5rem] overflow-hidden">
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
                  <div className="flex-1">
                    <div className="p-10 mdmax:p-5">
                      <div className="text-2xl font-semibold text-line-1 mb-2">
                        {parseHTMLToReact(item.title)}
                      </div>
                      <div className="text-black text-opacity-70 mb-2">
                        {parseHTMLToReact(item.subTitle)}
                      </div>
                      <div className="text-black text-opacity-70 mb-12">
                        {parseHTMLToReact(item.description)}
                      </div>
                      <div className="text-right">
                        <Link
                          href={item.button.link}
                          extern={item.button.extern}
                          target={item.button.extern ? '_blank' : ''}
                        >
                          <div className="inline-block text-blue-01 text-base">
                            {item.button.title} &#10095;
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
