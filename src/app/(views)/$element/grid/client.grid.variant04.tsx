import Image from '@/lib/element/global/image';

export default function CE_GridVariant04({
  title,
  listItem,
  bgImage,
}: {
  title?: string;
  listItem?: Array<{
    image?: string;
    desc?: string;
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
            <h1 className="text-3xl font-semibold uppercase">{title}</h1>
            <div className="w-[50px] h-0.5 bg-black mt-3"></div>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center">
          {listItem &&
            listItem.length > 0 &&
            listItem.map((item, index) => (
              <div
                className="flex flex-col items-center mx-6 basis-[12%]"
                key={index}
              >
                <div className="w-[160px] h-[160px] hover:border-[.3rem] hover:border-solid hover:border-privatecolor rounded-full transition-all duration-300">
                  <Image
                    src={
                      item.image ?? '/web/wealth-management/images/no-image.png'
                    }
                    alt={`img-${index}`}
                    width={100}
                    height={100}
                    className="bg-no-repeat bg-cover w-full h-full rounded-full"
                    extern={item.image ? false : true}
                  />
                </div>
                <p className="text-md my-4 text-center font-semibold uppercase">
                  {item.desc}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
