import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 48px;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    & {
      margin: 100px 48px;
      align-items: start;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    & {
      margin: 64px 36px;
      align-items: start;
    }
  }
  @media (max-width: 767px) {
    & {
      margin: 44px 20px;
      align-items: start;
    }
  } ;
`;
