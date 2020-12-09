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

const NewsContainer = styled(Container)`
  flex-direction: column;
  gap: 16px;
`;

const NewsItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  padding: 24px;
  background-color: ${colors.gray1};
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
        <NewsItemContainer key={newsItem.title}>
          <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
          <NewsItemTitle>{newsItem.title}</NewsItemTitle>
          <NewsItemDate>{newsItem.date}</NewsItemDate>
        </NewsItemContainer>
      );
    });
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
