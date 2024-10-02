'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant04Props = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    subDescription: string;
    button: {
      title: string;
      link: string;
      image: string;
      extern: boolean;
    };
  }[];
};

export function CE_CardVariant04({ data }: T_CardVariant04Props) {
  return (
    <>
      <div className=" py-10 container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/3 mdmax:w-full flex-none px-5 mb-10"
              >
                <Link
                  href={item.button.link}
                  extern={item.button.extern}
                  target={item.button.extern ? '_blank' : ''}
                >
                  <div className="bg-white p-10 shadow-lg rounded-br-[5rem] hover:bg-blue-01 group">
                    <div>
                      <div className="text-base font-medium text-blue-02 group-hover:text-white">
                        {parseHTMLToReact(item.subTitle)}
                      </div>
                      <div className="text-xl font-medium text-blue-02 group-hover:text-white mb-4">
                        {parseHTMLToReact(item.title)}
                      </div>
                      <div className="mb-5 text-base  h-[4.5rem] group-hover:text-white overflow-auto overflow-custom">
                        {parseHTMLToReact(item.description)}
                      </div>
                      <div className="mb-5 text-base group-hover:text-white ">
                        {parseHTMLToReact(item.subDescription)}
                      </div>
                      <div>
                        <div className="inline-flex items-center text-red-01 group-hover:text-white">
                          <div className="w-5 h-5 mr-2">
                            <Image
                              extern={true}
                              src={item.button.image}
                              alt="image"
                              width={1920}
                              height={1080}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>{item.button.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
