import styled from "styled-components";
import "../../fonts/fonts.css";

export const Header = styled.h1`
  width: 753px;
  font-size: 54px;
  line-height: 90%;
  color: ${({ theme: { colors } }): string => colors.black};
  margin: 0;
  font-family: "Nekst-Black";
`;

export const FlexInputFields = styled.div`
  margin-top: 32px;
  gap: 32px;
  display: flex;
  color: ${({ theme: { colors } }): string => colors.grey};
  p {
    margin: 0 0 24px;
    line-height: 20px;
    font-size: 16px;
    font-family: "Gilroy-Regular";
  }
  h1 {
    color: ${({ theme: { colors } }): string => colors.grey};
  }
`;

export const FlexInfoFields = styled(FlexInputFields)`
  margin-top: 44px;
  p {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  @media (max-width: 1100px) {
    ${FlexInputFields} {
      margin-top: 44px;
      flex-direction: column;
      gap: 32px;
    }
    ${FlexInfoFields} {
      margin: 37px 0 120px;
      gap: 0;
      flex-wrap: wrap;
      flex-direction: row;
      h1 {
        color: ${({ theme: { colors } }): string => colors.light_black};
      }
    }
  }
  @media (max-width: 851px) {
    ${Header} {
      width: 100%;
    }
    ${FlexInfoFields} {
      margin: 37px 0 156px;
    }
  }

  @media (max-width: 700px) {
    ${Header} {
      font-size: 34px;
    }
    ${FlexInputFields} {
      gap: 16px;
      p {
        margin: 0 0 8px;
      }
      input {
        height: 60px;
      }
    }
    ${FlexInfoFields} {
      margin: 37px 0 156px;
    }
  }
  @media (max-width: 425px) {
    ${FlexInputFields} {
      margin-top: 32px;
    }
    ${FlexInfoFields} {
      margin: 16px 0 64px;
      gap: 29px;
    }
  }

  @media (max-width: 375px) {
    ${Header} {
      width: 220px;
    }
  } ;
`;
