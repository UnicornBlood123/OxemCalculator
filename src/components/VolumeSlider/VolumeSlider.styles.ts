import styled, { css } from "styled-components";
import { Slider } from "antd";

export const StyledSlider = styled(Slider)<{ isLoading: boolean }>`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 2px;
  height: 0px;
  padding: 0;
  margin: 0;
  .ant-slider-rail,
  .ant-slider-track {
    height: 2px;
  }
  .ant-slider-handle {
    width: 16px;
    height: 16px;
    margin-top: -7px;
    &:hover,
    &:focus {
      background: ${({ theme: { colors } }): string => colors.orange};
      box-shadow: none;
    }
    background: ${({ theme: { colors } }): string => colors.orange};
    border: none;
  }
  ${(props) =>
    props.isLoading &&
    css`
      .ant-slider-handle {
        background: none;
      }
      .ant-slider-rail,
      .ant-slider-track {
        cursor: default;
      }
    `};
`;
