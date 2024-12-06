import Image from 'next/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_GridVariant04({
  title,
  data,
  bgImage,
}: {
  title?: string;
  data: Array<{
    image: string;
    desc: string;
  }>;
  bgImage?: string;
}) {
  const backgroundImg = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage}`
    : '';

  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${
          backgroundImg || '/web/wealth-management/images/why-us/bg-image.jpg'
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container py-20">
        {title && (
          <div className="mb-20 flex flex-col items-center">
            {title && (
              <h1 className="text-3xl text-[#3D405F] font-semibold uppercase">
                {parseHTMLToReact(title)}
              </h1>
            )}
            <div className="w-[50px] h-0.5 bg-[#404041] mt-3"></div>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col items-center mx-6 basis-[12%]"
                key={index}
              >
                <div className="w-[160px] h-[160px] hover:border-[.3rem] hover:border-solid hover:border-privatecolor rounded-full transition-all duration-300">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item.image}`}
                    alt={`img-${index}`}
                    width={100}
                    height={100}
                    className="bg-no-repeat bg-cover w-full h-full rounded-full"
                  />
                </div>
                <h2 className="text-md my-4 text-center font-semibold uppercase">
                  {item.desc}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
