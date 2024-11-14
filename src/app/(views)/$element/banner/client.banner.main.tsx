'use client';

import CE_BannerVariant01 from './client.banner.variant01';
import { CE_BannerVariant02 } from './client.banner.variant02';
import { CE_BannerVariant03 } from './client.banner.variant03';

const CE_BannerMain = ({
  variant = '02',
  data,
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
  }>;
  variant: '01' | '02' | '03';
}) => {
  return (
    <>
      {variant === '01' && <CE_BannerVariant01 data={data} />}
      {variant === '02' && <CE_BannerVariant02 data={data} />}
      {variant === '03' && <CE_BannerVariant03 data={data} />}
    </>
  );
};

export default CE_BannerMain;
