'use server';

import { API_GetSinglePage } from '@/api/single-page/api.get-single-page';

export async function ACT_GetSinglePage({
  lang,
  node,
}: {
  node: string;
  lang: string;
}): Promise<any> {
  const response = await API_GetSinglePage({ lang, node });
  return response;
}
