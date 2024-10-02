'use client';

import { T_ContentMainProps } from '@/app/$action/constants';
import { CE_ContentVariant01 } from './client.content.variant01';
import { CE_ContentVariant02 } from './client.content.variant02';
import { CE_ContentVariant03 } from './client.content.variant03';

export function CE_ContentMain({
  data,
  title,
  variant = '01',
}: T_ContentMainProps) {
  return (
    <>
      {variant === '01' && <CE_ContentVariant01 data={data} title={title} />}
      {variant === '02' && <CE_ContentVariant02 data={data} />}
      {variant === '03' && <CE_ContentVariant03 data={data} />}
    </>
  );
}
