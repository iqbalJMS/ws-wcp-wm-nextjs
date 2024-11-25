'use server';

import { API_GetFooterBottomLeft } from '@/api/footer/bottom-footer/api.get-bottom-left-footer';
import { T_ResponseGetBottomLeftFooter } from '@/api/footer/bottom-footer/api.get-bottom-left-footer.type';

export async function ACT_GetBottomLeftFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomLeftFooter> {
  const response = await API_GetFooterBottomLeft({ lang });
  return response;
}
