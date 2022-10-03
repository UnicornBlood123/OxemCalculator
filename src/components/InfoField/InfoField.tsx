import React from "react";
import * as S from "./InfoField.styles";
import SubmitButton from "../SubmitButton/SubmitButton";
import { IInfoField } from "./InfoField.interfaces";

const InfoField = ({
  text,
  sum,
  data,
  isLoading,
  setIsLoading,
}: IInfoField) => {
  return (
    <S.InfoField>
      {data && isLoading !== undefined && setIsLoading ? (
        <SubmitButton
          data={data}
          text={text}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        <>
          <p>{text}</p>
          <S.InfoSumField>{sum}</S.InfoSumField>
        </>
      )}
    </S.InfoField>
  );
};

export default InfoField;
