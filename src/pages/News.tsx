import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "@tapas/ui/lib/components/molecules/Pagination";
import ThemeProvider from "@tapas/ui/lib/theme";
import Skeleton from "react-loading-skeleton";

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

const NewsItemContainerSkeleton = styled(NewsItemContainer)`
  padding: 32px 40px 32px 40px;
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
  newsData: [NewsDataType] | null | undefined,
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
    let skeletonNewsItems = [];
    for (let i = 0; i < 7; i++) {
      skeletonNewsItems.push(
        <NewsItemContainerSkeleton key={i}>
          <NewsItemPublisher style={{ height: "0.8rem", width: "100%" }}>
            <Skeleton height={8} style={{ height: "0.8rem", width: "64px" }} />
          </NewsItemPublisher>
          <NewsItemTitle style={{ height: "0.8rem", width: "100%" }}>
            <Skeleton height={8} />
          </NewsItemTitle>
          <NewsItemDate
            style={{ height: "0.8rem", marginTop: 0, width: "10%" }}
          >
            <Skeleton height={8} />
          </NewsItemDate>
        </NewsItemContainerSkeleton>
      );
    }
    return skeletonNewsItems;
  }
}

export default function News() {
  const [newsData, setNewsData] = useState<[NewsDataType] | null>(null);
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    selectedPage: 0,
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getNewsData(signal).then((resultData) => {
      setNewsData(resultData);

      let numPages = Math.ceil(resultData.length / 8);
      if (numPages === 0) numPages = 1;
      setPaginationData({ ...paginationData, totalPages: numPages });
    });

    return function cleanup() {
      abortController.abort();
    };
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
