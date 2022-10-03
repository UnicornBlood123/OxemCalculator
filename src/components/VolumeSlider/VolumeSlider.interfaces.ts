export interface IVolumeSlider {
  isLoading: boolean;
  min: number;
  max: number;
  inputValue: number;
  onChange: (value: number) => void;
}
