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
      @media (max-width: 425px) {
        width: 67px;
        height: 48px;
        font-size: 22px;
        padding: 14px 14px;
        line-height: 20px;
      }
    `};
  ${(props) =>
    props.isLoading &&
    css`
      cursor: default;
      color: ${({ theme: { colors } }): string => colors.light_grey};
    `};
  @media (max-width: 425px) {
    color: ${({ theme: { colors } }): string => colors.mobile_grey};
    font-size: 22px;
  }
`;

export const StyledInput = styled(InputNumber)`
  width: 100%;
  border: none;
  background: none;
  cursor: default;
  input {
    height: 68px;
    padding: 24px 16px;
    border-radius: 16px;
    border: 2px solid ${({ theme: { colors } }): string => colors.light_white};
    background: ${({ theme: { colors } }): string => colors.light_white};
    color: ${({ theme: { colors } }): string => colors.grey};
    font-size: 30px;
    font-family: "Nekst-Black";
    &:disabled {
      background: ${({ theme: { colors } }): string => colors.disabled_grey};
      border: 2px solid
        ${({ theme: { colors } }): string => colors.disabled_grey};
      color: ${({ theme: { colors } }): string => colors.light_grey};
      cursor: default;
    }
    &:focus {
      background: ${({ theme: { colors } }): string => colors.white};
    }
    @media (max-width: 425px) {
      color: ${({ theme: { colors } }): string => colors.mobile_grey};
      font-size: 22px;
    }
  }
`;

export const WrapInput = styled.div`
  position: relative;
`;
