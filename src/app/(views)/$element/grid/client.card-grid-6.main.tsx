'use client';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';

const CE_CardGrid6Main = ({
  dataCard,
}: {
  dataCard: Array<{
    title: string;
    image: string;
    description: string;
    nid: string;
  }>;
}) => {
  return (
    <>
      <div className="container py-10">
        <div className="flex flex-wrap -mx-10">
          {dataCard.map((item, index) => (
            <Link
              href={`/program-detail/${item?.nid}`}
              key={index}
              className="w-1/3 mdmax:w-full flex-none px-10 mb-10"
            >
              <div className="bg-white shadow-xl cursor-pointer">
                <div className="w-full h-[20rem]  overflow-hidden mb-2">
                  {item?.image && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image}`}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-bottom"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="text-privatecolor text-xl font-bold mb-2">
                    {item?.title}
                  </div>
                  <div className="mb-5 text-slate-600">
                    {parseHTMLToReact(item?.description)}
                  </div>
                  <div>
                    <div className="text-privatecolor uppercase text-sm inline-flex items-center justify-center gap-2">
                      read more
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid6Main;
