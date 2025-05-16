'use client';

import { T_ResponseGetBottomLeftFooter } from '@/api/footer/bottom-footer/api.get-bottom-left-footer.type';
import { T_ResponseGetBottomRightFooter } from '@/api/footer/bottom-footer/api.get-bottom-right-footer.type';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-middle-footer.type';
import { T_ResponseGetMainMiddleFooter } from '@/api/footer/middle-main-footer/api.get-main-middle-footer.type';
import Image from 'next/image';
import Link from 'next/link';

type T_FooterProps = {
  main_footer?: T_ResponseGetMainFooterMenu;
  middle_main_footer: T_ResponseGetMainMiddleFooter;
  bottom_right_footer: T_ResponseGetBottomRightFooter;
  bottom_left_footer: T_ResponseGetBottomLeftFooter;
  variant: string;
};

// const urlCustomTitle = [{ title: 'Privacy' }, { title: 'TERMS OF USE' }];

function RowElement({
  data,
  middleData,
  variantColor,
}: {
  data?: T_ResponseGetMainFooterMenu;
  middleData: T_ResponseGetMainMiddleFooter;
  variantColor: string;
}) {
  let theme = '';

  if (variantColor == 'wm-private-main-navigation') {
    theme = 'privatecolor';
  } else if (variantColor == 'wm-prioritas-main-navigation') {
    theme = 'white';
  } else if (variantColor == 'wm-main-navigation') {
    theme = 'white';
  }

  return (
    <>
      <div className="w-full py-2 flex justify-center lg:flex-none">
        <div className="w-full md:w-10/12 lg:w-full h-full grid grid-cols-1 lg:grid-cols-3 px-10 xl:px-20 2xl:px-48 place-items-center  ">
          <div className="w-full xl:w-80 h-44 flex flex-col items-start border-b lg:border-none border-white py-5 lg:py-0">
            <h1 className={`text-${theme} text-xl font-bold pb-3`}>
              Kantor Pusat BRI
            </h1>
            <div>
              <h1 className="text-white text-sm font-extralight">
                {data?.field_company_name?.[0]?.value}
              </h1>
            </div>
            <div className="flex items-start pt-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${data?.field_company_address_icon?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ?? ''}`}
                width={30}
                height={30}
                alt=""
              />
              {data?.field_company_address?.map(({ value }, index) => (
                <div key={index} className="w-8/12 pl-2">
                  <h1 className="text-white text-sm font-extralight leading-7">
                    {value}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full xl:w-80 h-52 flex flex-col items-start border-b lg:border-none border-white py-8 lg:py-0">
            <h1 className={`text-${theme} text-xl font-bold pb-3`}>
              Hubungi Kami
            </h1>
            {middleData?.map(({ title, icon, relative, alias }, index) => (
              <Link
                key={index}
                className="group hover:cursor-pointer flex items-start py-2 "
                href={relative ?? alias}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${icon ?? ''}`}
                  width={20}
                  height={20}
                  alt=""
                />
                <div className="w-full pl-3">
                  <h1 className="text-white group-hover:underline text-sm font-extralight">
                    {title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full xl:w-full h-44 flex flex-col items-start py-5 lg:py-0 pl-0 lg:pl-4">
            <h1 className={`text-${theme} text-xl font-bold pb-3`}>
              Terdaftar Dan Diawasi Oleh:
            </h1>
            <div className="flex flex-col justify-center text-white font-extralight">
              <h1>
                BRI berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank
                Indonesia
              </h1>
              <h1 className="pt-5">BRI merupakan peserta penjaminan LPS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TermsAllReservedElement({
  termsData,
  socialMediaData,
  variant,
}: {
  termsData: Array<{
    title: string;
    relative: string;
  }>;
  socialMediaData: Array<{
    icon: string;
    title: string;
    uri: string;
  }>;
  variant: string;
}) {
  return (
    <>
      <div className="bg-black lg:py-[1.375rem] py-4">
        <div className="text-center flex items-center lg:flex-row flex-col lg:container justify-between lg:px-0 px-4 lg:items-center lg:justify-between">
          <h2 className="text-white boxiner inline font-normal text-sm !text-center">
            © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights
            Reserved.
          </h2>

          <div className="items-center mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center items-center divide-x-0 md:divide-x-2 ">
              <div className="flex justify-start items-center px-4">
                {variant == 'wm-main-navigation' ? (
                  <div className="flex">
                    {termsData?.map(({ title, relative }, index) => (
                      <div key={index}>
                        <Link
                          href={relative ?? '/404'}
                          className="text-sm font-normal text-white hover:underline"
                        >
                          {title}
                        </Link>
                        {index + 1 !== termsData.length && (
                          <span className="text-white mx-2">&#x2022;</span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : variant == 'wm-private-main-navigation' ? (
                  <div>
                    <Link
                      href={'/privacy-private'}
                      className="text-sm font-normal text-white hover:underline"
                    >
                      Privasi
                    </Link>
                    <span className="text-white mx-2">&#x2022;</span>
                    <Link
                      href={'/terms-of-use-private'}
                      className="text-sm font-normal text-white hover:underline"
                    >
                      Ketentuan Penggunaan
                    </Link>
                  </div>
                ) : variant == 'wm-prioritas-main-navigation' ? (
                  <div>
                    <Link
                      href={'/privacy-prioritas'}
                      className="text-sm font-normal text-white hover:underline"
                    >
                      Privasi
                    </Link>
                    <span className="text-white mx-2">&#x2022;</span>
                    <Link
                      href={'/terms-of-use-prioritas'}
                      className="text-sm font-normal text-white hover:underline"
                    >
                      Ketentuan Penggunaan
                    </Link>
                  </div>
                ) : null}
              </div>
              {socialMediaData?.length !== 0 && (
                <div className="flex justify-center items-center gap-6 px-4">
                  {socialMediaData?.map(({ uri, icon, title }, index) => (
                    <Link
                      target="blank"
                      href={uri ?? '/404'}
                      key={index}
                      className="text-white flex items-center gap-2 lg:text-sm text-sm justify-center font-normal hover:bg-blue-600 rounded-full p-1"
                    >
                      {icon && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${icon ?? ''}`}
                          width={16}
                          height={16}
                          alt={title}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function GlobalFooter({
  main_footer,
  middle_main_footer,
  bottom_left_footer,
  bottom_right_footer,
  variant,
}: T_FooterProps) {
  let bgColor = '';
  if (variant == 'wm-private-main-navigation') {
    bgColor = 'black';
  } else if (variant == 'wm-prioritas-main-navigation') {
    bgColor = 'prioritycolor';
  } else if (variant == 'wm-main-navigation') {
    bgColor = 'black';
  }
  return (
    <footer
      className={`shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)] bg-${bgColor}`}
    >
      <div className="w-full h-auto py-5">
        <div className="w-full">
          <RowElement
            data={main_footer}
            middleData={middle_main_footer}
            variantColor={variant}
          />
        </div>
      </div>

      <TermsAllReservedElement
        termsData={bottom_left_footer}
        socialMediaData={bottom_right_footer}
        variant={variant}
      />
    </footer>
  );
}
