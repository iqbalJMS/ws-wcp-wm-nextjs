'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin, validateMin } from '@/lib/functions/global/validate';
import { Call } from '@strix/client';
import {
  T_SimulationObligasi,
  T_SimulationObligasiRequest,
} from '@/api/simulation/obligasi/api.get.obligasi.type';
import { ACT_GetSimulationObligasi } from '@/app/(views)/$action/simulation/action.get.simulation';

export function CFN_GetSimulationObligasi(
  transit: Call,
  data: T_SimulationObligasiRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationObligasi> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationObligasi(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationObligasiPayload(
  form: T_SimulationObligasiRequest
): T_SimulationObligasiRequest {
  return {
    amount: form.amount,
    term: form.term,
    couponRate: form.couponRate,
  };
}

export function CFN_ValidateCreateSimulationObligasiFields(
  name: keyof T_SimulationObligasiRequest,
  value: any
): string {
  switch (name) {
    case 'amount':
      return validateMin(value, 'Plafond Kredit ', 1);
    case 'term':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    case 'couponRate':
      return validateMaxMin(
        value,
        'Nilai tidak boleh lebih besar dari',
        0,
        100
      );

    default:
      return '';
  }
}
