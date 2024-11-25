'use server';

import { API_GetFooterBottomRight } from '@/api/footer/bottom-footer/api.get-bottom-right-footer';
import { T_ResponseGetBottomRightFooter } from '@/api/footer/bottom-footer/api.get-bottom-right-footer.type';

export async function ACT_GetBottomMenuFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomRightFooter> {
  const response = await API_GetFooterBottomRight({ lang });
  return response;
}
