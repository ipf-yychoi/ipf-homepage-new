import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "@tapas/ui/lib/components/molecules/Pagination";
import ThemeProvider from "@tapas/ui/lib/theme";

import Header from "../components/Header";
import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDate from "../components/NewsItemDate";
import Container from "../components/Container";
import Footer from "../containers/Footer";
import Spinner from "../components/Spinner";

import { getNewsData } from "../api/getNewsData";
import colors from "../layouts/colors";

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

const PaginationWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
`;

type NewsDataType = {
  date: string;
  publisher: string;
  title: string;
  link: string;
  summary: string;
};

function displayAllNewsData(
  newsData: [NewsDataType] | undefined,
  pageIndex: number
) {
  if (newsData) {
    let pageData = newsData.slice(pageIndex * 8, pageIndex * 8 + 8);
    return pageData.map((newsItem: NewsDataType, index: number) => {
      return (
        <NewsItemContainer key={newsItem.title} href={newsItem.link}>
          <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
          <NewsItemTitle>{newsItem.title}</NewsItemTitle>
          <NewsItemDate>{newsItem.date}</NewsItemDate>
        </NewsItemContainer>
      );
    });
  } else {
    console.log("spinner");
    return <Spinner />;
  }
}

export default function News() {
  const [newsData, setNewsData] = useState<[NewsDataType]>();
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    selectedPage: 0,
  });

  useEffect(() => {
    getNewsData().then((resultData) => {
      setNewsData(resultData);

      let numPages = Math.ceil(resultData.length / 8);
      if (numPages === 0) numPages = 1;
      setPaginationData({ ...paginationData, totalPages: numPages });
    });
  }, []);

  const handleOnClick = (selectedPage: number) => {
    setPaginationData({ ...paginationData, selectedPage: selectedPage - 1 });
  };

  return (
    <>
      <Header>News</Header>
      <NewsContainer
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {displayAllNewsData(newsData, paginationData.selectedPage)}
        {newsData && (
          <ThemeProvider
            customTheme={{
              colors: {
                primary: colors.primary,
              },
              fonts: {
                default: "SpoqaHanSans, san-serif",
              },
            }}
          >
            <PaginationWrapper>
              <Pagination
                current={1}
                totalPages={paginationData.totalPages}
                length={5}
                baseUrl="#"
                onClick={handleOnClick}
              />
            </PaginationWrapper>
          </ThemeProvider>
        )}
      </NewsContainer>
      <Footer />
    </>
  );
}
