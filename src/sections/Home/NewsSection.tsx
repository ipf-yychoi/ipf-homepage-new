import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { navigate } from "gatsby";

import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitleEng from "../../components/SubTitleEng";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import NewsItemPreview from "../../containers/NewsItemPreview";

export default function NewsSection() {
  const { t } = useTranslation();

  return (
    <Container style={{ backgroundColor: colors.gray1 }}>
      <Column style={{ width: "100%" }}>
        <Label>{t("HPG-93")}</Label>
        <SubTitleEng>{t("HPG-94")}</SubTitleEng>
        <NewsItemPreview />
        <Button onClick={() => navigate("/News")}>{t("HPG-4")}</Button>
      </Column>
    </Container>
  );
}
