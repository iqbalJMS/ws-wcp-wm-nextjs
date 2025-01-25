'use server';
import { API_GetSimulationInvestment } from '@/api/simulation/api.get.investment';
import { T_SimulationInvestmentRequest } from '@/api/simulation/api.get.investment.type';
import { API_GetSimulationInitialInvestment } from '@/api/simulation/initial-investment/api.get.initial-investment';
import { T_SimulationInitialInvestmentRequest } from '@/api/simulation/initial-investment/api.get.initial-investment.type';
import { API_GetSimulationObligasi } from '@/api/simulation/obligasi/api.get.obligasi';
import { T_SimulationObligasiRequest } from '@/api/simulation/obligasi/api.get.obligasi.type';
import { API_GetSimulationReksaDana } from '@/api/simulation/reksa-dana/api.get.reksa-dana';
import { T_SimulationReksaDanaRequest } from '@/api/simulation/reksa-dana/api.get.reksa-dana.type';

export async function ACT_GetSimulationInvestment(
  request: T_SimulationInvestmentRequest
) {
  const response = await API_GetSimulationInvestment(request);
  return response;
}

export async function ACT_GetSimulationInitialInvestment(
  request: T_SimulationInitialInvestmentRequest
) {
  const response = await API_GetSimulationInitialInvestment(request);
  return response;
}

export async function ACT_GetSimulationObligasi(
  request: T_SimulationObligasiRequest
) {
  const response = await API_GetSimulationObligasi(request);
  return response;
}

export async function ACT_GetSimulationReksaDana(
  request: T_SimulationReksaDanaRequest
) {
  const response = await API_GetSimulationReksaDana(request);
  return response;
}
