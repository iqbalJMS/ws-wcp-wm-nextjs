'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

type T_CardVariant03Props = {
  data: {
    title: string;
    image: string;
    buttons: {
      title: string;
      link: string;
      extern: boolean;
    }[];
  }[];
};

export function CE_CardVariant03({ data }: T_CardVariant03Props) {
  return (
    <>
      <div className=" py-10 overflow-hidden">
        <div className="flex flex-wrap">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-full flex-none">
                <div className="h-[20rem]  relative z-0">
                  <div className="absolute top-0 left-0 bg-black bg-opacity-20 z-10 w-full h-full"></div>
                  <div className="absolute bottom-[40%] left-[50%] mdmax:left-0  z-20 w-full ">
                    <div className="px-[5rem] mdmax:px-[1rem]">
                      <div className="text-white text-3xl font-medium mb-5">
                        {item.title}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {item.buttons.map((buttonItem, buttonIndex) => (
                          <div key={buttonIndex}>
                            <Link
                              href={buttonItem.link}
                              extern={buttonItem.extern}
                              target={buttonItem.extern ? '_blank' : ''}
                            >
                              <ButtonSecondary
                                className="bg-orange-01"
                                rounded="full"
                                color="orange-01"
                              >
                                {buttonItem.title}
                              </ButtonSecondary>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full relative z-0">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
