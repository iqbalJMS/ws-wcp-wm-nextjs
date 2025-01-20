'use client';

import CE_InvestasiWM from './client.card-grid-investasi-WM';
import CE_BancasurranceWm from './client.card-grid-bancasurrance-Wm';
import CE_BancasurrancePrivate from './client.card-grid-bancasurrance-Private';
import CE_BancasurrancePrioritas from './client.card-grid-bancasurrance-Prioritas';
import CE_InvestasiPrioritas from './client.card-grid-investasi-prioritas';
import CE_ObligasiPrivate from './client.card-grid-obligasi-private';

const CE_GridMain = ({
  // variant,
  data,
  category,
  site,
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
    link: string;
  }>;
  variant: string;
  category: string;
  site: string;
}) => {
  // let isShow = '';
  // if (site == 'wealth_management') {
  //   isShow = 'wm-private-main-navigation';
  // } else if (isShow == 'bri_prioritas') {
  //   isShow = 'wm-prioritas-main-navigation';
  // } else {
  // }
  // console.log(site, category, 'aaa');

  return (
    <>
      {site == 'wealth_management' && category == 'investasi' ? (
        <CE_InvestasiWM dataCard={data as any} />
      ) : null}
      {site == 'wealth_management' && category == 'bancasurrance' ? (
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
      ) : null}
    </>
  );
};

export default CE_GridMain;
