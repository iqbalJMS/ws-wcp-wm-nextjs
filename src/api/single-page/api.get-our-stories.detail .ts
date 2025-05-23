'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';

export async function API_GetOurStoryDetail({
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
      `${isEnglish}/${alias}/${nid}?_format=json_recursive`
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    redirect('/404');
  }
}
