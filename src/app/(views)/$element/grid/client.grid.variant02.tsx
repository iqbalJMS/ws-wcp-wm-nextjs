import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from '@/lib/element/global/image';

export default function CE_GridVariant02({
  dataCard1,
  dataCard2,
  imageContent1,
  imageContent2,
}: {
  dataCard1: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  dataCard2: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  imageContent1?: string;
  imageContent2?: string;
}) {
  return (
    <section className="relative">
      <div className="container py-5 px-5 xl:px-20">
        <div className="absolute -z-10 bg-[#ECE9DC] w-5/12 h-40 right-44"></div>
        <div className="flex md:flex-row flex-col justify-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={`space-y-8 px-5 max-w-lg mdmax:order-2 mt-4 xl:mt-12`}
          >
            {dataCard1?.[0]?.textTitle && (
              <h1 className="text-2xl text-[#3D3D3D] font-bold uppercase">
                {parseHTMLToReact(dataCard1?.[0]?.textTitle)}
              </h1>
            )}
            {dataCard1?.[0]?.textDesc && (
              <p className="text-sm text-[#521452]">
                {parseHTMLToReact(dataCard1?.[0]?.textDesc)}
              </p>
            )}
            {dataCard1?.[0]?.listMenu &&
              dataCard1?.[0]?.listMenu.length > 0 && (
                <div className="flex gap-5 mt-5">
                  {dataCard1?.[0]?.listMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.urlLink ?? ''}
                      className="flex flex-col items-center gap-3 group/menu"
                    >
                      {item.image && (
                        <div className="p-5 xl:p-8 bg-privatecolor rounded-full">
                          <Image
                            className="w-8 h-8 xl:w-10 xl:h-10"
                            src={item.image}
                            width={1000}
                            height={1000}
                            alt={`image-${item.image}`}
                          />
                        </div>
                      )}
                      {item.textLink && (
                        <p className="text-privatecolor text-sm group-hover/menu:underline">
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
            className="mdmax:order-1 md:max-w-[50%] flex items-center"
          >
            {imageContent1 && (
              <Image
                src={imageContent1}
                className="w-[80vh] h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent1}`}
              />
            )}
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="mdmax:order-1 md:max-w-[50%] flex items-center"
          >
            {imageContent2 && (
              <Image
                src={imageContent2}
                className="w-full h-auto md:w-[50vh] lg:w-full lg:h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent2}`}
              />
            )}
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={`space-y-8 pl-10 px-5 max-w-lg mdmax:order-2 mt-4 xl:mt-12`}
          >
            {dataCard2?.[0]?.textTitle && (
              <h1 className="text-2xl text-[#3D3D3D] font-bold uppercase">
                {parseHTMLToReact(dataCard2?.[0]?.textTitle)}
              </h1>
            )}
            {dataCard2?.[0]?.textDesc && (
              <p className="text-sm text-[#521452]">
                {parseHTMLToReact(dataCard2?.[0]?.textDesc)}
              </p>
            )}
            {dataCard2?.[0]?.listMenu &&
              dataCard2?.[0]?.listMenu.length > 0 && (
                <div className="flex gap-5 mt-5">
                  {dataCard2?.[0]?.listMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.urlLink ?? ''}
                      className="flex flex-col items-center gap-3 group/menu"
                    >
                      {item.image && (
                        <div className="p-5 xl:p-8 bg-privatecolor rounded-full">
                          <Image
                            className="w-8 h-8 xl:w-10 xl:h-10"
                            src={item.image}
                            width={1000}
                            height={1000}
                            alt={`image-${item.image}`}
                          />
                        </div>
                      )}
                      {item.textLink && (
                        <p className="text-privatecolor text-sm group-hover/menu:underline">
                          {item.textLink}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
