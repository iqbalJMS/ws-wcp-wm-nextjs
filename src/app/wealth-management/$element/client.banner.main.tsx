'use client';

import { CE_BannerVariant01 } from './client.banner.variant01';
import { CE_BannerVariant02 } from './client.banner.variant02';
import { CE_BannerVariant03 } from './client.banner.variant03';

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
    </>
  );
};

export default CE_BannerMain;
