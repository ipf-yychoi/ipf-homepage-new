import React from "react";

import {
  NewsDataType,
  NewsItemDescriptionStyled,
} from "../containers/NewsItemPreview";
import NewsItemContainer from "../components/NewsItemContainer";
import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDate from "../components/NewsItemDate";

type NewsItemDesktopProps = {
  newsItem: NewsDataType;
};

export default function NewsItemDesktop({ newsItem }: NewsItemDesktopProps) {
  return (
    <NewsItemContainer
      key={newsItem.title}
      href={newsItem.link}
      target="_blank"
    >
      <NewsItemPublisher>{newsItem.publisher}</NewsItemPublisher>
      <NewsItemTitle>{newsItem.title}</NewsItemTitle>
      <NewsItemDescriptionStyled>{newsItem.summary}</NewsItemDescriptionStyled>
      <NewsItemDate>{newsItem.date}</NewsItemDate>
    </NewsItemContainer>
  );
}
