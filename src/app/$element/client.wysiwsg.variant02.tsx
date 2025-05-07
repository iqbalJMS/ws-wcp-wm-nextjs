'use client';

import CE_ShareContent from '@/lib/element/global/share-content';

const CE_WYSIWSGVariant02 = ({
  category,
  title,
  date,
  body,
}: {
  category: string;
  title: string;
  date: string;
  body: string;
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <>
      <div className="container py-10">
        <div className="px-20 mdmax:px-0">
          <div className="w-full p-5 flex justify-end">
            <CE_ShareContent />
          </div>
          <div className="bg-black bg-opacity-5">
            {category && date ? (
              <div className="px-20 mdmax:px-6 py-4 text-privatecolor ">
                <span className="pr-2">{category ?? ''}</span> |
                <span className="pl-2">{formatDate(date ?? '')}</span>
              </div>
            ) : (
              <></>
            )}
            <div
              className="px-20 mdmax:px-6 py-5 bg-privatecolor text-white text-2xl font-semibold text-center"
              dangerouslySetInnerHTML={{
                __html:
                  title.replace(
                    /\/sites\/default/g,
                    `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                  ) ?? '',
              }}
            />
            <div className="px-20 mdmax:px-6 py-5 wysiwsg-body">
              <div
                className="text-lg mdmax:text-base text-black text-opacity-60"
                dangerouslySetInnerHTML={{
                  __html:
                    body.replace(
                      /\/sites\/default/g,
                      `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                    ) ?? '',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CE_WYSIWSGVariant02;
