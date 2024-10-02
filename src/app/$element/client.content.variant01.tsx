'use client';

import { T_ContentMainProps } from '@/app/$action/constants';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

export function CE_ContentVariant01({
  data,
  title,
}: Omit<T_ContentMainProps, 'variant'>) {
  return (
    <>
      <div className="container py-20">
        <div className="mb-5">
          <div className="text-2xl font-semibold">{title}</div>
        </div>
        <div className="flex flex-wrap -mx-2">
          {data.map((dataItem, index) => (
            <div key={index} className="w-1/4 mdmax:w-1/2 flex-none px-2 mb-4">
              <Link href={dataItem.button?.link || ''} target="_blank">
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-5">
                    <Image
                      extern={true}
                      src={dataItem.image}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-blue-01 font-semibold">
                    {dataItem.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
