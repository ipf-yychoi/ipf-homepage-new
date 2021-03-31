import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../layouts/Typography";
import { responsive } from "../layouts/responsive";

type LanguageSwitchProps = {
  backgroundColor: string;
};

type ButtonProps = {
  lang: string;
};

const SwitchLanguageButtonWrapper = styled.div<LanguageSwitchProps>`
  display: flex;
  padding: 0.2rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "white" ? colors.primary : "rgba(255, 255, 255, 0.2)"};
  border-radius: 1rem;
  transition: background-color 0.3s ease-in-out;

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

const SelectedButtonStyle = css`
  background-color: #fff;
  color: ${colors.primary};
`;

const UnselectedButtonStyle = css`
  background-color: transparent;
  color: #fff;
`;

const ToKOButton = styled.button<ButtonProps>`
  ${CommonButtonStyle};
  ${UnselectedButtonStyle};
  ${({ lang }) => lang === "ko" && SelectedButtonStyle}
`;

const ToENButton = styled.button<ButtonProps>`
  ${CommonButtonStyle};
  ${UnselectedButtonStyle};
  ${({ lang }) => lang === "en" && SelectedButtonStyle}
`;

export default function LanguageSwitch({
  backgroundColor = colors.primary,
}: LanguageSwitchProps) {
  const { language, changeLanguage } = useI18next();
  const [lang, setLang] = useState<string>(language);

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  const handleOnClick = (lng: string) => {
    setLang(lng);
  };

  return (
    <SwitchLanguageButtonWrapper backgroundColor={backgroundColor}>
      <ToKOButton onClick={() => handleOnClick("ko")} lang={lang}>
        KO
      </ToKOButton>
      <ToENButton onClick={() => handleOnClick("en")} lang={lang}>
        EN
      </ToENButton>
    </SwitchLanguageButtonWrapper>
  );
}
