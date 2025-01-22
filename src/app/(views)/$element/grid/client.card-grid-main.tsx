'use client';

import CE_InvestasiWM from './client.card-grid-investasi-WM';
import CE_BancasurranceWm from './client.card-grid-bancasurrance-Wm';
import { useEffect, useState } from 'react';

const CE_GridMain = ({
  data,
}: {
  data: Array<{
    title: string;
    image: string;
    description: string;
    nid: string;
    site: any[];
    category: any[];
  }>;
  variant: string;
}) => {
  const [investasiList, setInvestasiList] = useState<any[]>([]);
  const [bancasurranceList, setBancasurranceList] = useState<any[]>([]);

  useEffect(() => {
    const tempInvestasiList: any[] = [];
    const tempBancasurranceiList: any[] = [];

    data.filter((temp) => {
      if (
        temp.site.find(({ value }) => value === 'wealth_management') &&
        temp.category.find(({ value }) => value === 'investasi')
      ) {
        tempInvestasiList.push(temp);
      } else if (
        temp.site.find(({ value }) => value === 'wealth_management') &&
        temp.category.find(({ value }) => value === 'investasi')
      ) {
        tempBancasurranceiList.push(temp);
      }
    });
    setBancasurranceList(tempBancasurranceiList);
    setInvestasiList(tempInvestasiList);
  }, []);

  return (
    <>
      {!!investasiList?.length && <CE_InvestasiWM dataCard={investasiList} />}
      {!!bancasurranceList?.length && (
        <CE_BancasurranceWm dataCard={bancasurranceList} />
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
