import Image from 'next/image';
import React from 'react';

export default function CE_Privileges({
  firstColumn,
  secondColumn,
  variant,
}: {
  secondColumn: Array<{
    image: string;
  }>;
  firstColumn: Array<{
    content: string;
    desc: string;
    label: string;
    link: string;
    linkTitle: string;
  }>;
  variant: string;
}) {
  let theme = '';
  if (variant == 'wm-private-main-navigation') {
    theme = 'privatecolor';
  } else {
    theme = 'prioritycolor';
  }
  return (
    <>
      <div className="w-full h-fit flex justify-center ">
        <div className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 flex flex-col md:flex-row-reverse ">
          <section className="w-full h-full flex items-center justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${secondColumn?.[0]?.image ?? '/images/no-images.png'}`}
              alt={''}
              width={500}
              height={500}
              className="w-full h-80 object-contain"
            />
          </section>
          <section className="w-full h-full p-3 flex flex-col justify-center">
            {firstColumn?.map((item, index) => (
              <div key={index} className="space-y-5 pt-5">
                <h1
                  className={`capitalize text-${theme} text-lg font-bold`}
                  dangerouslySetInnerHTML={{ __html: item?.label ?? '' }}
                />
                <h1
                  className="capitalize text-prioritycolor text-base"
                  dangerouslySetInnerHTML={{ __html: item?.content ?? '' }}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
