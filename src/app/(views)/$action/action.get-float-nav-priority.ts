'use server';

import { T_ResponGetFloatNavigation } from '@/api/floating-navigation/api.get-main-navigation.type';
import { API_GetFloatNavPriority } from '@/api/floating-navigation/floating-priority/api.get-priority-navigation';
export async function ACT_GetFloatNavPriority({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetFloatNavigation> {
  const response = await API_GetFloatNavPriority({ lang });
  return response;
}
