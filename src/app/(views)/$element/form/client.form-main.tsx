'use client';

// import { CE_BannerVariant03 } from './client.banner.variant03';
import CE_FormVariant1 from './client.form-variant1';

const CE_FormMain = ({ variant }: { variant: any }) => {
  return (
    <>
      {variant === 'wm-main-navigation' && (
        <CE_FormVariant1 variant={variant} />
      )}
    </>
  );
};

export default CE_FormMain;
