'use client';

import CE_CardGrid5Private from '@/app/(views)/$element/grid/client.card-grid-5.private';
import CE_CardGrid5Priority from '@/app/(views)/$element/grid/client.card-grid-5.priority';

const CE_GridCard5Main = ({
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
        <CE_CardGrid5Private dataCard={dataCard} variant={variant} />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CardGrid5Priority dataCard={dataCard} variant={variant} />
      )}
    </>
  );
};

export default CE_GridCard5Main;
