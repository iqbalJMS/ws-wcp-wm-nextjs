'use server';

import { API_GetMiddleFooterMenu } from '@/api/footer/main-footer/api.get-middle-footer';
import { T_ResponseGetMiddleFooterMenu } from '@/api/footer/main-footer/api.get-middle-footer.type';

export async function ACT_GetMiddleMenuFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMiddleFooterMenu> {
  const response = await API_GetMiddleFooterMenu({ lang });
  return response;
}
