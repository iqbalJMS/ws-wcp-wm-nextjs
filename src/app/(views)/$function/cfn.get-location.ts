'use client';

/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_ResponGetLocation,
  T_LocationRequest,
} from '@/api/location/api.get-location.type';
import { ACT_GetLocation } from '@/app/(views)/$action/location/action.get-location';

export function CFN_GetLocation(
  transit: Call,
  data: T_LocationRequest,
  onSuccess?: (data: T_PostResponse<T_ResponGetLocation> | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToLocationPayload(data);
    const actionResult = await ACT_GetLocation(payload);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToLocationPayload(
  form: T_LocationRequest
): T_LocationRequest {
  return {
    limit: form.limit,
    skip: form.skip,
    name: form.name,
    tipe: form.tipe,
    province: form.province,
  };
}

export function CFN_ValidateGetLocationFields(
  name: keyof T_LocationRequest,
  value: any
): string {
  switch (name) {
    default:
      return '';
  }
}
