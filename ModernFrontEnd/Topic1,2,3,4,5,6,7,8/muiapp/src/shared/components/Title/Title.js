import React from "react";
import {
  Button,
  ButtonOutlined,
  HeaderStyled,
  PasswordInputStyled,
  TitleBig,
  Wrapper,
} from "./TitleStyled";
import { useQueryClient } from "react-query";

function Title() {
  const queryClient = useQueryClient();

  const cacheData = queryClient.getQueryData("posts");

  console.log("cacheData", cacheData?.data);

  return (
    <>
      <HeaderStyled></HeaderStyled>
      <PasswordInputStyled name="password" onChange={() => {}} />
      <Wrapper>
        <TitleBig>Lorem ipsum</TitleBig>
        <Button size="sm">Send</Button>
        <ButtonOutlined size="md">Clear</ButtonOutlined>
      </Wrapper>
    </>
  );
}

export default Title;
