'use server';

import { API_GetMainMiddleFooter } from '@/api/footer/middle-main-footer/api.get-main-middle-footer';
import { T_ResponseGetMainMiddleFooter } from '@/api/footer/middle-main-footer/api.get-main-middle-footer.type';

export async function ACT_GetMainMiddleFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainMiddleFooter> {
  const response = await API_GetMainMiddleFooter({ lang });
  return response;
}
