'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant05Props = {
  data: {
    title: string;
    description: string;
  }[];
};

export function CE_CardVariant05({ data }: T_CardVariant05Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 mdmax:w-full flex-none px-5 mb-10"
              >
                <div>
                  <div className="text-[3rem] leading-[3rem] text-orange-01 font-semibold mb-4">
                    0{index + 1}
                  </div>
                  <div className="text-lg  font-semibold mb-1">
                    {parseHTMLToReact(item.title)}
                  </div>
                  <div className="text-line-3 text-sm">
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
