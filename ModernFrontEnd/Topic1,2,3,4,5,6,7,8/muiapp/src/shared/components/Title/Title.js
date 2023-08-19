import React from "react";
import {
  Button,
  ButtonOutlined,
  HeaderStyled,
  PasswordInputStyled,
  TitleBig,
  Wrapper,
} from "./TitleStyled";

function Title() {
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
