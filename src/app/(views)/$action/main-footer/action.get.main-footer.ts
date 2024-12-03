'use server';

import { API_GetMainFooterMenu } from '@/api/footer/main-footer/api.get-middle-footer';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-middle-footer.type';

export async function ACT_GetMainMenuFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu | null> {
  try {
    const response = await API_GetMainFooterMenu({ lang });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    return null;
  }
}
