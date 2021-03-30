import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../layouts/Typography";

const SwitchLanguageButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

type ButtonProps = {
  lang: string;
};

const ToKOButton = styled.button`
  padding: 0.8rem 1.6rem;
  width: 5.2rem;
  height: 3.7rem;
  background-color: ${colors.gray5};
  border-radius: 8px;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-right: 0.8rem;

  ${Typography("body", 1.4, 700)};

  background-color: ${(props: ButtonProps) =>
    props.lang === "ko" ? "white" : colors.gray5};
  color: ${(props: ButtonProps) =>
    props.lang === "ko" ? colors.black : colors.gray4};

  transition: all 0.1s linear;
  :hover {
    background-color: ${(props: ButtonProps) => props.lang !== "ko" && "white"};
    color: ${(props: ButtonProps) => props.lang !== "ko" && colors.black};
  }

  :active {
    background-color: ${(props: ButtonProps) =>
      props.lang === "ko" ? "white" : colors.gray5};
    color: ${(props: ButtonProps) =>
      props.lang === "ko" ? colors.black : colors.gray4};
  }
`;

const ToENButton = styled(ToKOButton)`
  background-color: ${(props: ButtonProps) =>
    props.lang === "en" ? "white" : colors.gray5};
  color: ${(props: ButtonProps) =>
    props.lang === "en" ? colors.black : colors.gray4};

  transition: all 0.1s linear;
  :hover {
    background-color: ${(props: ButtonProps) => props.lang !== "en" && "white"};
    color: ${(props: ButtonProps) => props.lang !== "en" && colors.black};
  }

  :active {
    background-color: ${(props: ButtonProps) =>
      props.lang === "en" ? "white" : colors.gray5};
    color: ${(props: ButtonProps) =>
      props.lang === "en" ? colors.black : colors.gray4};
  }
`;

export default function LanguageSwitch({}) {
  const { language, changeLanguage } = useI18next();
  const [lang, setLang] = useState<string>(language);
  const { t } = useTranslation();

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  const handleOnClick = (lng: string) => {
    setLang(lng);
  };

  return (
    <SwitchLanguageButtonWrapper>
      <ToKOButton onClick={() => handleOnClick("ko")} lang={lang}>
        KO
      </ToKOButton>
      <ToENButton onClick={() => handleOnClick("en")} lang={lang}>
        EN
      </ToENButton>
    </SwitchLanguageButtonWrapper>
  );
}
