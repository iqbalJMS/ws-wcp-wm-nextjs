'use server';

import Link from 'next/link';
import SE_PortletVariant01Item from './server.portlet.variant01.item';
import { ArrowDownIcon } from '@/lib/element/global/arrow-down-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletProps } from '@/app/aether/$element/types/portlet';

export default async function SE_PortletVariant01({
  title,
  subtitle,
  textLink,
  listItems,
  bgImage,
  navigationLink,
}: Omit<T_PortletProps, 'variant'>) {
  const backgroundImg = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage}`
    : '';
  return (
    <section
      className="w-full bg-no-repeat pt-20 pb-12"
      style={{
        backgroundImage: `url(${
          backgroundImg || 'images/why-us/bg-image.jpg'
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        {title && (
          <div className="font-medium md:text-4xl text-3xl mdmax:text-center mb-4">
            {parseHTMLToReact(title)}
          </div>
        )}
        {subtitle && (
          <div className="text-[#627d92] font-normal md:text-xl text-lg md:max-w-4xl leading-8 mdmax:text-center">
            {parseHTMLToReact(subtitle)}
          </div>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-12 md:max-w-4xl max-w-[90%]">
          {listItems?.map((item, index) => (
            <SE_PortletVariant01Item key={index} list_item={item} />
          ))}
        </div>
        {textLink && (
          <div className="w-full">
            <Link
              className="text-blue-02 mdmax:text-sm font-bold flex items-center"
              href={navigationLink ?? '/'}
            >
              {textLink}
              <ArrowDownIcon className="-rotate-90 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
