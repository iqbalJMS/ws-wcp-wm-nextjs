'use client';

import CE_TwoColumnPriority from './client.grid.two-column.priority';
import CE_TwoColumnPrivate from './client.grid.two-column.private';

const CE_GridMainTwoColumn = ({
  variant,
  dataCard1,
  dataCard2,
  imageContent1,
  imageContent2,
}: {
  variant: any;
  dataCard1: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  dataCard2: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  imageContent1: string;
  imageContent2: string;
}) => {
  return (
    <>
      {variant === 'wm-private-main-navigation' && (
        <CE_TwoColumnPrivate
          variant={variant}
          dataCard1={dataCard1}
          dataCard2={dataCard2}
          imageContent1={imageContent1}
          imageContent2={imageContent2}
        />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_TwoColumnPriority
          variant={variant}
          dataCard1={dataCard1}
          dataCard2={dataCard2}
          imageContent1={imageContent1}
          imageContent2={imageContent2}
        />
      )}
    </>
  );
};

export default CE_GridMainTwoColumn;
