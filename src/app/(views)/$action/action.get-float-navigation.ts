'use server';

import { API_GetFloatNavigation } from '@/api/floating-navigation/api.get-main-navigation';
import { T_ResponGetFloatNavigation } from '@/api/floating-navigation/api.get-main-navigation.type';
export async function ACT_GetFloatNavigation({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetFloatNavigation> {
  const response = await API_GetFloatNavigation({ lang });
  return response;
}
