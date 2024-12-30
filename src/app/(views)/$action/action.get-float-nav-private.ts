'use server';

import { T_ResponGetFloatNavigation } from '@/api/floating-navigation/api.get-main-navigation.type';
import { API_GetFloatNavPrivate } from '@/api/floating-navigation/floating-private/api.get-private-navigation';
export async function ACT_GetFloatNavPrivate({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetFloatNavigation> {
  const response = await API_GetFloatNavPrivate({ lang });
  return response;
}
