import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';

type T_GridVariant05Props = {
  imageContent?: string;
  title?: string;
  desc?: string;
  textLink?: string;
  urlLink?: string;
  variantWidget?: 'wm-private-main-navigation' | 'wm-prioritas-main-navigation';
  variantLayout?: 'image-left' | 'image-right';
};

export default async function CE_GridVariant05({
  imageContent,
  title,
  desc,
  textLink,
  urlLink,
  variantWidget = 'wm-private-main-navigation',
  variantLayout = 'image-left',
}: T_GridVariant05Props) {
  return (
    <section className="w-full py-20">
      <div className="container md:max-w-[968px] w-full">
        <div className="flex items-center md:flex-row flex-col">
          <div
            className={`w-full md:w-1/3 ${variantLayout === 'image-left' ? 'order-1' : 'order-2'}`}
          >
            <div>
              {imageContent && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${imageContent}`}
                  alt="image-list"
                  className="w-full h-auto"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
          <div
            className={`w-full md:w-2/3 ${variantLayout === 'image-left' ? 'order-2' : 'order-1'}`}
          >
            <div
              className={`${variantLayout === 'image-left' ? 'ml-28' : 'mb-8'}`}
            >
              {title && (
                <h1
                  className={`${variantWidget === 'wm-private-main-navigation' ? 'text-privatecolor' : 'text-prioritycolor'} text-lg mb-4 font-semibold`}
                >
                  {title}
                </h1>
              )}
              {desc && (
                <div className="desc-list mb-8 text-sm">
                  {parseHTMLToReact(desc)}
                </div>
              )}
              {textLink && (
                <Link
                  href={urlLink || '#'}
                  className={`${
                    variantWidget === 'wm-private-main-navigation'
                      ? 'text-privatecolor'
                      : 'text-prioritycolor'
                  } font-semibold flex items-center gap-1 hover:underline hover:gap-2 transition-all ease-in-out duration-300`}
                >
                  {textLink}
                  <ArrowRightIcon
                    width={20}
                    height={20}
                    stroke={
                      variantWidget === 'wm-private-main-navigation'
                        ? '#A28F52'
                        : '#1B1333'
                    }
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
