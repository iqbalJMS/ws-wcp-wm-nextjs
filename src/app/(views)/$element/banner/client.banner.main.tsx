'use client';

import CE_BannerVariant01 from './client.banner.variant01';
import { CE_BannerVariant02 } from './client.banner.variant02';
import CE_BannerVariant03 from './client.banner.variant03';

const CE_BannerMain = ({
  variant,
  data,
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
    link: string;
  }>;
  variant: any;
}) => {
  return (
    <>
      {variant === 'wm-main-navigation' && <CE_BannerVariant01 data={data} />}
      {variant === 'wm-private-main-navigation' && (
        <CE_BannerVariant02 data={data} />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_BannerVariant03 data={data} />
      )}
    </>
  );
};

export default CE_BannerMain;
