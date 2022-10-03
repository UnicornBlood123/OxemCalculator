import styled, { css } from "styled-components";
import "../../fonts/fonts.css";
import { InputNumber } from "antd";

export const InputField = styled.div`
  position: relative;
  width: 427px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const StepVolume = styled.span<{ border: boolean; isLoading: boolean }>`
  position: absolute;
  line-height: 120%;
  top: 16px;
  right: 16px;
  color: ${({ theme: { colors } }): string => colors.grey};
  font-size: 30px;
  font-family: "Nekst-Black";
  ${(props) =>
    props.border &&
    css`
      background: ${({ theme: { colors } }): string => colors.dark_white};
      font-size: 20px;
      padding: 15px 17px;
      border-radius: 16px;
      height: 54px;
      width: 69px;
      top: 7px;
      right: 7px;
    `};
  ${(props) =>
    props.isLoading &&
    css`
      cursor: default;
      color: ${({ theme: { colors } }): string => colors.light_grey};
    `};
`;

export const StyledInput = styled(InputNumber)`
  width: 100%;
  border-radius: 16px;

  border: 2px solid ${({ theme: { colors } }): string => colors.light_white};
  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${({ theme: { colors } }): string => colors.light_white};
  }
  input {
    height: 68px;
    padding: 24px 16px;
    border-radius: 16px;
    background: ${({ theme: { colors } }): string => colors.light_white};
    color: ${({ theme: { colors } }): string => colors.grey};
    font-size: 30px;
    font-family: "Nekst-Black";
    &:disabled {
      cursor: default;
      background: ${({ theme: { colors } }): string => colors.light_white};
      color: ${({ theme: { colors } }): string => colors.light_grey};
    }
    &:focus {
      background: ${({ theme: { colors } }): string => colors.white};
    }
  }
`;

export const WrapInput = styled.div`
  position: relative;
`;
