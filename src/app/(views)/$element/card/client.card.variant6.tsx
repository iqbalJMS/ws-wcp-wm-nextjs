import React from 'react';
import Link from 'next/link';
import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
export default function CE_CardVariant6({
  image,
  label,
  desc,
  link,
  backGround,
}: {
  image: string;
  label: string;
  desc: string;
  link: null | string;
  backGround: string;
}) {
  return (
    <>
      <main className="w-full flex justify-center pb-20">
        <div
          className="w-full h-[50vh] -z-10 absolute"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${backGround})`,
          }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center lg:w-11/12 xl:w-9/12 xl:px-8 z-10">
          <section className="w-full">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="pb-4 sm:hidden"
            >
              {label && (
                <h1 className="text-2xl font-bold uppercase">
                  {parseHTMLToReact(label)}
                </h1>
              )}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative w-full overflow-hidden"
            >
              {image && (
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="image dummy"
                  className="w-10/12 h-full bg-no-repeat bg-cover hover:scale-125 bg-center transition-all ease-in-out transform-gpu duration-300"
                />
              )}
            </div>
          </section>
          <section className="space-y-4 sm:pt-5 w-8/12 flex flex-col  items-start">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hidden sm:flex"
            >
              {label && (
                <h1 className="text-3xl font-bold uppercase">
                  {parseHTMLToReact(label)}
                </h1>
              )}
            </div>
            {desc && (
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[#89829F] text-sm sm:text-base sm:pb-3"
              >
                {parseHTMLToReact(desc)}
              </h1>
            )}
            {link === null ? (
              <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                ref={link}
                className="bg-wmcolor py-2 px-5 rounded-full hover:bg-gray-700 duration-200 cursor-pointer text-white font-semibold uppercase"
                href={'/infovesta'}
              >
                lihat selengkapnya
              </Link>
            ) : (
              <Link
                ref={link}
                className="bg-wmcolor py-2 px-5 rounded-full hover:bg-gray-700 duration-200 cursor-pointer text-white font-semibold uppercase"
                href={'/infovesta'}
              >
                lihat selengkapnya
              </Link>
            )}
            <section />
          </section>
        </div>
      </main>
    </>
  );
}
