import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from '@/lib/element/global/image';

export default function CE_GridVariant02({
  textTitle,
  textDesc,
  listMenu,
  imageContent,
}: {
  textTitle?: string;
  textDesc?: string;
  listMenu?: Array<{
    image?: string;
    textLink?: string;
    urlLink?: string;
  }>;
  imageContent?: string;
  imageAlignment?: string;
}) {
  return (
    <section className="relative">
      <div className="container py-20 md:px-20">
        <div className="flex md:flex-row flex-col justify-between">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={`space-y-8 max-w-lg mdmax:order-2 mt-12`}
          >
            {textTitle && (
              <h1 className="text-xl font-semibold uppercase">
                {parseHTMLToReact(textTitle)}
              </h1>
            )}
            {textDesc && (
              <p className="text-sm">{parseHTMLToReact(textDesc)}</p>
            )}
            {listMenu && listMenu.length > 0 && (
              <div className="flex gap-5 mt-5">
                {listMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.urlLink ?? ''}
                    className="flex flex-col items-center gap-3 group/menu"
                  >
                    {item.image && (
                      <div className="p-8 bg-privatecolor rounded-full">
                        <Image
                          className="w-10 h-10"
                          src={item.image}
                          width={1000}
                          height={1000}
                          alt={`image-${item.image}`}
                        />
                      </div>
                    )}
                    {item.textLink && (
                      <p className="text-privatecolor group-hover/menu:underline">
                        {item.textLink}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="mdmax:order-1 md:max-w-[50%]"
          >
            {imageContent && (
              <Image
                src={imageContent}
                className="w-full h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent}`}
              />
            )}
          </div>
        </div>
      </div>
      <div className="bg-privatecolor/30 w-[400px] h-[120px] absolute -z-10 top-[116px] md:right-5 right-0"></div>
    </section>
  );
}
