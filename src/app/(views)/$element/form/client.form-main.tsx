'use client';

// import { CE_BannerVariant03 } from './client.banner.variant03';
import CE_FormVariant1 from './client.form-variant1';
import CE_FormVariant2 from './client.form-variant2';

const CE_FormMain = ({ variant }: { variant: any }) => {
  return (
    <>
      {variant === 'wm-main-navigation' && (
        <CE_FormVariant1 variant={variant} />
      )}
      {variant === 'wm-private-main-navigation' && (
        <CE_FormVariant2 variant={variant} />
      )}
      {/* {variant === 'wm-prioritas-main-navigation' && (
        <CE_BannerVariant03 data={data} />
      )} */}
    </>
  );
};

export default CE_FormMain;
