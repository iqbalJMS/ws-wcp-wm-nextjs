'use client';

import CE_CarouselVariant1 from './client.carousel.variant01';
import CE_CarouselVariant2 from './client.carousel.variant02';
import CE_CarouselVariant3 from './client.carousel.variant03';

const CE_CarouselMain = ({
  variant,
  data,
  title,
  subtitle,
  titlelink,
  linkcta,
}: {
  data: Array<{
    id: number;
    image: string;
    alt: string;
    label: string;
    desc: string;
    video: string;
    labelVideo: string;
    subLabel: string;
  }>;
  title: string;
  subtitle: string;
  titlelink: string;
  linkcta: string;
  variant: string;
}) => {
  return (
    <>
      {variant === 'wm-main-navigation' && (
        <CE_CarouselVariant3
          data={data}
          title={title}
          subtitle={subtitle}
          titlelink={titlelink}
          linkcta={linkcta}
        />
      )}
      {variant === 'wm-private-main-navigation' && (
        <CE_CarouselVariant2
          data={data}
          title={title}
          subtitle={subtitle}
          titlelink={titlelink}
          linkcta={linkcta}
        />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_CarouselVariant1
          data={data}
          title={title}
          subtitle={subtitle}
          titlelink={titlelink}
          linkcta={linkcta}
        />
      )}
    </>
  );
};

export default CE_CarouselMain;
