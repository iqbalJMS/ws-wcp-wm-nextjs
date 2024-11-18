'use server';

import { API_GetOurStoryDetail } from '@/api/single-page/api.get-our-stories.detail ';

export async function ACT_GetOurStoryDetail({
  lang,
  alias,
  nid,
}: {
  lang: string;
  alias: string;
  nid: number;
}): Promise<any> {
  const response = await API_GetOurStoryDetail({ lang, alias, nid });
  return response;
}
