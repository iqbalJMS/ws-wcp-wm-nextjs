'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant14Props = {
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

export function CE_CardVariant14({ data }: T_CardVariant14Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-1/3 mdmax:w-full flex-none px-5 mb-10">
                <div className=" bg-white shadow-xl rounded-br-[5rem] relative overflow-hidden">
                <div className="w-full absolute h-full  bg-orange-01 bg-opacity-50 top-0 left-0 z-10"/>
                  <div className="w-full absolute h-full  z-0">
                    <div className="w-full  h-full overflow-hidden">
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
                  <div className="relative z-20">
                    <div className="p-10 mdmax:p-10">
                      <div className="text-2xl font-semibold text-white text-line-1 mb-2">
                        {parseHTMLToReact(item.title)}
                      </div>
                      <div className="text-white mb-2">
                        {parseHTMLToReact(item.subTitle)}
                      </div>
                      <div className="text-white mb-5">
                        {parseHTMLToReact(item.description)}
                      </div>
                      <div className="text-left">
                        <Link
                          href={item.button.link}
                          extern={item.button.extern}
                          target={item.button.extern ? '_blank' : ''}
                        >
                          <div className="inline-block text-white text-base">
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
