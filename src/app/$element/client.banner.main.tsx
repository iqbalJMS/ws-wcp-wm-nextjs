'use client';

import { CE_BannerVariant01 } from './client.banner.variant01';
import { CE_BannerVariant02 } from './client.banner.variant02';
import { CE_BannerVariant03 } from './client.banner.variant03';
import { CE_BannerVariant04 } from './client.banner.variant04';

const CE_BannerMain = ({
  data,
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
      {variant === '01' && <CE_BannerVariant01 data={data} />}
      {variant === '02' && <CE_BannerVariant02 data={data} />}
      {variant === '03' && <CE_BannerVariant03 data={data} />}
      {variant === '04' && <CE_BannerVariant04 data={data} />}
    </>
  );
};

export default CE_BannerMain;
