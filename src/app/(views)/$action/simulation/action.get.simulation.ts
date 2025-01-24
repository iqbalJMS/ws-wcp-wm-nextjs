'use server';
import { API_GetSimulationInvestment } from '@/api/simulation/api.get.investment';
import { T_SimulationInvestmentRequest } from '@/api/simulation/api.get.investment.type';

export async function ACT_GetSimulationInvestment(
  request: T_SimulationInvestmentRequest
) {
  const response = await API_GetSimulationInvestment(request);
  return response;
}
