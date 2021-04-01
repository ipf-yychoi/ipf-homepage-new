import React from "react";
import styled, { css } from "styled-components";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../layouts/Typography";
import { responsive } from "../layouts/responsive";

type LanguageSwitchProps = {
  backgroundColor: string;
};

const SwitchLanguageButtonWrapper = styled.ul<LanguageSwitchProps>`
  display: flex;
  padding: 0.2rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "white" ? colors.primary : "rgba(255, 255, 255, 0.2)"};
  border-radius: 1rem;
  transition: background-color 1s ease-in-out;

  @media ${responsive.conditionForTablet} {
    align-self: center;
  }
`;

const CommonButtonStyle = css`
  padding: 0.6rem 1.2rem;
  ${Typography("body", 1.4, 700)};
  border-color: transparent;
  border-radius: 0.8rem;
  cursor: pointer;
`;

const SelectedItem = styled.li`
  ${CommonButtonStyle};
  background-color: #fff;
  color: ${colors.primary};
`;

const UnselectedItem = styled.li`
  ${CommonButtonStyle};
  background-color: transparent;
  color: #fff;
`;

export default function LanguageSwitch({
  backgroundColor = colors.primary,
}: LanguageSwitchProps) {
  const { language, languages, originalPath } = useI18next();

  return (
    <SwitchLanguageButtonWrapper backgroundColor={backgroundColor}>
      {languages.map((lng) =>
        lng === language ? (
          <SelectedItem key={lng}>
            <Link to={originalPath} language={lng}>
              {lng.toUpperCase()}
            </Link>
          </SelectedItem>
        ) : (
          <UnselectedItem key={lng}>
            <Link to={originalPath} language={lng}>
              {lng.toUpperCase()}
            </Link>
          </UnselectedItem>
        )
      )}
    </SwitchLanguageButtonWrapper>
  );
}
