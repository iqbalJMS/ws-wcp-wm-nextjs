'use client';

import CE_LastFourMagazine from './client.card.last-four-megazine';
import CE_AllMagazine from './client.card.all-megazine';

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
        <CE_LastFourMagazine
          cardData={data}
          display={display}
          variant={variant}
          heading={heading}
          subHeading={subHeading}
        />
      )}
      {display === 'all' && (
        <CE_AllMagazine cardData={data} variant={variant} display={display} />
      )}
    </>
  );
};

export default CE_CardMagazineMain;
