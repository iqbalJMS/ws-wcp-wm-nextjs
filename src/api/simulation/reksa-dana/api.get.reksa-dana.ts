'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationReksaDana,
  T_SimulationReksaDanaRequest,
} from './api.get.reksa-dana.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationReksaDana(
  request: T_SimulationReksaDanaRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationReksaDana>>(
      '/api/brimw/simulasi/estimateReksadana',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Reksa Dana:', error);
    return undefined;
  }
}
