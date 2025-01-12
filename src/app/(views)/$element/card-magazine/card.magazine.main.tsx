'use client';

import CE_CardMegazinePriority from './client.card.megazine.priority';
import CE_CardMegazinePrivate from './client.card.megazine.private';

const CE_CardMagazineMain = ({
  data,
  variant,
}: {
  data: Array<{
    title: string;
    subtitle: string;
    image: string;
    date: string;
    category: string;
    link: string;
  }>;
  variant: string;
}) => {
  return (
    <>
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CardMegazinePriority cardData={data} />
      )}
      {variant === 'wm-private-main-navigation' && (
        <CE_CardMegazinePrivate cardData={data} variant={''} />
      )}
    </>
  );
};

export default CE_CardMagazineMain;
