'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

export function CE_ContentVariant02() {
  const data = [
    {
      dummy: {
        link: '',
        image: '',
        title: '',
      },
      title: 'data dumy',
    },
  ];
  return (
    <>
      <div className=" py-10 border-t border-b border-black border-opacity-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center -mx-2">
            {data.map((dataItem, index) => (
              <div
                key={index}
                className="w-1/5 mdmax:w-1/3 flex-none px-2 mb-4"
              >
                <Link href={dataItem?.dummy?.link || ''} target="_blank">
                  <div className="text-center">
                    <div className="w-10 h-10 inline-block">
                      <Image
                        extern={true}
                        src={dataItem?.dummy?.image}
                        alt="image"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-black text-opacity-30 font-semibold">
                      {dataItem?.dummy?.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
