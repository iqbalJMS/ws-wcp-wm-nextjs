'use server';

import SE_PortletVariant01Item from './server.portlet.variant01.item';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletProps } from '@/app/aether/$element/types/portlet';
import Image from '@/lib/element/global/image';

export default async function SE_PortletVariant03({
  headerAlignment,
  imageContentAlignment,
  title,
  subtitle,
  listItems,
  bgImage,
  imageContent,
  imageTitle,
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
        <div
          className={`flex flex-column ${headerAlignment === 'left' ? 'justify-start mdmax:justify-center' : headerAlignment === 'right' ? 'justify-end mdmax:justify-center' : 'justify-center'}`}
        >
          {imageTitle ? (
            <div className="flex gap-2 items-center">
              <Image width={20} height={20} src={imageTitle} alt="" />
              {title && (
                <div className="font-medium md:text-4xl text-3xl  mb-4">
                  {parseHTMLToReact(title)}
                </div>
              )}
            </div>
          ) : (
            title && (
              <div className="font-medium md:text-4xl text-3xl  mb-4">
                {parseHTMLToReact(title)}
              </div>
            )
          )}

          {subtitle && (
            <div className="text-[#627d92] font-normal md:text-xl text-lg md:max-w-4xl leading-8 mdmax:text-center">
              {parseHTMLToReact(subtitle)}
            </div>
          )}
        </div>
        <div>
          {imageContent ? (
            imageContentAlignment === 'left' ? (
              <div className="flex gap-4 py-12 md:flex-row flex-col">
                <div className="w-full h-[20rem] rounded-xl overflow-hidden mb-5 inline-block">
                  <Image
                    extern={true}
                    src={imageContent}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:max-w-2xl max-w-[90%]">
                  {listItems?.map((item, index) => (
                    <SE_PortletVariant01Item key={index} list_item={item} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex gap-4 py-12 md:flex-row flex-col">
                <div className="md:max-w-2xl max-w-[90%]">
                  {listItems?.map((item, index) => (
                    <SE_PortletVariant01Item key={index} list_item={item} />
                  ))}
                </div>
                <div className="w-full h-[20rem] rounded-xl overflow-hidden mb-5 inline-block">
                  <Image
                    extern={true}
                    src={imageContent}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          ) : (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-12 md:max-w-4xl max-w-[90%]">
              {listItems?.map((item, index) => (
                <SE_PortletVariant01Item key={index} list_item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
