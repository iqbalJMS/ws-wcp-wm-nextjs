'use client';

import CE_CardPromoPrivate from './client.card.promo-private';
import CE_CardPromoWM from './client.card.promo-wm';
import CE_CardPromoPrioritas from './client.card.promo-prioritas';

const CE_PromoMain = ({
  title,
  subtitle,
  promoConfig,
  variant,
  link,
}: {
  title: string;
  subtitle: string;
  promoConfig: string;
  variant: string;
  link: string;
}) => {
  return (
    <>
      {variant === 'wm-private-main-navigation' && (
        <CE_CardPromoPrivate
          title={title}
          subtitle={subtitle}
          promoConfig={promoConfig}
          variant={variant}
          link={link}
        />
      )}
      {variant === 'wm-main-navigation' && (
        <CE_CardPromoWM
          title={title}
          subtitle={subtitle}
          promoConfig={promoConfig}
          variant={variant}
          link={link}
        />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CardPromoPrioritas
          title={title}
          subtitle={subtitle}
          promoConfig={promoConfig}
          variant={variant}
          link={link}
        />
      )}
    </>
  );
};

export default CE_PromoMain;
