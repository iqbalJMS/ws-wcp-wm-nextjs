'use client';

import CE_CardGrid7Priority from './client.card-grid-7.priority';
import CE_CardGrid7Private from './client.card-grid-7.private';

const CE_GridCard7Main = ({
  variant,
  dataCard,
}: {
  dataCard: Array<{
    title: string;
    category: string;
    date: string;
    image: string;
    description: string;
    nid: string;
  }>;
  variant: string;
}) => {
  return (
    <>
      {variant === 'wm-private-main-navigation' && (
        <CE_CardGrid7Private dataCard={dataCard} variant={variant} />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CardGrid7Priority dataCard={dataCard} variant={variant} />
      )}
    </>
  );
};

export default CE_GridCard7Main;
