'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin, validateMin } from '@/lib/functions/global/validate';
import { Call } from '@strix/client';
import {
  T_SimulationReksaDana,
  T_SimulationReksaDanaRequest,
} from '@/api/simulation/reksa-dana/api.get.reksa-dana.type';
import { ACT_GetSimulationReksaDana } from '@/app/(views)/$action/simulation/action.get.simulation';

export function CFN_GetSimulationReksaDana(
  transit: Call,
  data: T_SimulationReksaDanaRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationReksaDana> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationReksaDana(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationReksaDanaPayload(
  form: T_SimulationReksaDanaRequest
): T_SimulationReksaDanaRequest {
  return {
    amount: form.amount,
    investmentType: form.investmentType,
  };
}

export function CFN_ValidateCreateSimulationReksaDanaFields(
  name: keyof T_SimulationReksaDanaRequest,
  value: any
): string {
  switch (name) {
    case 'amount':
      return validateMin(value, 'Plafond Kredit ', 1);
    case 'investmentType':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    default:
      return '';
  }
}
