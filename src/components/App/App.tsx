import React, { ReactElement } from "react";
import * as S from "./App.styles";
import Calculator from "../Calculator/Calculator";

const App = (): ReactElement => {
  return (
    <S.Wrapper>
      <Calculator />
    </S.Wrapper>
  );
};

export default App;
