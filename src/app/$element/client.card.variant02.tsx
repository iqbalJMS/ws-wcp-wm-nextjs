'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

type T_CardVariant02Props = {
  data: {
    title: string;
    image: string;
    description: string;
    button: {
      title: string;
      link: string;
      extern: boolean;
    };
  }[];
};

export function CE_CardVariant02({ data }: T_CardVariant02Props) {
  return (
    <>
      <div className=" py-10 container">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/3 mdmax:w-full flex-none px-5 mb-10"
              >
                <div className="bg-white px-10 pb-10 pt-20 shadow-lg rounded-br-[5rem]">
                  <div className="w-[7rem] h-[7rem] mb-10">
                    <Image
                      extern={true}
                      src={item.image}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-blue-02 mb-2">
                      {item.title}
                    </div>
                    <div className="mb-5 text-base text-blue-01 h-[4.5rem] overflow-auto overflow-custom">
                      {item.description}
                    </div>
                    <div className="text-right">
                      <Link
                        href={item.button.link}
                        extern={item.button.extern}
                        target={item.button.extern ? '_blank' : ''}
                      >
                        <div className="w-10 h-10 rounded-full border border-blue-01 border-opacity-80 inline-flex items-center justify-center text-blue-01">
                          &#10095;
                        </div>
                      </Link>
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
