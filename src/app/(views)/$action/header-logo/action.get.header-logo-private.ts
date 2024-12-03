'use server';

import { API_GetHeaderLogoPrivate } from '@/api/header-logo/header-private-logo/api.get-header-logo.private';
import { T_ResponGetHeaderLogoPrivate } from '@/api/header-logo/header-private-logo/api.get-header-logo.private.type';

export async function ACT_GetHeaderLogoPrivate({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetHeaderLogoPrivate | null> {
  try {
    const response = await API_GetHeaderLogoPrivate({ lang });

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    return null;
  }
}
