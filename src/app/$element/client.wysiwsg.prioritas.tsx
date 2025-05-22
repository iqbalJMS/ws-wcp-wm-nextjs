'use client';

import Image from 'next/image';
import CE_ShareContent from '@/lib/element/global/share-content';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const CE_WYSIWSGPrioritas = ({
  category,
  title,
  date,
  image,
  body,
}: {
  category: string;
  title: string;
  date: string;
  image: string;
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
          <div className="h-[40rem] mdmax:h-[20rem] mb-10 flex justify-center items-center ">
            {image && (
              <div className="h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${image ?? ''}`}
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
            <div className="w-full flex justify-end pb-12 ">
              <CE_ShareContent />
            </div>
            {body ? (
              <div
                className="text-black text-opacity-90 wysiwsg-body text-base parsehtml"
                dangerouslySetInnerHTML={{
                  __html:
                    body.replace(
                      /\/sites\/default/g,
                      `${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=/sites/default`
                    ) ?? '',
                }}
              >
                {parseHTMLToReact(
                  body ?? '',
                  'text-black text-opacity-90 wysiwsg-body text-base parsehtml',
                  true
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CE_WYSIWSGPrioritas;
