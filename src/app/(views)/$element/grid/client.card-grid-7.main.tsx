'use client';

import CE_CardGrid7Priority from '@/app/(views)/$element/grid/client.card-grid-7.priority';
import CE_CardGrid7Private from '@/app/(views)/$element/grid/client.card-grid-7.private';

const CE_GridCard7Main = ({
  variant,
  dataCard,
  siteParams,
}: {
  dataCard: Array<{
    title: string;
    category: string;
    date: string;
    image: string;
    description: string;
    nid: string;
    site: Array<{ value: string }>;
  }>;
  variant: string;
  siteParams: string;
}) => {
  const listArticle = dataCard.filter((item) =>
    item.site?.find(({ value }) => value === 'Wealth Management')
  );

  return (
    <>
      {siteParams === 'wealth_management' && (
        <CE_CardGrid7Private dataCard={listArticle} variant={variant} />
      )}
      {siteParams === 'wealth_management' && (
        <CE_CardGrid7Priority dataCard={listArticle} variant={variant} />
      )}
    </>
  );
};
export default CE_GridCard7Main;
