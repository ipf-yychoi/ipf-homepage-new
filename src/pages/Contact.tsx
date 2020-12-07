import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import Header from "../components/Header";
import Footer from "../containers/Footer";
import SubTitle from "../components/SubTitle";
import Container from "../components/Container";

import img_contact_company from "../assets/images/Contact/img_contact_company.png";

const SubTitleStyled = styled(SubTitle)`
  @media only screen and (max-width: 1040px) {
    width: 100%;
    font-size: 3.2rem;
  }
`;

const Title = styled.dt`
  ${Typography("heading2")};
`;

const Description = styled.dt`
  ${Typography("body", 1.4, 400)};

  max-width: 407px;
  margin-top: 8px;
  margin-bottom: 40px;

  @media only screen and (min-width: 1040px) {
    width: 100%;
  }
`;

const ContactCompanyImage = styled.img`
  width: 100%;
  padding: 0px calc((100% - 320px) / 2);
  border-radius: 16px;

  @media only screen and (min-width: 1040px) {
    margin: 64px 0 16px 0;
    padding: 0;
  }
`;

const AddressBook = styled.dl`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;

  background-color: ${colors.gray1};

  @media only screen and (min-width: 1040px) {
    width: 512px;
    padding: 40px 40px 0 40px;
  }
`;

const GoogleMaps = styled.iframe`
  width: 100%;
  height: 318px;
  border-radius: 16px;
  border: none;

  @media only screen and (min-width: 1040px) {
    width: 512px;
    height: 508px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media only screen and (min-width: 1040px) {
    flex-direction: row;
  }
`;

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-121")}</Header>
      <Container>
        <SubTitleStyled>{t("HPG-80")}</SubTitleStyled>
        <ContactCompanyImage src={img_contact_company} />
        <ContactInfo>
          <AddressBook>
            <Title>{t("HPG-81")}</Title>
            <Description>{t("HPG-82")}</Description>
            <Title>{t("HPG-83")}</Title>
            <Description>{t("HPG-84")}</Description>
            <Title>{t("HPG-85")}</Title>
            <Description style={{ width: "222px" }}>{t("HPG-86")}</Description>
            <Title>{t("HPG-87")}</Title>
            <Description>{t("HPG-122")}</Description>
          </AddressBook>
          <GoogleMaps
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDo3ca0SZp6U61rlNXuAw-wluwd8wcDnVY
                &q=place_id:ChIJGRgP7KhgezUR91qgEhZU0Ug&language=${i18n.language}`}
            allowFullScreen
          ></GoogleMaps>
        </ContactInfo>
      </Container>
      <Footer />
    </div>
  );
}
