'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationObligasi,
  T_SimulationObligasiRequest,
} from './api.get.obligasi.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationObligasi(
  request: T_SimulationObligasiRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationObligasi>>(
      '/api/brimw/simulasi/estimateObligasi',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Obligasi:', error);
    return undefined;
  }
}
