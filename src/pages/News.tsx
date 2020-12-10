import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDate from "../components/NewsItemDate";
import Container from "../components/Container";
import Footer from "../containers/Footer";

import { getNewsData } from "../api/getNewsData";
import colors from "../layouts/colors";

import img_spinner from "../assets/images/img_spinner.svg";

const NewsContainer = styled(Container)`
  flex-direction: column;
  gap: 16px;
`;

const NewsItemContainer = styled.a`
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  padding: 24px;
  background-color: ${colors.gray1};
  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const Spinner = styled(img_spinner)`
  width: 50px;
  height: 50px;
`;

type NewsDataType = {
  date: string;
  publisher: string;
  title: string;
  link: string;
  summary: string;
};

function displayAllNewsData(newsData: [NewsDataType] | null) {
  if (newsData) {
    return newsData.map((newsItem: NewsDataType) => {
      return (
        <NewsItemContainer key={newsItem.title} href={newsItem.link}>
          <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
          <NewsItemTitle>{newsItem.title}</NewsItemTitle>
          <NewsItemDate>{newsItem.date}</NewsItemDate>
        </NewsItemContainer>
      );
    });
  } else {
    return <Spinner />;
  }
}

export default function News() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    getNewsData().then((resultData) => {
      setNewsData(resultData);
    });
  }, []);

  return (
    <>
      <Header>News</Header>
      <NewsContainer>{displayAllNewsData(newsData)}</NewsContainer>
      <Footer />
    </>
  );
}
