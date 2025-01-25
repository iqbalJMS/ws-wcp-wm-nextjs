'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationInitialInvestment,
  T_SimulationInitialInvestmentRequest,
} from './api.get.initial-investment.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationInitialInvestment(
  request: T_SimulationInitialInvestmentRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationInitialInvestment>>(
      '/api/brimw/simulasi/estimateInitialInvestment',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation Initial Investment:',
      error
    );
    return undefined;
  }
}
