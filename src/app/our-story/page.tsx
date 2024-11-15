import React from 'react';

import background from '@/../public/images/dummy/bgOurStory.jpeg';
import Image from 'next/image';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
// import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import CE_HeaderMagazine from '@/app/magazine/$element/client.header.magazine';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetMiddleMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';

// {
//   storyData,
// }: {
//   storyData: Array<{
//     image: string;
//     desc: string;
//     name: string;
//     title: string;
//   }>;
// }

export default async function page() {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMiddleMenuFooter({ lang: 'en' });

  return (
    <>
      <CE_HeaderMagazine
        headerTop={listHeaderTop}
        headerBottom={listHeaderBottom}
        variant={'transparent'}
      />
      <div
        className="relative overflow-hidden h-[60vh] lg:mb-[3.125rem] w-full  bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        <h1 className="z-10 text-4xl text-white font-bold uppercase">
          success stories
        </h1>
      </div>

      <section className="w-full h-[400px] bg-red-300 flex flex-col items-center">
        <div className="w-9/12 bg-yellow-200 flex justify-around ">
          <div className="w-5/12 bg-green-300">
            <Image src={''} alt={''} />
          </div>
          <div className="w-full pt-10 bg-slate-600 space-y-4">
            <h1 className="text-3xl font-semibold">name</h1>
            <h2>sub title</h2>
          </div>
        </div>
        <div className="w-9/12 h-96 bg-orange-300 space-y-5 pt-5">
          <h1 className="text-xl font-bold">
            Bisa diceritakan latar belakang karier Anda di industri pertambangan
            batu bara yang sekarang digeluti?
          </h1>
          <h2>
            Saya berkecimpung di industri pertambangan batu bara ini sebenarnya
            sudah cukup lama, dari sekitar tahun 2007. Saya sendiri tidak
            menempuh pendidikan formal universitas, jadi saya belajar langsung
            di lapangan. Kebetulan pada waktu saya kecil dan remaja, ayah saya
            sudah berkegiatan di daerah. Bisa dibilang dulu saya dititipkan
            untuk belajar dari para pelaku usaha, khususnya yang bergerak dalam
            bidang industri pertambangan di Kalimantan. Dari pengalaman langsung
            di lapangan itulah saya dan adik saya belajar bagaimana proses
            drilling , bagaimana proses penambangan, kualitas batu bara itu
            seperti apa, kemudian saya juga sempat masuk ke tambang mineral.
            Dari pembelajaran-pembelajaran on site itulah yang menjadikan saya
            mature secara penguasaan lapangan. Karena juga sering berinteraksi
            dengan para pelaku usaha tambang, secara tidak langsung dari aspek
            bisnis, network , pengetahuan, akhirnya semuanya terbentuk sendiri.
            Jika disebut self-made tapi saya juga cukup diberikan keberuntungan
            dan kesempatan, karena dengan usia yang masih muda yang tidak
            dibekali dengan sekolah formal, apalagi banyak mungkin pelaku bisnis
            lainnya sudah mengantongi sarjana dari luar negeri, tapi saya
            belajar, beradaptasi, hingga mempelajari dari banyak figur pelaku
            usaha lain yang membuat perusahaan saya cukup eksis hingga
            sekarang.v
          </h2>
        </div>
      </section>

      <GlobalFooter
        bottom_right_footer={listBottomRightFooter}
        bottom_left_footer={listBottomLeftFooter}
        main_middle_footer={itemMainFooter}
      />
    </>
  );
}
