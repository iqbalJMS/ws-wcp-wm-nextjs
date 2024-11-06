'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { T_CardProps } from '@/app/(views)/$element/types/promo';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const CE_Image = dynamic(() => import('./client.image'), {
  ssr: false,
});

export default function CE_Card(props: T_CardProps) {
  const { className, content, idx } = props;

  const modifiedSrc = !!props.content.img
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/${props.content.img}`
    : '';

  return (
    <motion.figure
      data-index={idx}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={['p-5 shadow-md m-2 bg-white space-y-7', className].join(' ')}
    >
      <div draggable={false} className="space-y-7">
        <Link href={content?.href ?? ''} draggable={false}>
          <CE_Image
            src={modifiedSrc}
            alt={content?.title}
            className="object-cover"
            wrapper={{ className: 'w-full aspect-square h-[14rem]' }}
            draggable={false}
          />
          <h3 className="line-clamp-2 mt-6 mb-8 text-red-700 font-semibold">
            {content?.title}
          </h3>
          <div className="space-y-[0.875rem]">
            <p className="line-clamp-1 text-sm">{content?.date}</p>
            {content?.description && (
              <div className="line-clamp-2 text-xs text-gray-500">
                {parseHTMLToReact(content?.description)}
              </div>
            )}
          </div>
        </Link>
      </div>
    </motion.figure>
  );
}
