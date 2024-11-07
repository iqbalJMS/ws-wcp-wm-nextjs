'use server';

import { API_GetSinglePage } from '@/api/single-page/api.get-single-page';

export async function ACT_GetSinglePage({
  // lang,
  alias,
}: {
  // lang: string;
  alias: string;
}): Promise<any> {
  const response = await API_GetSinglePage({ alias });
  // console.log({ lang, alias, response });
  return response;
}
