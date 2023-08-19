import styled from "styled-components";

export const TitleBig = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`;

const buttonFontStyleHandle = ({ size }) => {
  switch (size) {
    case "sm":
      return "13px";
    case "md":
      return "16px";
    case "lg":
      return "22px";
  }
};

export const Button = styled.button`
  background-color: red;

  font-size: ${buttonFontStyleHandle};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export const HeaderStyled = styled.header`
  padding: 40px;
  background-color: red;
`;

export const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: red;
`;

export const PasswordInputStyled = styled.input.attrs((props) => ({
  // Every <PasswordInput /> should be type="password"
  type: "password",
}))`
  border: none;
  background-color: yellow;
`;
