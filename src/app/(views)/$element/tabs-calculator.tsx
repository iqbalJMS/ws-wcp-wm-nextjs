'use client';
import React, { useState } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

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
      <div className="w-full rounded-lg shadow-lg border flex flex-col justify-center items-center py-10">
        <div className="flex w-6/12 border-b-2 border-wmcolor">
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
              {item?.title}
            </div>
          ))}
        </div>
        <div className="rounded-b-lg p-6 w-6/12">
          {data?.map((item, index) => (
            <div
              key={index}
              className={
                toggle === index ? 'content w-96 active-content' : 'content'
              }
            >
              <h1 className="text-center text-2xl font-bold tracking-wider py-5">
                {parseHTMLToReact(item?.content)}
              </h1>
              <h2 className="">{item?.simulation}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
