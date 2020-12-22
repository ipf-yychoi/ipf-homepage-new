import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { getNewsData } from "../api/getNewsData";

import Container from "../components/Container";
import NewsItemDesktop from "../components/NewsItemDesktop";
import NewsItemMobile from "../components/NewsItemMobile";
import NewsItemDescription from "../components/NewsItemDescription";
import NewsItemSkeleton from "../components/NewsItemSkeleton";

export const NewsItemDescriptionStyled = styled(NewsItemDescription)`
  height: 6.3rem;
  overflow: hidden;
`;

const ContainerStyled = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
`;

export type NewsDataType = {
  date: string;
  publisher: string;
  title: string;
  link: string;
  summary: string;
};

export const emptyNewsData = {
  date: "",
  publisher: "",
  title: "",
  link: "",
  summary: "",
};

function NewsItemPreview() {
  const [newsData, setNewsData] = useState<NewsDataType[]>([emptyNewsData]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getNewsData(signal)
      .then((resultData: NewsDataType[]) => {
        if (resultData.length >= 3) {
          setNewsData(resultData.slice(0, 3));
        } else {
          setNewsData(resultData);
        }
      })
      .catch(() => abortController.abort());

    return () => {
      abortController.abort();
      setNewsData([emptyNewsData]);
    };
  }, []);

  const breakpoints = useBreakpoint();

  return breakpoints.mobile ? (
    <NewsItemMobile newsData={newsData} />
  ) : (
    <ContainerStyled>
      {newsData[0].link == "" ? (
        <>
          <NewsItemSkeleton />
          <NewsItemSkeleton />
          <NewsItemSkeleton />
        </>
      ) : (
        newsData.map((newsItem: NewsDataType) => {
          return <NewsItemDesktop key={newsItem.link} newsItem={newsItem} />;
        })
      )}
    </ContainerStyled>
  );
}

export default NewsItemPreview;
