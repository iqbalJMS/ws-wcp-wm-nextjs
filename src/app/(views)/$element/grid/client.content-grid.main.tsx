'use client';

import { T_ContentGridMainProps } from '@/app/$action/constants';
import Image from '@/lib/element/global/image';

export function CE_ContentGridMain({ data }: T_ContentGridMainProps) {
  return (
    <>
      <div className=" py-10 ">
        <div className="container">
          <div>
            {data.map((dataItem, index) => (
              <div
                key={index}
                className={['mb-10', dataItem.image ? '' : ''].join(' ')}
              >
                <div
                  className={[
                    '',
                    dataItem.image ? 'flex mdmax:flex-wrap' : '',
                  ].join(' ')}
                >
                  {dataItem.image && (
                    <div className="w-[40%] mdmax:w-full h-[30rem] mdmax:h-[20rem] flex-none mr-10 bg-black bg-opacity-10">
                      <Image
                        extern={true}
                        src={dataItem.image}
                        alt="image"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={[
                      'flex-1 text-black text-opacity-90',
                      dataItem.image ? 'mt-10' : '',
                    ].join(' ')}
                  >
                    <div className="text-2xl font-medium mb-5">
                      {dataItem.title}
                    </div>
                    <div className="text-base">{dataItem.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
