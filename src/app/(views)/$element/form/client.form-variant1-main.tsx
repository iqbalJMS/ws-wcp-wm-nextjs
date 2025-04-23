'use client';

import CE_FormVariant1 from './client.form-variant1';

const CE_FormMainVariant1 = ({
  variant,
  bgImage,
  title,
  subTitle,
  desc,
}: {
  variant: any;
  bgImage: Array<{ image: string }>;
  title: string;
  subTitle: string;
  desc: string;
}) => {
  return (
    <>
      {variant === 'wm-main-navigation' && (
        <CE_FormVariant1
          variant={variant}
          bgImage={bgImage}
          title={title}
          subTitle={subTitle}
          desc={desc}
        />
      )}
      {variant === 'wm-private-main-navigation' && (
        <CE_FormVariant1
          variant={variant}
          bgImage={bgImage}
          title={title}
          subTitle={subTitle}
          desc={desc}
        />
      )}
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_FormVariant1
          variant={variant}
          bgImage={bgImage}
          title={title}
          subTitle={subTitle}
          desc={desc}
        />
      )}
    </>
  );
};

export default CE_FormMainVariant1;
