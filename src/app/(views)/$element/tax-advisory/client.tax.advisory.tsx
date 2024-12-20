import Image from 'next/image';
import React from 'react';

export default function CE_TaxAdvisory() {
  const data = [
    {
      list: 'Layanan Tax Advisory ini juga diberikan dalam bentuk pendampingan melalui pemberian bimbingan, saran, dan nasehat atas rencana dan pelaksana pemenuhan kewajiban perpajakan yang dilakukan Wajib Pajak atau Nasabah BRI Private',
    },
    {
      list: 'Layanan Tax Advisory ini juga diberikan dalam bentuk pendampingan melalui pemberian bimbingan, saran, dan nasehat atas rencana dan pelaksana pemenuhan kewajiban perpajakan yang dilakukan Wajib Pajak atau Nasabah BRI Private',
    },
    {
      list: 'Layanan Tax Advisory ini juga diberikan dalam bentuk pendampingan melalui pemberian bimbingan, saran, dan nasehat atas rencana dan pelaksana pemenuhan kewajiban perpajakan yang dilakukan Wajib Pajak atau Nasabah BRI Private',
    },
    {
      list: 'Layanan Tax Advisory ini juga diberikan dalam bentuk pendampingan melalui pemberian bimbingan, saran, dan nasehat atas rencana dan pelaksana pemenuhan kewajiban perpajakan yang dilakukan Wajib Pajak atau Nasabah BRI Private',
    },
    {
      list: 'Layanan Tax Advisory ini juga diberikan dalam bentuk pendampingan melalui pemberian bimbingan, saran, dan nasehat atas rencana dan pelaksana pemenuhan kewajiban perpajakan yang dilakukan Wajib Pajak atau Nasabah BRI Private',
    },
  ];
  return (
    <>
      <div className="w-full h-fit bg-red-300 flex justify-center ">
        <div className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 bg-white flex flex-col md:flex-row-reverse ">
          <section className="bg-yellow-300 w-5/12 h-full flex items-center">
            <Image
              src={''}
              alt={''}
              width={500}
              height={500}
              className="w-80 h-80"
            />
          </section>
          <section className="bg-green-300 w-full h-full p-3">
            <div>
              <h1 className="text-xl text-privatecolor font-bold capitalize">
                Tax Advisory
              </h1>
              <h2 className="pt-4 text-[15px]">
                Privilege “Tax Advisory” merupakan jasa konsultan pajak untuk
                mendukung Wajib Pajak (WP) dalam merencanakan dan melaksanakan
                pemenuhan kewajiban perpajakan sesuai ketentuan yang berlaku
                termasuk menyelesaikan masalah administrasi perpajakan yang akan
                diberikan kepada Nasabah BRI Private ol konsultan perpajakan
                profesional. BRI Private bekerja sama dengan PT Prima Wahana
                Caraka (PwC) menyediakan jasa konsultasi bagi Nasabah BRI
                Private.
              </h2>
            </div>
            <div className="space-y-5 pt-5">
              <h1 className="capitalize font-bold text-black text-base">
                Syarat dan Ketentuan
              </h1>
              <ul className="list-disc pl-10 space-y-4 text-[15px]">
                {data?.map((item, index) => <li key={index}>{item?.list}</li>)}
              </ul>
              <h2 className="italic">(syarat & ketentuan berlaku)</h2>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
