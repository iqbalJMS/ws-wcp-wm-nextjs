'use client';

import CE_CarouselVariant3 from '@/app/(views)/$element/carousel/client.carousel.variant03';
import CE_CarouselVariant2 from '@/app/(views)/$element/carousel/client.carousel.variant02';
import CE_CarouselVariant1 from '@/app/(views)/$element/carousel/client.carousel.variant01';
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
  title: any;
  subtitle: any;
  titlelink: any;
  linkcta: any;
  variant: any;
}) => {
  return (
    <>
      {variant === 'wm-priority-main-navigation' && (
        <CE_CarouselVariant1
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
      {variant === 'wm-main-navigation' && (
        <CE_CarouselVariant3
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
