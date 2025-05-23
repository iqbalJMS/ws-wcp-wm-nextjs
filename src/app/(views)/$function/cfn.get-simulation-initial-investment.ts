'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  validateMaxMin,
  validateMaxMinVariant,
  validateMaxMinVariant2,
} from '@/lib/functions/global/validate';
import { Call } from '@strix/client';
import {
  T_SimulationInitialInvestment,
  T_SimulationInitialInvestmentRequest,
} from '@/api/simulation/initial-investment/api.get.initial-investment.type';
import { ACT_GetSimulationInitialInvestment } from '@/app/(views)/$action/simulation/action.get.simulation';

export function CFN_GetSimulationInitialInvestment(
  transit: Call,
  data: T_SimulationInitialInvestmentRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationInitialInvestment> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationInitialInvestment(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationInitialInvestmentPayload(
  form: T_SimulationInitialInvestmentRequest
): T_SimulationInitialInvestmentRequest {
  return {
    duration: form.duration,
    targetInvestmentValue: form.targetInvestmentValue,
    interestRate: form.interestRate,
  };
}

export function CFN_ValidateCreateSimulationInitialInvestmentFields(
  name: keyof T_SimulationInitialInvestmentRequest,
  value: any
): string {
  switch (name) {
    case 'targetInvestmentValue':
      return validateMaxMinVariant(value, 1000000, 1000000000000);
    case 'duration':
      return validateMaxMinVariant2(value, 1, 25);
    case 'interestRate':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    default:
      return '';
  }
}
