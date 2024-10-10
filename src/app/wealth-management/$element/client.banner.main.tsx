'use client';

import { CE_BannerVariant01 } from './client.banner.variant01';
import { CE_BannerVariant02 } from './client.banner.variant02';
import { CE_BannerVariant03 } from './client.banner.variant03';
import { CE_BannerVariant04 } from './client.banner.variant04';
import { GlobalBanner } from './global.banner';

const CE_BannerMain = ({
  variant = '01',
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
  }>;
  variant: '01' | '02' | '03' | '04' | '05';
}) => {
  return (
    <>
      {variant === '01' && <CE_BannerVariant01 />}
      {variant === '02' && <CE_BannerVariant02 />}
      {variant === '03' && <CE_BannerVariant03 />}
      {variant === '04' && <CE_BannerVariant04 />}
      {variant === '05' && <GlobalBanner />}
    </>
  );
};

export default CE_BannerMain;
