'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';

const CE_CardGrid5Main = ({
  dataCard,
}: {
  dataCard: Array<{
    title: string;
    category: string;
    date: string;
    image: string;
    description: string;
    nid: string;
  }>;
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <>
      <div className="container py-10">
        <div className="flex flex-wrap -mx-10">
          <>
            {dataCard?.map((item, index) => (
              <Link
                key={index}
                href={`/${item?.nid}`}
                className="w-1/3 mdmax:w-full flex-none px-10 mb-10"
              >
                <div>
                  <div className="w-full h-[20rem] rounded-xl overflow-hidden mb-5">
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
                  <div>
                    <div className="text-xs text-black font-semibold uppercase">
                      <span className="pr-2">
                        {item?.category ?? 'category'}
                      </span>{' '}
                      |
                      <span className="pl-3">
                        {formatDate(item?.date ?? 'date')}
                      </span>
                    </div>
                    <div className="text-privatecolor line-clamp-2 font-bold text-xl mb-5 pt-3">
                      {parseHTMLToReact(item?.title)}
                    </div>
                    <div className="font-light line-clamp-3">
                      {parseHTMLToReact(item?.description)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid5Main;
