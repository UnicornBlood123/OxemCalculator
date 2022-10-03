export interface IInfoField {
  data?: {
    priceValue: number;
    initialPaymentValue: number;
    inputValuePercent: number;
    monthValue: number;
    monthPay: number;
    sumLeasing: number;
  };
  text: string;
  sum?: string;
  isLoading?: boolean;
  setIsLoading?: (value: boolean) => void;
}
