'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import Link from 'next/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const CE_PortletMain = ({
  title,
  image,
  description,
  button,
}: {
  title: string;
  image: string;
  description: string;
  button: {
    text: string;
    link: string;
    external: boolean;
  };
}) => {
  return (
    <>
      <div className="py-10">
        <div className="h-[30rem] relative">
          <div className="absolute top-0 left-0 w-full h-full">
            {image && (
              <Image
                extern={true}
                src={image}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover object-bottom"
              />
            )}
          </div>
          <div className="w-full h-full bg-privatecolor bg-opacity-20 absolute top-0 left-0 z-10"></div>
          <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mdmax:w-full">
            <div className="text-center mb-10">
              <div className="text-white text-3xl mb-5 font-semibold">
                {title}
              </div>
              <div className="text-white text-2xl mdmax:text-lg w-[80%] inline-block">
                {parseHTMLToReact(description)}
              </div>
            </div>
            <div className="text-center">
              <Link href={button.link}>
                <ButtonSecondary rounded="full" color="privatecolor" size="lg">
                  {button.text}
                </ButtonSecondary>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CE_PortletMain;
