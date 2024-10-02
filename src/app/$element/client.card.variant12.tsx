'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

type T_CardVariant12Props = {
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

export function CE_CardVariant12({ data }: T_CardVariant12Props) {
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
                <div className="bg-white  shadow-lg rounded-br-[5rem] overflow-hidden">
                  <div className="w-full h-[20rem] ">
                    <Image
                      extern={true}
                      src={item.image}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className='p-5 px-10 relative overflow-hidden'>
                    <div className='w-[15rem] h-[10rem] bg-blue-01 absolute -bottom-[6rem] -right-[4rem] transform rotate-[-30deg] z-0' 
                    ></div>
                    <div className="text-xl font-medium text-center  mb-2">
                      {item.title}
                    </div>
                    <div className="mb-20 text-base  text-center">
                      {item.description}
                    </div>
                    <div className="text-right relative z-10">
                      <Link
                        href={item.button.link}
                        extern={item.button.extern}
                        target={item.button.extern ? '_blank' : ''}
                      >
                        <div className='text-white text-xs inline-block transform rotate-[-30deg] pl-5'>
                          {item.button.title}
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
