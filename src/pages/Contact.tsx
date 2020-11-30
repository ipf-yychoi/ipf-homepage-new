import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";
import Footer from "../components/Footer";

import img_contact_company from "../images/Contact/img_contact_company.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  margin: 120px 0;

  width: 100%;

  ${Typography("heading1")};
`;

const SubTitle = styled.p`
  ${Typography("heading1")};
  line-height: 42px;
`;

const Title = styled.dt`
  ${Typography("heading2")};
`;

const Description = styled.dt`
  ${Typography("body", 1.4, 400)};

  max-width: 407px;

  margin-top: 8px;
  margin-bottom: 40px;
`;

const ContactCompanyImage = styled.img`
  margin: 64px 0 16px 0;
`;

const AddressBook = styled.dl`
  width: 512px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0 40px;
  border-radius: 16px;

  background-color: ${colors.gray1};
`;

const GoogleMaps = styled.iframe`
  width: 512px;
  height: 508px;
  border-radius: 16px;
  border: none;
`;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>Contact Us</Header>
      <Container>
        <SubTitle>{t("HPG-82")}</SubTitle>
        <ContactCompanyImage src={img_contact_company} />
        <div style={{ display: "flex", gap: "16px" }}>
          <AddressBook>
            <Title>{t("HPG-83")}</Title>
            <Description>{t("HPG-84")}</Description>
            <Title>{t("HPG-85")}</Title>
            <Description>{t("HPG-86")}</Description>
            <Title>{t("HPG-87")}</Title>
            <Description>{t("HPG-88")}</Description>
            <Title>{t("HPG-89")}</Title>
            <Description>0505-333-8288</Description>
          </AddressBook>
          <GoogleMaps
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDo3ca0SZp6U61rlNXuAw-wluwd8wcDnVY
                &q=place_id:ChIJGRgP7KhgezUR91qgEhZU0Ug"
            allowFullScreen
          ></GoogleMaps>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
