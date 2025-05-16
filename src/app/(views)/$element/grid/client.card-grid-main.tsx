'use client';

import CE_BancasurrancePrioritas from './client.card-grid-bancasurrance-Prioritas';
import CE_BancasurrancePrivate from './client.card-grid-bancasurrance-Private';
import CE_BancasurranceWm from './client.card-grid-bancasurrance-Wm';
import CE_BrifinePrivate from './client.card-grid-brifine-private';
import CE_InvestasiPrioritas from './client.card-grid-investasi-prioritas';
import CE_InvestasiWM from './client.card-grid-investasi-WM';
import CE_ObligasiPrivate from './client.card-grid-obligasi-private';

const CE_GridMain = ({
  data,
  categoryParams,
  siteParams,
}: {
  data: Array<{
    title: string;
    image: string;
    description: string;
    nid: string;
    site: Array<{ value: string }>;
    category: Array<{ value: string }>;
  }>;
  categoryParams: string;
  siteParams: string;
}) => {
  const listProduct = data.filter(
    (item) =>
      item.site?.find(({ value }) => value === siteParams) &&
      item.category?.find(({ value }) => value === categoryParams)
  );

  return (
    <>
      {siteParams === 'wealth_management' && categoryParams === 'investasi' && (
        <CE_InvestasiWM dataCard={listProduct} />
      )}
      {siteParams === 'wealth_management' &&
        categoryParams === 'bancasurrance' && (
          <CE_BancasurranceWm dataCard={listProduct} />
        )}
      {siteParams === 'bri_prioritas' && categoryParams === 'bancasurrance' && (
        <CE_BancasurrancePrioritas dataCard={listProduct} />
      )}

      {siteParams === 'bri_private' && categoryParams === 'bancasurrance' && (
        <CE_BancasurrancePrivate dataCard={listProduct} />
      )}

      {siteParams === 'bri_private' && categoryParams === 'obligasi' && (
        <CE_ObligasiPrivate dataCard={listProduct} />
      )}

      {siteParams === 'bri_private' && categoryParams === 'brifine' && (
        <CE_BrifinePrivate dataCard={listProduct} />
      )}

      {siteParams === 'bri_prioritas' && categoryParams === 'investasi' && (
        <CE_InvestasiPrioritas dataCard={listProduct} />
      )}
    </>
  );
};

export default CE_GridMain;
