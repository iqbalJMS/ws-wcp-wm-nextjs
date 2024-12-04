'use server';

import { API_GetHeaderLogoPriority } from '@/api/header-logo/header-priority-logo/api.get-header-logo.priority';
import { T_ResponGetHeaderLogoPriority } from '@/api/header-logo/header-priority-logo/api.get-header-logo.priority.type';

export async function ACT_GetHeaderLogoPriority({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetHeaderLogoPriority | null> {
  try {
    const response = await API_GetHeaderLogoPriority({ lang });

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Header Logo Priority:', error);
    return null;
  }
}
