'use client';

import Image from '@/lib/element/global/image';
// import Modal from '@/lib/element/global/modal';
import Link from '@/lib/element/global/link';

type T_IconMenuProps = {
  image: string;
  title?: string;
  variant?: 'config' | 'main';
  hover?: 'selected' | 'main';
};

function CE_IconMenu({
  image,
  title,
  variant = 'main',
  hover = 'main',
}: T_IconMenuProps) {
  return (
    <div
      className={[
        'text-center cursor-pointer relative group h-full',
        `${
          hover === 'selected'
            ? 'border-[.2rem] border-dashed hover:border-solid p-5 rounded-xl'
            : 'px-5 pb-5'
        }`,
      ].join(' ')}
    >
      <div
        className={[
          'w-14 h-14 mdmax:w-10 mdmax:h-10 mb-4',
          `${
            variant === 'main'
              ? 'inline-block'
              : 'rounded-full shadow-md inline-flex items-center justify-center'
          }`,
        ].join(' ')}
      >
        <Image
          extern={variant === 'config' ? false : true}
          src={image}
          alt="image"
          width={200}
          height={200}
          className={[
            `${variant === 'main' ? 'w-full h-full' : 'w-[60%] h-[60%]'}`,
            'object-contain',
          ].join(' ')}
        />
      </div>
      {variant === 'main' && (
        <>
          <div className="uppercase text-base text-line-2 font-semibold h-[3rem] mdmax:h-[1rem] mdmax:text-xs">
            {title}
          </div>
          {hover === 'main' && (
            <div className="absolute bottom-0 left-0 w-full h-2 px-5">
              <div className="bg-red-01 w-full h-2 rounded-full transition-all ease-in-out duration-300 group-hover:opacity-100 opacity-0"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function CE_IconMain() {
  return (
    <>
      <div className="overflow-hidden relative py-10 container">
        <div className="border-b-2 border-black border-opacity-50 px-[20rem] mdmax:px-0">
          <div className="flex justify-center -mx-5 mdmax:flex-wrap">
            <div className="w-1/5 mdmax:w-1/2 flex-none">
              <Link href={'#'} target={''}>
                <CE_IconMenu image={''} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
