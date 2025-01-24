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
  // const [investasiList, setInvestasiList] = useState<any[]>([]);
  // const [bancasurranceList, setBancasurranceList] = useState<any[]>([]);

  // const filterFunc = (variant: string, category: string) => {
  //   const tempList: any[] = [];

  //   // const variantMap = {
  //   //   'wm-main-navigation': 'wealth_management',
  //   //   'wm-private-main-navigation': 'bri_private',
  //   //   'wm-prioritas-main-navigation': 'bri_prioritas',
  //   // };
  //   // const categoryMap = {
  //   //   // investasibri: 'investasi',
  //   //   // bancassurancebri: 'bancasurrance',
  //   //   'obligasi-private': 'obligasi',
  //   //   'brifine-private': 'brifine',
  //   //   'bancassurance-private': 'bancasurrance',
  //   //   'investasi-prioritas': 'investasi',
  //   //   'bancassurance-prioritas': 'bancasurrance',
  //   // };

  //   // data.forEach((temp) => {
  //   //   if (
  //   //     temp.site.find(({ value }) => value === variantMap?.[variant]) &&
  //   //     temp.category.find(({ value }) => value === categoryMap?.[category])
  //   //   ) {
  //   //     tempList.push(temp);
  //   //   }
  //   // });

  //   return tempList;
  // };

  // useEffect(() => {
  //   setBancasurranceList(filterFunc(variant, categoryParams));
  //   setInvestasiList(filterFunc(variant, categoryParams));
  // }, []);

  return (
    <>
      {/* {!!investasiList?.length && <CE_InvestasiWM dataCard={investasiList} />}
      {!!bancasurranceList?.length && (
        <CE_BancasurranceWm dataCard={bancasurranceList} />
      )} */}
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

      {/* {site == 'wealth_management' && category == 'bancasurrance' ? (
        <CE_BancasurranceWm dataCard={data as any} />
      ) : null}
      {site == 'bri_private' && category == 'bancasurrance' ? (
        <CE_BancasurrancePrivate dataCard={data as any} />
      ) : null}
      {site == 'bri_prioritas' && category == 'bancasurrance' ? (
        <CE_BancasurrancePrioritas dataCard={data as any} />
      ) : null}
      {site == 'bri_prioritas' && category == 'investasi' ? (
        <CE_InvestasiPrioritas dataCard={data as any} />
      ) : null}
      {site == 'wealth_management' && category == 'investasi' ? (
        <CE_InvestasiWM dataCard={data as any} />
      ) : null}
      {site == 'bri_private' && category == 'obligasi' ? (
        <CE_ObligasiPrivate dataCard={data as any} />
      ) : null}
      {site == 'bri_private' && category == 'brifine' ? (
        <CE_ObligasiPrivate dataCard={data as any} />
      ) : null} */}
    </>
  );
};

export default CE_GridMain;

// wm-main-navigation
// wm-private-main-navigation
// wm-prioritas-main-navigation
