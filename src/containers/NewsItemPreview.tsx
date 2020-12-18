import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import colors from "../layouts/colors";
import { responsive } from "../layouts/responsive";

import { getNewsData } from "../api/getNewsData";

import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDescription from "../components/NewsItemDescription";
import NewsItemDate from "../components/NewsItemDate";

type NewsItemContainerProps = {
  index: number;
};

const NewsItemContainer = styled.a`
  display: ${(props: NewsItemContainerProps) =>
    props.index === 0 ? "flex" : "none"};
  flex-direction: column;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 32px;
  border-radius: 16px;
  background-color: ${colors.gray1};
  cursor: pointer;

  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.3s ease-in-out;
  }

  :active {
    background-color: ${colors.gray1};
  }

  @media ${responsive.conditionForTablet} {
    display: flex;
    width: 336px;
    margin-right: 1.6rem;
  }
`;

const NewsItemContainerSkeleton = styled(NewsItemContainer)`
  :hover {
    box-shadow: none;
  }

  :active {
    background-color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 40px 0;
  width: 100%;
  padding: 0px calc((100% - 32rem) / 2);

  @media ${responsive.conditionForTablet} {
    padding: 0 calc((100% - 104rem) / 2);
  }
`;

const NewsItemDescriptionStyled = styled(NewsItemDescription)`
  height: 63px;
  overflow: hidden;
`;

export type NewsDataType = {
  date: string;
  publisher: string;
  title: string;
  link: string;
  summary: string;
};

function NewsItemSkeleton({ index }: { index: number }) {
  return (
    <NewsItemContainerSkeleton index={index}>
      <NewsItemPublisher>
        <Skeleton width={120} />
      </NewsItemPublisher>
      <NewsItemTitle>
        <Skeleton />
      </NewsItemTitle>
      <NewsItemDescription>
        <Skeleton count={3} />
      </NewsItemDescription>
      <NewsItemDate>
        <Skeleton width={60} />
      </NewsItemDate>
    </NewsItemContainerSkeleton>
  );
}

function displayNewsItems(newsData: [NewsDataType]) {
  return newsData.map((newsItem: NewsDataType, index) => {
    if (index < 3) {
      return (
        <NewsItemContainer
          key={newsItem.title}
          index={index}
          href={newsItem.link}
          target="_blank"
        >
          <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
          <NewsItemTitle>{newsItem.title}</NewsItemTitle>
          <NewsItemDescriptionStyled>
            {newsItem.summary}
          </NewsItemDescriptionStyled>
          <NewsItemDate>{newsItem.date}</NewsItemDate>
        </NewsItemContainer>
      );
    }
  });
}

function displayNewsItemsSkeleton() {
  return (
    <Wrapper>
      <NewsItemSkeleton index={0} />
      <NewsItemSkeleton index={1} />
      <NewsItemSkeleton index={2} />
    </Wrapper>
  );
}

export const emptyNewsData = {
  date: "",
  publisher: "",
  title: "",
  link: "",
  summary: "",
};

function NewsItemPreview() {
  const [newsData, setNewsData] = useState<[NewsDataType]>([emptyNewsData]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getNewsData(signal).then((resultData) => {
      setNewsData(resultData);
    });

    return function cleanup() {
      abortController.abort();
      setNewsData([emptyNewsData]);
    };
  }, []);

  return (
    <Wrapper>
      {newsData[0].title != ""
        ? displayNewsItems(newsData)
        : displayNewsItemsSkeleton()}
    </Wrapper>
  );
}

export default NewsItemPreview;
