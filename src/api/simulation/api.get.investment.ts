'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/api.get.investment.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationInvestment(
  request: T_SimulationInvestmentRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationInvestment>>(
      '/api/brimw/simulasi/estimateInvestment',
      formData
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Investment:', error);
    return undefined;
  }
}
