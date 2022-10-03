import React, { useState } from "react";
import * as S from "./Calculator.styles";
import InfoField from "../InfoField/InfoField";
import MonthField from "../../containers/MonthField/MonthField";
import PriceField from "../../containers/PriceField/PriceField";
import InitialPaymentField from "../../containers/InitialPaymentField/InitialPaymentField";

const Calculator = () => {
  const [priceValue, setPriceValue] = useState<number>(3300000);
  const [initialPaymentValue, setInitialPaymentValue] =
    useState<number>(100000);
  const [inputValuePercent, setInputValuePercent] =
    useState<number>(12.72727272);
  const [monthValue, setMonthValue] = useState<number>(60);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const monthPay = Math.round(
    (priceValue - initialPaymentValue) *
      ((0.035 * Math.pow(1 + 0.035, monthValue)) /
        (Math.pow(1 + 0.035, monthValue) - 1))
  );
  const sumLeasing = Math.round(initialPaymentValue + monthValue * monthPay);
  const dataObj = {
    priceValue,
    initialPaymentValue,
    inputValuePercent,
    monthValue,
    monthPay,
    sumLeasing,
  };

  return (
    <S.Content>
      <S.Header>Рассчитайте стоимость автомобиля в лизинг</S.Header>
      <S.FlexInputFields>
        <PriceField
          isLoading={isLoading}
          inputValue={priceValue}
          setInputValue={setPriceValue}
          text={"Стоимость автомобиля"}
          step={"₽"}
          min={1000000}
          max={6000000}
        />
        <InitialPaymentField
          isLoading={isLoading}
          inputValue={initialPaymentValue}
          setInputValue={setInitialPaymentValue}
          inputValuePercent={inputValuePercent}
          setInputValuePercent={setInputValuePercent}
          text={"Первоначальный взнос"}
          step={"%"}
          priceValue={priceValue}
          min={10}
          max={60}
        />
        <MonthField
          isLoading={isLoading}
          inputValue={monthValue}
          setInputValue={setMonthValue}
          text={"Срок лизинга"}
          step={"мес."}
          min={1}
          max={60}
        />
      </S.FlexInputFields>
      <S.FlexInfoFields>
        <InfoField
          text={"Сумма договора лизинга"}
          sum={sumLeasing.toLocaleString("ru-RU") + " ₽"}
        />
        <InfoField
          text={"Ежемесячный платеж от"}
          sum={monthPay.toLocaleString("ru-RU") + " ₽"}
        />
        <InfoField
          text={"Оставить заявку"}
          data={dataObj}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </S.FlexInfoFields>
    </S.Content>
  );
};

export default Calculator;
