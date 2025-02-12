import Image from '@/lib/element/global/image';
import Link from 'next/link';
export default function CE_GridVariant03({
  title,
  desc,
  imageLink,
  textLink,
  urlLink,
  imageContent,
}: {
  title?: string;
  desc?: string;
  imageLink?: string;
  textLink?: string;
  urlLink?: string;
  imageContent?: string;
}) {
  return (
    <section className="relative container py-20">
      <div className="max-w-3xl mx-auto flex md:flex-row flex-col mdmax:items-center">
        <div className="p-8 md:w-1/2 w-[350px] shadow-2xl mdmax:order-2 flex flex-col gap-4">
          {title && (
            <h1 className="md:text-2xl text-xl uppercase text-privatecolor mb-2 font-semibold">
              {title}
            </h1>
          )}
          {desc && <h2 className="text-sm min-h-[100px]">{desc}</h2>}
          {textLink && (
            <Link
              href={urlLink ?? '/404'}
              className="text-md text-privatecolor hover:underline flex gap-2 items-center mt-auto"
            >
              {imageLink && (
                <Image src={imageLink} width={20} height={20} alt="img-link" />
              )}
              {textLink}
            </Link>
          )}
        </div>
        <div className="md:w-1/2 w-[350px] mdmax:order-1">
          {imageContent && (
            <Image
              src={imageContent}
              alt={`img-${imageContent}`}
              width={100}
              height={100}
              className="w-full h-full bg-no-repeat bg-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
