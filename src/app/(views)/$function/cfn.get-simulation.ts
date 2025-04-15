'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  validateMin,
  validateMaxMinDuration,
  validateMax,
} from '@/lib/functions/global/validate';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';

import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/api.get.investment.type';
import { ACT_GetSimulationInvestment } from '@/app/(views)/$action/simulation/action.get.simulation';

export function CFN_GetSimulationInvestment(
  transit: Call,
  data: T_SimulationInvestmentRequest,
  onSuccess?: (data: T_PostResponse<T_SimulationInvestment> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationInvestment(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationInvestmentPayload(
  form: T_SimulationInvestmentRequest
): T_SimulationInvestmentRequest {
  return {
    investmentAmount: form.investmentAmount,
    duration: form.duration,
    interestRate: form.interestRate,
  };
}

export function CFN_ValidateCreateSimulationInvestmentFields(
  name: keyof T_SimulationInvestmentRequest,
  value: any
): string {
  switch (name) {
    case 'investmentAmount':
      switch (value) {
        case value < 1000000:
          return validateMin(value, 'Nilai harus lebih besar dari 1.000.000');
        case value > 1000000000000:
          return validateMax(
            value,
            'Nilai tidak boleh lebih besar dari Rp 1,000,000,000,000'
          );
      }
    case 'duration':
      return validateMaxMinDuration(
        value,
        'Nilai tidak boleh kurang dari 1 atau tidak boleh lebih besar dari 25',
        1,
        25
      );
    case 'interestRate':
      return validateMin(value, 'rate', 0);
    default:
      return '';
  }
}
