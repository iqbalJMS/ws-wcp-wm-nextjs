'use client';

import CE_CardMegazinePriority from './client.card.megazine.priority';
import CE_CardMegazinePrivate from './client.card.megazine.private';

const CE_CardMagazineMain = ({
  variant,
  title,
  label,
  linkMagezine,
}: {
  variant: any;
  title: string;
  label: string;
  linkMagezine: string;
}) => {
  return (
    <>
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CardMegazinePriority
          title={title}
          label={label}
          linkMagezine={linkMagezine}
        />
      )}
      {variant === 'wm-private-main-navigation' && (
        <CE_CardMegazinePrivate
          title={title}
          label={label}
          linkMagezine={linkMagezine}
        />
      )}
    </>
  );
};

export default CE_CardMagazineMain;
