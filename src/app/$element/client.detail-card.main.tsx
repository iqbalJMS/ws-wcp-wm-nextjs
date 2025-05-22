'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Link from 'next/link';
import Image from 'next/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import sanitizeUrl from '@/lib/functions/global/sanitizeUrl';

const CE_DetailCardMain = ({
  card,
  tnc,
}: {
  card: {
    title: string;
    category: string;
    image: string;
    description: string;
    button: {
      text: string;
      link: string;
      external: boolean;
    };
  };
  tnc: {
    title: string;
    details: {
      title: string;
      description: string;
    }[];
  };
}) => {
  return (
    <>
      <div className="container py-10 px-20 mdmax:px-[12px]">
        <div className="flex mdmax:flex-wrap mb-10">
          <div className="w-1/2 mdmax:w-full flex-none mdmax:mb-10">
            {card.image && (
              <div className="px-20 mdmax:px-0 relative">
                <div className="h-[30rem] mdmax:h-[20rem] relative pb-20 mdmax:pb-0 overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${card.image}`}
                    alt="image"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 px-10 mdmax:px-0">
            <div>
              <div className="mb-20 mdmax:mb-10">
                <div className="text-privatecolor uppercase">
                  {card.category}
                </div>
                <div className="text-2xl mb-5">{card.title}</div>
                <div>{parseHTMLToReact(card.description, 'text-lg')}</div>
              </div>
              <div>
                <Link href={sanitizeUrl(card.button.link)}>
                  <ButtonSecondary rounded="full" color="privatecolor">
                    {card.button.text}
                  </ButtonSecondary>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center mb-10">
            <div className="text-privatecolor inline-block font-semibold text-3xl relative ">
              {tnc.title}
              <div className="w-[50%] h-[0.006rem] bg-black bg-opacity-80 absolute -bottom-10 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <div className="px-40 mdmax:px-0">
            <div className="bg-white shadow-xl p-20 mdmax:p-5 rounded-2xl">
              {tnc.details.map((detail, index) => (
                <div key={index} className="flex mdmax:flex-col">
                  <div className="text-privatecolor w-[20%] mdmax:w-full mdmax:border-transparent flex-none text-lg border-r border-black py-5">
                    {detail.title}
                  </div>
                  <div className=" text-lg text-black text-opacity-70 pl-5 py-5 mdmax:p-0">
                    {detail.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CE_DetailCardMain;
