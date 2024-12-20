import Image from 'next/image';
import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_Travel({
  firstColumnProps,
  secondColumnProps,
}: {
  firstColumnProps: Array<{ title: string; desc: string; label: string }>;
  secondColumnProps: Array<{ image: string }>;
}) {
  return (
    <>
      <div className="w-full h-fit flex justify-center ">
        <div className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 flex flex-col md:flex-row-reverse ">
          <section className="w-full h-full flex items-center justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${secondColumnProps?.[0]?.image}`}
              alt={''}
              width={500}
              height={500}
              className="w-full h-full md:w-9/12"
            />
          </section>
          <section className="w-full h-full p-3 flex flex-col justify-center">
            {firstColumnProps?.map((item, index) => (
              <div key={index} className="space-y-5 pt-5">
                <h1 className="capitalize text-prioritycolor text-base">
                  {parseHTMLToReact(item?.title)}
                </h1>
                {/* <ul className="list-disc pl-10 space-y-4 text-[15px]">
                  <li>{item?.desc}</li>
                </ul>
                <Link
                  className="group uppercase text-prioritycolor font-bold flex items-center"
                  href={'#'}
                >
                  <h1 className="group-hover:underline">{item?.label}</h1>
                  <ArrowRightIcon
                    stroke="#000000"
                    width={20}
                    height={20}
                    className="ml-3 group-hover:translate-x-2 duration-200"
                  />
                </Link> */}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
