import React, { ReactEventHandler } from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";
import { high_resolution } from "../layouts/responsive";

import arrow_right from "../assets/images/arrow_right.png";
import arrow_right_2x from "../assets/images/arrow_right@2x.png";

type ThemeType = "arrow" | "download";

type Props = {
  href?: string;
  icon?: ThemeType;
  children: any;
  onClick?: ReactEventHandler;
  style?: React.CSSProperties;
};

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  height: 53px;

  white-space: nowrap;

  &:hover button {
    background-color: #f16a4f;
    padding-right: 96px;
    transition: all 0.1s ease-in-out;

    :after {
      left: 56px;
      transition: left 0.1s ease-in-out;
    }
  }

  &:active button {
    background-color: #d7482b;
  }
`;

const ButtonComponent = styled.a`
  background-color: ${colors.primary};
  padding: 16px 80px 16px 24px;
  width: 100%;
  height: 100%;

  color: white;
  border: none;
  border-radius: 8px;

  text-align: left;
  cursor: pointer;

  ${Typography("body", 1.4, 700)};
`;

type IconProps = {
  icon: ThemeType;
};

const Icon = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  right: 26px;

  cursor: pointer;

  background-image: url(${arrow_right});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${high_resolution} {
    background-image: url(${arrow_right_2x});
  }
`;

function ButtonArrow({ href, onClick, children, style }: Props) {
  return (
    <ButtonWrapper style={style}>
      <ButtonComponent href={href} onClick={onClick} download>
        {children}
      </ButtonComponent>
      <Icon />
    </ButtonWrapper>
  );
}

export default ButtonArrow;
