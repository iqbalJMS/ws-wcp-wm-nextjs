'use server';

import { API_GetDetailPage } from '@/api/single-page/api.get-detail.page';

export async function ACT_GetDetailPage({
  lang,
  alias,
  nid,
}: {
  lang: string;
  alias: string;
  nid: number;
}): Promise<any> {
  const response = await API_GetDetailPage({ lang, alias, nid });
  return response;
}
