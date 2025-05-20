import React from 'react';

import Image from 'next/image';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';
import { ACT_GetMainMiddleFooter } from '@/app/(views)/$action/main-middle-footer/action.get.main-middle-footer';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';
import CE_AccordionBancarsurance from '@/app/bancassurance-detail/$element/client.accordion.bancassuranceWm';
import HomeHeader from '@/lib/element/global/header/home-header';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import CE_ShareContent from '@/lib/element/global/share-content';
import noImage from '@/../public/images/no-image.png';

export async function generateMetadata() {
  return {
    title: `Bancasurrance Private Detail`,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const listHomeNavbar = await ACT_GetMainMenuNavbar({ lang: 'id' });
  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  const headerImage =
    getOurstoryData?.field_header_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;

  return (
    <>
      <div>
        <HomeHeader
          headerTop={listHeaderTop}
          headerBottom={listHomeNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
        />
        <section className="relative overflow-hidden  lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          {headerImage ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${headerImage ?? ''}`}
              alt="bg-image"
              width={100000}
              height={100000}
              className="w-full h-[600px] object-cover object-top"
            />
          ) : (
            <Image
              src={noImage}
              alt="bg-image"
              width={100000}
              height={100000}
              className="w-full h-[600px] object-cover object-top"
            />
          )}
          <div className="z-10 absolute text-center flex flex-col items-center ">
            <h1 className="text-4xl text-white font-bold uppercase">
              {getOurstoryData?.title?.[0]?.value ?? ''}
            </h1>
          </div>
        </section>

        <div className="w-full flex justify-center pb-14 pt-4">
          {getOurstoryData?.field_items?.[0]?.field_content?.[0]?.value && (
            <h1 className="text-xl xl:text-3xl text-prioritycolor font-bold uppercase text-center">
              product details
            </h1>
          )}
        </div>
        <div className="w-full px-4 py-6 lg:px-8 2xl:px-52 flex justify-end ">
          <CE_ShareContent />
        </div>
        <section className="w-full flex flex-col justify-center items-center pb-10">
          {getOurstoryData?.field_items?.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full px-5 md:w-9/12 xl:w-10/12 2xl:w-6/12"
            >
              <CE_AccordionBancarsurance
                renderTitle={item?.field_title?.[0]?.value ?? ''}
                renderContent={item?.field_content?.[0]?.processed ?? ''}
              />
            </div>
          ))}
        </section>
        <GlobalFooter
          bottom_right_footer={listBottomRightFooter}
          bottom_left_footer={listBottomLeftFooter}
          main_footer={itemMainFooter || undefined}
          middle_main_footer={itemMiddleMainFooter}
          variant={'wm-main-navigation'}
        />
      </div>
    </>
  );
}

// '<p>Program Asuransi yang memberikan manfaat perlindungan terhadap Jiwa (Meninggal Dunia) atau mengidap penyakit kritis dengan manfaat pengembalian premi di akhir masa asuransi.</p>
// \n

//   < article class="media media--type-document media--view-mode-default" >\n  \n      \n < div class="field field--name-field-media-file field--type-file field--label-visually_hidden" >\n < div class="field__label visually-hidden" > File</ >\n < div class="field__item" >\n < span class="file file--mime-application-pdf file--application-pdf" ><a href="/sites/default/files/documents/Resume%20Iqbal%20%28%20CV%20%29.pdf" type="application/pdf">Resume Iqbal ( CV ).pdf</a> <span class="file__size">(204.19 KB)</span></ >\n</div >\n          </div >\n\n  </article >

// \n

//   <table>\n<thead>\n<tr>\n < th > <strong>Cara Bayar</strong></ >\n < th > <strong>Premi Total Berkala</strong></ >\n < th > <strong>Premi Total Berkala</strong></ >\n < th > <strong>Premi Topup Berkala</strong></ >\n</tr >\n</thead >\n<tbody>\n<tr>\n < td > Tahunan</ >\n < td > 3.000.000</ >\n < td > 2.400.000</td >\n < td > 600.000</ >\n</tr >\n<tr>\n < td > Semesteran</ >\n < td > 1.500.000</ >\n < td > 1.200.000</ >\n < td > 300.000</ >\n</tr >\n<tr>\n < td > Triwulanan</ >\n < td > 750.000</ >\n < td > 600.000</ >\n < td > 150.000</ >\n</tr >\n<tr>\n < td > Bulan</ >\n < td > 250.000</ >\n < td > 200.000</ >\n < td > 50.000</ >\n</tr >\n</tbody >\n</table >

// \n

//   <table>\n<tbody>\n<tr>\n < td > <strong>Cara Bayar</strong></ >\n < td > <strong>Premi Total Berkala</strong></ >\n < td > <strong>Premi Total Berkala</strong></ >\n < td > <strong>Premi Topup Berkala</strong></ >\n</tr >\n<tr>\n < td > Tahunan</ >\n < td > 3.000.000</ >\n < td > 2.400.000</ >\n < td > 600.000</ >\n</tr >\n<tr>\n < td > Semesteran</ >\n < td > 1.500.000</ >\n < td > 1.200.000</ >\n < td > 300.000</ >\n</tr >\n<tr>\n < td > Triwulanan</ >\n < td > 750.000</ >\n < td > 600.000</ >\n < td > 150.000</ >\n</tr >\n<tr>\n < td > Bulan</ >\n < td > 250.000</ >\n < td > 200.000</ >\n < td > 50.000</ >\n</tr >\n</tbody >\n</table >\n'
