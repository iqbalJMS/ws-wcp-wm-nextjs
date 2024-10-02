'use server';

import { get } from '@/api/common/fetch';

export async function API_GetSinglePage({
  lang,
  node = '15',
}: {
  lang: string;
  node: string;
}): Promise<any> {
  try {
    const isEnglish = lang === 'en' ? '' : '/id';
    const response = await get(
      `${isEnglish}/node/${node}?_format=json_recursive`
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    return [];
  }
}
