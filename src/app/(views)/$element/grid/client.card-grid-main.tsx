'use client';

import CE_BancasurrancePrioritas from './client.card-grid-bancasurrance-Prioritas';
import CE_BancasurrancePrivate from './client.card-grid-bancasurrance-Private';
import CE_BancasurranceWm from './client.card-grid-bancasurrance-Wm';
import CE_BrifinePrivate from './client.card-grid-brifine-private';
import CE_InvestasiPrioritas from './client.card-grid-investasi-prioritas';
import CE_InvestasiWM from './client.card-grid-investasi-WM';
import CE_ObligasiPrivate from './client.card-grid-obligasi-private';
// import CE_BancasurranceWm from './client.card-grid-bancasurrance-Wm';
// import { useEffect, useState } from 'react';

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
    site: any[];
    category: any[];
  }>;
  categoryParams: string;
  siteParams: string;
  variant: string;
}) => {
  return (
    <>
      {siteParams === 'wealth_management' && categoryParams === 'investasi' && (
        <CE_InvestasiWM dataCard={data} />
      )}
      {siteParams === 'wealth_management' &&
        categoryParams === 'bancasurrance' && (
          <CE_BancasurranceWm dataCard={data} />
        )}

      {siteParams === 'bri_private' && categoryParams === 'obligasi' && (
        <CE_ObligasiPrivate dataCard={data} />
      )}

      {siteParams === 'bri_private' && categoryParams === 'brifine' && (
        <CE_BrifinePrivate dataCard={data} />
      )}

      {siteParams === 'bri_private' && categoryParams === 'bancasurrance' && (
        <CE_BancasurrancePrivate dataCard={data} />
      )}

      {siteParams === 'bri_prioritas' && categoryParams === 'investasi' && (
        <CE_InvestasiPrioritas dataCard={data} />
      )}

      {siteParams === 'bri_prioritas' && categoryParams === 'bancasurrance' && (
        <CE_BancasurrancePrioritas dataCard={data} />
      )}
    </>
  );
};

export default CE_GridMain;
