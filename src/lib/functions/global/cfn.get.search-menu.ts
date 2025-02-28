'use client';

import { Call } from '@strix/client';

import { T_ApiGetSearchMenu } from '@/api/search/api.get-search-menu.type';
import { ACT_GetSearchMenu } from '@/app/$action/action.get.search-menu';

export function CFN_GetSearchMenu(
  transit: Call,
  onSuccess?: (_: T_ApiGetSearchMenu[] | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSearchMenu();
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}
