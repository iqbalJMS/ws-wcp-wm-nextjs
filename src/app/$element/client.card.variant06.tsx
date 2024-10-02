'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant06Props = {
  title: string
  data: {
    title: string;
    description: string;
  }[];
};

export function CE_CardVariant06({ title, data }: T_CardVariant06Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className='text-center mb-10'>
          <div className='text-3xl font-semibold '>{title}</div>
        </div>
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 mdmax:w-full flex-none px-5 mb-10"
              >
                <div>
                  
                  <div className="text-xl  font-semibold mb-1 text-blue-01">
                    {parseHTMLToReact(item.title)}
                  </div>
                  <div className="text-xs h-[10rem] overflow-auto overflow-custom">
                    {parseHTMLToReact(item.description)}
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
