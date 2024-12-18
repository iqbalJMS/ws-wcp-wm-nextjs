'use client';

import CE_CardVariant15Priority from './client.card.variant15.priority';
import CE_CardVariant15 from './client.card.variant15.private';

const CE_CardFlipMain = ({
  variant,
  data,
  topTitle,
  subTitle,
  buttonText,
  buttonUri,
}: {
  variant: any;
  data: Array<{
    title: string;
    subtitle: string;
    desc: string;
    frontImage: string;
    backImage: string;
  }>;
  topTitle: string;
  subTitle: string;
  buttonText: string;
  buttonUri: string;
}) => {
  return (
    <>
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CardVariant15Priority
          data={data}
          topTitle={topTitle}
          subTitle={subTitle}
          buttonText={buttonText}
          buttonUri={buttonUri}
        />
      )}
      {variant === 'wm-private-main-navigation' && (
        <CE_CardVariant15
          data={data}
          topTitle={topTitle}
          subTitle={subTitle}
          buttonText={buttonText}
          buttonUri={buttonUri}
        />
      )}
    </>
  );
};

export default CE_CardFlipMain;
