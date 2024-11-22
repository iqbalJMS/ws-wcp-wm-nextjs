'use client';

import CE_FloatingVariant01 from '@/app/(views)/$element/floating-menu/client.floating.variant01';
import CE_FloatingVariant02 from '@/app/(views)/$element/floating-menu/client.floating.variant02';
import CE_FloatingVariant03 from '@/app/(views)/$element/floating-menu/client.floating.variant03';
const CE_FloatingMain = ({
  variant,
  data,
}: {
  data: Array<{
    title: string;
    alias: string;
    icon: string;
  }>;
  variant: any;
}) => {
  return (
    <>
      {variant === 'wm-main-navigation' && <CE_FloatingVariant01 data={data} />}
      {variant === 'wm-private-main-navigation' && (
        <CE_FloatingVariant02 data={data} />
      )}
      {variant === 'wm-priority-main-navigation' && (
        <CE_FloatingVariant03 data={data} />
      )}
    </>
  );
};

export default CE_FloatingMain;
