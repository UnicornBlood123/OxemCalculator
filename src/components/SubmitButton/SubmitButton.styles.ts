import styled from "styled-components";
import { Button } from "antd";
import "../../fonts/fonts.css";

export const StyledButton = styled(Button)`
  width: 100%;
  height: 68px;
  border-radius: 40px;
  background: ${({ theme: { colors } }): string => colors.orange};
  padding: 8px 16px 12px;
  gap: 10px;
  border: none;
  h2 {
    color: ${({ theme: { colors } }): string => colors.white};
    font-size: 30px;
    font-family: "Nekst-Black";
  }
  &:focus {
    background: ${({ theme: { colors } }): string => colors.orange};
  }
  &:disabled,
  &:disabled:hover {
    cursor: default;
    background: ${({ theme: { colors } }): string => colors.dark_orange};
  }
  &:hover {
    background: ${({ theme: { colors } }): string => colors.black};
  }
  &:active {
    background: ${({ theme: { colors } }): string => colors.orange};
  }

  @media (max-width: 425px) {
    height: 60px;
    padding: 7px 16px 11px;
    h2 {
      height: 20px;
      font-size: 22px;
    }
  }
`;
