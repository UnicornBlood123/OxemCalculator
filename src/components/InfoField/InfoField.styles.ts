import styled from "styled-components";
import "../../fonts/fonts.css";
import { Header } from "../Calculator/Calculator.styles";
import { InputField } from "../InputField/InputField.styles";

export const InfoField = styled(InputField)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
  @media (max-width: 1100px) {
    width: 50%;
    color: ${({ theme: { colors } }): string => colors.light_black};
    &:last-child {
      width: 345px;
      margin-top: 44px;
    }
  }
  @media (max-width: 700px) {
    gap: 2px;
    width: 100%;
    &:last-child {
      width: 345px;
      margin: 0;
    }
  }
  @media (max-width: 425px) {
    p {
      font-size: 14px;
      line-height: 136%;
    }
    h1 {
      font-size: 22px;
      line-height: 20px;
    }
    &:last-child {
      width: 100%;
      margin: 2px 0 0;
    }
  }
`;

export const InfoSumField = styled.span`
  margin: 0;
  width: 100%;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme: { colors } }): string => colors.grey};
  margin: 0;
  font-family: "Nekst-Black";
  @media (max-width: 1024px) {
    color: ${({ theme: { colors } }): string => colors.light_black};
  }
  @media (max-width: 425px) {
    font-size: 22px;
    line-height: 20px;
  }
`;
