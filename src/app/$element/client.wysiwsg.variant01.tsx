'use client';

import Image from 'next/image';
import Link from 'next/link';
import WhatsappIcon from '@/lib/element/global/icons/whatsapp-icon';

const CE_WYSIWSGVariant01 = ({
  category,
  title,
  date,
  image,
  body,
  nid,
}: {
  category: string;
  title: string;
  date: string;
  image: string;
  body: string;
  nid: number;
}) => {
  const urlLink = `https://${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/web/wealth-management/article-detail/${nid}`;

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
      <div className="container py-20">
        <div className="mb-10">
          {category && <div className="text-sm">{category ?? ''}</div>}
          {title && (
            <h1 className="text-xl font-semibold w-full line-clamp-2">
              {title ?? ''}
            </h1>
          )}
        </div>
        <div className="px-20 mdmax:px-0">
          <div className="flex items-center mb-5 text-base mdmax:text-sm">
            <div className="mr-2">
              <svg
                className="w-5 h-5 mdmax:w-4 mdmax:h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="29.72"
                height="32"
                viewBox="0 0 1664 1792"
              >
                <path
                  fill="currentColor"
                  d="M128 1664h288v-288H128zm352 0h320v-288H480zm-352-352h288V992H128zm352 0h320V992H480zM128 928h288V640H128zm736 736h320v-288H864zM480 928h320V640H480zm768 736h288v-288h-288zm-384-352h320V992H864zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448m736 864h288V992h-288zM864 928h320V640H864zm384 0h288V640h-288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5m384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90"
                />
              </svg>
            </div>
            {formatDate(date ?? '')}
          </div>
          <div className="mb-10 flex justify-center items-center ">
            {image && (
              <div className="h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${image ?? ''}`}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="px-20 mdmax:px-0 mdmax:pr-10 relative">
            {/* hidden for while */}
            <div className="hidden">
              <div className="mb-2">
                <div className="h-16 transform rotate-90 flex items-center justify-center ">
                  Share
                </div>
              </div>
              <div>
                <Link
                  className="mb-4 flex items-center justify-center cursor-pointer"
                  href={`https://www.facebook.com/sharer/sharer.php?&quote=${urlLink ?? '/404'}`}
                  target="_blank"
                >
                  {/* facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.24"
                    height="32"
                    viewBox="0 0 896 1664"
                    className="w-5 h-5 text-privatecolor"
                  >
                    <path
                      fill="currentColor"
                      d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"
                    />
                  </svg>
                </Link>
                <Link
                  href={`https://x.com/intent/tweet?text=${urlLink ?? '/404'}`}
                  className="mb-4 flex items-center justify-center cursor-pointer"
                  target="_blank"
                >
                  {/* twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="32"
                    viewBox="0 0 1600 1280"
                    className="w-5 h-5 text-privatecolor"
                  >
                    <path
                      fill="currentColor"
                      d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50"
                    />
                  </svg>
                </Link>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlLink ?? '/404'}`}
                  className="mb-4 flex items-center justify-center cursor-pointer"
                  target="_blank"
                >
                  {/* linkedin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.69"
                    height="32"
                    viewBox="0 0 1536 1504"
                    className="w-5 h-5 text-privatecolor"
                  >
                    <path
                      fill="currentColor"
                      d="M349 497v991H19V497zm21-306q1 73-50.5 122T184 362h-2q-82 0-132-49T0 191q0-74 51.5-122.5T186 20t133 48.5T370 191m1166 729v568h-329V958q0-105-40.5-164.5T1040 734q-63 0-105.5 34.5T871 854q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52t87-43.5T1157 474q171 0 275 113.5T1536 920"
                    />
                  </svg>
                </Link>
                <Link
                  href={`https://web.whatsapp.com/send?text=${urlLink ?? '/404'}`}
                  className="mb-4 flex items-center justify-center cursor-pointer"
                  target="_blank"
                >
                  <WhatsappIcon
                    width={30}
                    height={30}
                    className="text-privatecolor"
                  />
                </Link>
              </div>
            </div>
            {body ? (
              <div
                className="text-black text-opacity-90 wysiwsg-body text-base"
                dangerouslySetInnerHTML={{
                  __html:
                    body.replace(
                      /\/sites\/default/g,
                      `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/sites/default`
                    ) ?? '',
                }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CE_WYSIWSGVariant01;
