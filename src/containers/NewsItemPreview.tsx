import React, { useState, useEffect } from "react";
import styled from "styled-components";

import colors from "../layouts/colors";

import { getNewsData } from "../api/getNewsData";

import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDescription from "../components/NewsItemDescription";
import NewsItemDate from "../components/NewsItemDate";

import img_spinner from "../assets/images/img_spinner.svg";

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
  background-color: white;
  cursor: pointer;

  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.3s ease-in-out;
  }

  :active {
    background-color: ${colors.gray1};
  }

  @media only screen and (min-width: 1040px) {
    display: flex;
    width: 336px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 40px 0;
  width: 100%;
  padding: 0px calc((100% - 320px) / 2);

  @media only screen and (min-width: 1040px) {
    padding: 0 calc((100% - 1040px) / 2);
    gap: 16px;
  }
`;

const Spinner = styled(img_spinner)`
  width: 100%;
  height: 50px;
`;

type NewsDataType = {
  date: string;
  publisher: string;
  title: string;
  link: string;
  summary: string;
};

function displayNewsItems(newsData: [NewsDataType] | null) {
  if (newsData) {
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
            <NewsItemDescription>{newsItem.summary}</NewsItemDescription>
            <NewsItemDate>{newsItem.date}</NewsItemDate>
          </NewsItemContainer>
        );
      }
    });
  }
}

function NewsItemPreview() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    getNewsData().then((resultData) => {
      setNewsData(resultData);
    });
  }, []);

  return newsData ? (
    <Wrapper>{displayNewsItems(newsData)}</Wrapper>
  ) : (
    <div style={{ margin: "90px 0" }}>
      <Spinner />
    </div>
  );
}

export default NewsItemPreview;
