import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CE_GetInvited() {
  const data = [
    {
      linkCta: 'kantor pusat',
      address:
        'Gedung BRI2 Jl. Jendral Sudirman Kav.44 jakarta 10210 indonesia',
    },
    {
      linkCta: 'kantor pusat',
      address:
        'Gedung BRI2 Jl. Jendral Sudirman Kav.44 jakarta 10210 indonesia',
    },
    {
      linkCta: 'kantor pusat',
      address:
        'Gedung BRI2 Jl. Jendral Sudirman Kav.44 jakarta 10210 indonesia',
    },
    {
      linkCta: 'kantor pusat',
      address:
        'Gedung BRI2 Jl. Jendral Sudirman Kav.44 jakarta 10210 indonesia',
    },
    {
      linkCta: 'kantor pusat',
      address:
        'Gedung BRI2 Jl. Jendral Sudirman Kav.44 jakarta 10210 indonesia',
    },
    {
      linkCta: 'kantor pusat',
      address:
        'Gedung BRI2 Jl. Jendral Sudirman Kav.44 jakarta 10210 indonesia',
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center">
        <section>
          <h1 className="uppercase text-xl text-prioritycolor font-extrabold">
            hubungi kami
          </h1>
        </section>
        <section className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-60 h-72 flex flex-col items-center justify-center shadow-2xl bg-white rounded-3xl hover:-translate-y-3 duration-300 cursor-pointer m-5 p-5 space-y-4 border"
            >
              <Image src={''} alt="" width={50} height={50} className="" />
              <Link
                href={''}
                className="capitalize text-lg font-bold text-prioritycolor hover:underline"
              >
                {item?.linkCta}
              </Link>
              <h1 className="capitalize text-center text-sm text-[#7992BF]">
                {item?.address}
              </h1>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
