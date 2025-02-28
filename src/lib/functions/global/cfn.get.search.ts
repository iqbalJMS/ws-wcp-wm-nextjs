'use client';

import { Call } from '@strix/client';
import { T_PostResponse } from '@/api/common/fetch.type';
import { T_Search, T_SearchRequest } from '@/api/search/api.get.search.type';
import { ACT_GetSearch } from '@/app/$action/action.get.search';
export type T_GetSearch = T_SearchRequest;

export function CFN_GetSearch(
  transit: Call,
  data: T_GetSearch,
  onSuccess?: (_: T_PostResponse<T_Search> | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToSearchPayload(data);
    const actionResult = await ACT_GetSearch(payload);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSearchPayload(form: T_GetSearch): T_GetSearch {
  return {
    page: form.page,
    category: form.category,
    filter: form.filter,
    parent: form.parent,
  };
}

export function CFN_ValidateGetSearchFields(
  name: keyof T_GetSearch,
  _value: any
): string {
  switch (name) {
    default:
      return '';
  }
}
