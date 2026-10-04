import { InvestmentType } from "./InvestmentType";

export interface Investment {
  id: number ;
  amount: number;
  value: number ;
  created_at: string;
  upated_at: string;
  userId: number;
  investmentTypeId: number;
  user: null;
  investmentType: InvestmentType;
}
