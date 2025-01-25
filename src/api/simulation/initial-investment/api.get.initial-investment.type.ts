export type T_SimulationInitialInvestment = {
  oneTimeInvestmentRequired: number;
  periodicInvestmentRequired: number;
};

export type T_SimulationInitialInvestmentRequest = {
  targetInvestmentValue: number;
  duration: number;
  interestRate: number;
};
