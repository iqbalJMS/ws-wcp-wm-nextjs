'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';

export async function API_GetSinglePage({
  lang,
  alias = 'wealth',
}: {
  lang: string;
  alias: string;
}): Promise<any> {
  try {
    const isEnglish = lang === 'en' ? '' : '/id';
    const response = await get(`${isEnglish}/${alias}?_format=json_recursive`);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    redirect('/404');
  }
}
