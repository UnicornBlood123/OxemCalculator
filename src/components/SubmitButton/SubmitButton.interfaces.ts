export interface ISubmitButton {
  data: {
    priceValue: number;
    initialPaymentValue: number;
    inputValuePercent: number;
    monthValue: number;
    monthPay: number;
    sumLeasing: number;
  };
  text: string;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}
