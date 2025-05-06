'use client';

const CE_WYSIWSGVariantPriority = ({
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
          <div className="bg-black bg-opacity-5">
            <div className="px-20 mdmax:px-6 py-4 text-prioritycolor">
              {category ?? ''} | {formatDate(date ?? '')}
            </div>
            <div
              className="px-20 mdmax:px-6 py-5 bg-[#DBDAE4] text-prioritycolor text-2xl text-center"
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

export default CE_WYSIWSGVariantPriority;
