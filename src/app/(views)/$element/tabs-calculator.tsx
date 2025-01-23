'use client';
import React, { useState } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import CE_InputTester from '@/app/tester-component/input';

export default function TabsCalculator({
  data,
}: {
  data: Array<{
    content: string;
    simulation: string;
    title: string;
    config: any;
  }>;
}) {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index: any) => {
    setToggle(index);
  };

  return (
    <>
      <div className="w-full rounded-lg shadow-lg border flex flex-col justify-center items-center py-10 px-3">
        <div className="flex w-full lg:w-9/12 xl:w-6/12 overflow-x-scroll md:overflow-x-hidden border-b-2 border-wmcolor">
          {data?.map((item, index) => (
            <div
              key={index}
              className={
                toggle === index
                  ? 'tabs bg-[#080087] text-white'
                  : 'tabs text-bluedark01'
              }
              onClick={() => toggleTab(index)}
            >
              <h1 className="text-xs md:text-sm ">{item?.title}</h1>
            </div>
          ))}
        </div>
        <div className="rounded-b-lg w-full lg:w-9/12 xl:w-6/12 ">
          {data?.map((item, index) => (
            <div
              key={index}
              className={
                toggle === index ? 'content w-full active-content' : 'content'
              }
            >
              <h1 className="text-center text-2xl font-bold tracking-wider py-5">
                {parseHTMLToReact(item?.content)}
              </h1>
              <CE_InputTester />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex w-full border-b-2 border-wmcolor">
          {data?.map((item, index) => (
            <div
              key={index}
              className={
                toggle === index
                  ? 'tabs active-tabs text-white'
                  : 'tabs text-bluedark01'
              }
              onClick={() => toggleTab(index)}
            >
              <h1 className="text-xs">{item?.title}</h1>
            </div>
          ))}
        </div> */
}
