import React, { ReactEventHandler } from "react";
import styled from "styled-components";

import arrow_right from "../images/arrow_right.png";
import download from "../images/download.png";

import colors from "../layouts/colors";

type ThemeType = "arrow" | "download";

type Props = {
  icon?: ThemeType;
  children: string;
  onClick?: ReactEventHandler;
  style?: React.CSSProperties;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  height: 53px;

  white-space: nowrap;
`;

const ButtonComponent = styled.button`
  background-color: ${colors.primary};
  padding: 16px 80px 16px 24px;
  width: 100%;
  height: 100%;

  color: white;
  border: none;
  border-radius: 8px;

  text-align: left;

  :hover {
    background-color: #f16a4f;
  }

  :focus {
    background-color: #d7482b;
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  right: 26px;
`;

function Button({ icon = "arrow", onClick, children, style }: Props) {
  return (
    <Wrapper style={style}>
      <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
      <Icon src={icon === "arrow" ? arrow_right : download} />
    </Wrapper>
  );
}

export default Button;
