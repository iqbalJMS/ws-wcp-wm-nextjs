'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Link from 'next/link';
import Image from 'next/image';

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
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${image ?? ''}`}
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
                {title ?? ''}
              </div>
              <div
                className="text-white text-2xl mdmax:text-lg w-[80%] inline-block"
                dangerouslySetInnerHTML={{ __html: description ?? '' }}
              />
            </div>
            <div className="text-center">
              <Link href={button.link ?? '/404'}>
                <ButtonSecondary rounded="full" color="privatecolor" size="lg">
                  {button.text ?? ''}
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
