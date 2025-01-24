export type T_SimulationInvestment = {
  oneTimeInvestmentResult: number;
  periodicInvestmentResult: number;
};

export type T_SimulationInvestmentRequest = {
  investmentAmount: number;
  duration: number;
  interestRate: number;
};
