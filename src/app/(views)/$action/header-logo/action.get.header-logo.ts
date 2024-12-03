'use server';

import { API_GetHeaderLogo } from '@/api/header-logo/api.get-header-logo';
import { T_ResponGetHeaderLogo } from '@/api/header-logo/api.get-header-logo.type';

export async function ACT_GetHeaderLogo({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetHeaderLogo | null> {
  try {
    const response = await API_GetHeaderLogo({ lang });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    return null;
  }
}
