'use client';

import { T_CarouselMainProps } from '@/app/$action/constants';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';

export function CE_CarouselVariant04({
  title,
  description,
  button,
  data,
}: Omit<T_CarouselMainProps, 'variant'>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 3 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < data.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };
  return (
    <>
      <div className="py-20 container">
        <div className="flex items-center mdmax:flex-wrap">
          <div className="w-[20%] mdmax:w-full flex-none">
            {title && (
              <div className="text-2xl font-semibold mb-2">{title}</div>
            )}
            {description && <div className=" mb-4">{description}</div>}
            {button && (
              <Link href={button?.link} target="_blank">
                <div className="inline-flex gap-2 items-center text-blue-01 mb-5">
                  {parseHTMLToReact(button?.name || '')}{' '}
                  <span className="text-xs">&#10095;</span>
                </div>
              </Link>
            )}
            <div className="flex items-center gap-5 mdmax:gap-1">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 bg-red-01 text-white',
                  currentSlide === 0
                    ? 'bg-opacity-10 cursor-default'
                    : 'cursor-pointer',
                ].join(' ')}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 bg-red-01 text-white',
                  currentSlide < data.length - slidesToShow
                    ? 'cursor-pointer '
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
          </div>
          <div className="overflow-hidden p-5 mdmax:p-2">
            <div
              className="flex  -mx-2 transition-all ease-in-out duration-300"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {data.map((dataItem, index) => (
                <div key={index} className="w-1/3 mdmax:w-1/2 flex-none px-2">
                  <Link href={dataItem.button?.link || ''} target="_blank">
                    <div className="p-4 bg-white h-full shadow-lg text-center">
                      <div className="w-[5rem] h-[5rem] mb-2 rounded-full overflow-hidden inline-block">
                        <Image
                          extern={true}
                          src={dataItem.image}
                          alt="image"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className=" text-red-01 font-semibold mb-1">
                          {parseHTMLToReact(dataItem.title)}
                        </div>
                        {dataItem.subDesc && (
                          <div className="text-xs mb-2 overflow-auto">
                            {parseHTMLToReact(dataItem.subDesc)}
                          </div>
                        )}
                        {dataItem.desc && (
                          <div className="text-xs h-[4rem] overflow-auto">
                            {parseHTMLToReact(dataItem.desc)}
                          </div>
                        )}
                        {dataItem.button && (
                          <Link href={dataItem.button?.link} target="_blank">
                            <div className="inline-flex gap-2 items-center text-sm text-blue-01 uppercase underline">
                              {parseHTMLToReact(dataItem.button?.name || '')}
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
