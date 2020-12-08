import React, { useState, useEffect } from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";
import GoogleMaps from "../components/GoogleMaps";

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

export const loadMapApi = () => {
  const mapsURL = `https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyB-Wb4czbtvCwdlaK4iA9qyy1PutJdQc9M`;
  const scripts = document.getElementsByTagName("script");
  // Go through existing script tags, and return google maps api tag when found.
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapsURL) === 0) {
      return scripts[i];
    }
  }

  const googleMapScript = document.createElement("script");
  googleMapScript.src = mapsURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);

  return googleMapScript;
};

let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

export default function Contact() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>Contact Us</Header>
      <Container>
        <SubTitle>주식회사 아이포트폴리오</SubTitle>
        <ContactCompanyImage src={img_contact_company} />
        <AddressBook>
          <Title>주소</Title>
          <Description>(04522) 서울특별시 중구 남대문로9길 24 11층</Description>
          <Title>오시는 길</Title>
          <Description>
            지하철 2호선 을지로입구역 1번 출구 근처 패스트파이브 빌딩 12층으로
            방문해주시길 부탁드립니다.
          </Description>
          <Title>이메일</Title>
          <Description>
            사업 및 제휴: biz@iportfolio.co.kr
            <br />
            인터뷰 및 취재: pr@iportfolio.co.kr
            <br />
            채용 문의: jobs@iportfolio.co.kr
            <br />
            기타 문의: contact@iportfolio.co.kr
          </Description>
          <Title>전화번호</Title>
          <Description>0505-333-8288</Description>
        </AddressBook>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Wb4czbtvCwdlaK4iA9qyy1PutJdQc9M&q=Space+Needle,Seattle+WA"
          allowFullScreen
        />
      </Container>
    </div>
  );
}
