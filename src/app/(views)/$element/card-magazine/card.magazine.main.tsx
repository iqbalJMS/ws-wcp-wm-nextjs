'use client';

import CE_CardMegazinePriority from './client.card.megazine.priority';
import CE_CardMegazinePrivate from './client.card.megazine.private';

const CE_CardMagazineMain = ({
  data,
  variant,
  display,
  heading,
  subHeading,
}: {
  data: Array<{
    title: string;
    subtitle: string;
    image: string;
    date: string;
    category: string;
    link: string;
  }>;
  variant: string;
  display: string;
  heading: string;
  subHeading: string;
}) => {
  return (
    <>
      {display === 'last_4_magazines' && (
        <CE_CardMegazinePriority
          cardData={data}
          display={display}
          variant={variant}
          heading={heading}
          subHeading={subHeading}
        />
      )}
      {display === 'all' && (
        <CE_CardMegazinePrivate
          cardData={data}
          variant={variant}
          display={display}
        />
      )}
    </>
  );
};

export default CE_CardMagazineMain;
