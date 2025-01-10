'use client';

/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_ResponGetEmagazine,
  T_RequestMagazine,
} from '@/api/e-magazine/api.get-e-magazine.type';
import { ACT_GetMagazine } from '@/app/(views)/$action/magazine/action.get-magazine';

export function CFN_GetMagazine(
  transit: Call,
  data: T_RequestMagazine,
  onSuccess?: (data: T_PostResponse<T_ResponGetEmagazine> | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToMagazinePayload(data);
    const actionResult = await ACT_GetMagazine(payload);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToMagazinePayload(
  form: T_RequestMagazine
): T_RequestMagazine {
  return {
    page: form.page,
  };
}

export function CFN_ValidateGetMagazineFields(
  page: keyof T_RequestMagazine,
  value: any
): string {
  switch (page) {
    default:
      return '';
  }
}
