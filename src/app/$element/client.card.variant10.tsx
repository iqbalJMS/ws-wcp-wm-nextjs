'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant10Props = {
  title: string;
  description: string;
};

export function CE_CardVariant10({ title, description }: T_CardVariant10Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        <div className='border border-orange-01 p-10 rounded-xl'>
          <div className='mb-5 text-2xl font-semibold'>{parseHTMLToReact(title)}</div>
          <div>{parseHTMLToReact(description)}</div>
        </div>
      </div>
    </>
  );
}
