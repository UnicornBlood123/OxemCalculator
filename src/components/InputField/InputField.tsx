import React, { memo, ReactElement, useEffect } from "react";
import * as S from "./InputField.styles";
import VolumeSlider from "../VolumeSlider/VolumeSlider";
import { IInputField } from "./InputField.interfaces";

const InputField = ({
  isLoading,
  inputValue,
  setInputValue,
  inputValuePercent,
  setInputValuePercent,
  priceValue,
  setPriceValue,
  text,
  step,
  min,
  max,
}: IInputField): ReactElement => {
  useEffect(() => {
    if (priceValue && inputValuePercent) {
      setInputValue(priceValue * inputValuePercent * 0.01);
    }
  }, [priceValue]);

  const onChange = (newValue: unknown): void => {
    if (priceValue && setInputValuePercent) {
      if (!newValue) {
        setInputValuePercent(min);
        setInputValue(priceValue * min * 0.01);
      } else {
        setInputValue(newValue as number);
        setInputValuePercent(((newValue as number) / priceValue) * 100);
      }
    } else {
      if (!newValue) {
        setInputValue(min);
      } else {
        setInputValue(newValue as number);
      }
      if (setPriceValue) {
        setPriceValue(newValue as number);
      }
    }
  };

  const onChangePercent = (newValue: unknown): void => {
    if (priceValue && setInputValuePercent) {
      setInputValue(priceValue * (newValue as number) * 0.01);
      setInputValuePercent(newValue as number);
    }
  };

  return (
    <S.InputField>
      <p>{text}</p>
      <S.WrapInput>
        <S.StyledInput
          disabled={isLoading}
          bordered={false}
          controls={false}
          min={priceValue ? min * 0.01 * priceValue : min}
          max={priceValue ? max * 0.01 * priceValue : max}
          maxLength={18}
          value={
            priceValue
              ? Math.round(inputValue).toLocaleString("ru-RU") + " ₽"
              : Math.round(inputValue).toLocaleString("ru-RU")
          }
          onChange={onChange}
        />
        <S.StepVolume
          border={text === "Первоначальный взнос"}
          isLoading={isLoading}
        >
          {priceValue && inputValuePercent
            ? Math.round(inputValuePercent) + step
            : step}
        </S.StepVolume>
      </S.WrapInput>
      <VolumeSlider
        isLoading={isLoading}
        min={min}
        max={max}
        inputValue={
          priceValue && inputValuePercent ? inputValuePercent : inputValue
        }
        onChange={priceValue ? onChangePercent : onChange}
      />
    </S.InputField>
  );
};

export default memo(InputField);
