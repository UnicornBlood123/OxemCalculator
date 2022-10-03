import React from "react";
import * as S from "./SubmitButton.styles";
import { ISubmitButton } from "./SubmitButton.interfaces";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SubmitButton = ({
  data,
  text,
  isLoading,
  setIsLoading,
}: ISubmitButton) => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 21, color: "#C4C4C4" }} spin />
  );
  const onSubmit = () => {
    setIsLoading(true);
    fetch("https://eoj3r7f3r4ef6v4.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log("Success:", data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  };

  return (
    <S.StyledButton disabled={isLoading} onClick={onSubmit}>
      <h2>{isLoading ? "" : text}</h2>
      {isLoading && <Spin indicator={antIcon} />}
    </S.StyledButton>
  );
};

export default SubmitButton;
