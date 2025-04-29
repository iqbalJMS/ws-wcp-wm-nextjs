'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';

const user = process.env.NEXT_PUBLIC_DRUPAL_AUTH || process.env.DRUPAL_AUTH;
const pass =
  process.env.NEXT_PUBLIC_DRUPAL_PASSWORD || process.env.DRUPAL_PASSWORD;

export async function API_GetDetailPage({
  lang,
  alias = 'node',
  nid,
}: {
  lang: string;
  alias: string;
  nid: number;
}): Promise<any> {
  try {
    const isEnglish = lang === 'en' ? '' : '/id';
    const response = await get(
      `${isEnglish}/${alias}/${nid}?_format=json_recursive`,
      { Authorization: `Basic ${btoa(`${user}:${pass}`)}` }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    redirect('/404');
  }
}
