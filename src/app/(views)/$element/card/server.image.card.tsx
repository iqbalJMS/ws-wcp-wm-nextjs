'use server';

import Image from '@/lib/element/global/image2';
import React from 'react';
import creditImage from '@/../../public/images/dummy/cardCredit.png';

export default async function SE_ImagePromo({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="w-full relative h-[10.125rem] object-contain">
      <Image
        alt={`promo-${title}`}
        extern={!!image.toString()}
        fill
        src={image ? `${creditImage}` : ''}
      />
    </div>
  );
}
