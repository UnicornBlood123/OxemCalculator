import React from "react";
import * as S from "./VolumeSlider.styles";
import { IVolumeSlider } from "./VolumeSlider.interfaces";

const VolumeSlider = ({
  min,
  max,
  inputValue,
  onChange,
  isLoading,
}: IVolumeSlider) => {
  return (
    <S.StyledSlider
      trackStyle={{ background: "#FF9514" }}
      disabled={isLoading}
      isLoading={isLoading}
      min={min}
      max={max}
      onChange={onChange}
      value={inputValue}
    />
  );
};

export default VolumeSlider;
