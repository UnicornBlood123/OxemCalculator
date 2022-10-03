export interface IInputField {
  isLoading: boolean;
  inputValue: number;
  setInputValue: (value: number) => void;
  inputValuePercent?: number;
  setInputValuePercent?: (value: number) => void;
  priceValue?: number;
  setPriceValue?: (value: number) => void;
  text: string;
  step: string;
  min: number;
  max: number;
}
