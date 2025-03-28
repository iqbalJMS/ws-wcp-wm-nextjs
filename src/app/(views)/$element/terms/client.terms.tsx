import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';

export default function CE_Terms({ desc }: { desc: string }) {
  return (
    <div className="w-full p-5 flex justify-center">
      <div className="w-full md:w-10/12 lg:w-10/12 xl:w-11/12 2xl:w-8/12 font-normal text-sm leading-5 parsehtml">
        {parseHTMLToReact(desc)}
      </div>
    </div>
  );
}
