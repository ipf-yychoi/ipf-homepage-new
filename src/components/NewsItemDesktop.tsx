import React from "react";
import Skeleton from "react-loading-skeleton";

import {
  NewsItemContainerSkeleton,
  NewsDataType,
  NewsItemContainer,
  NewsItemDescriptionStyled,
} from "../containers/NewsItemPreview";
import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDescription from "../components/NewsItemDescription";
import NewsItemDate from "../components/NewsItemDate";

type NewsItemDesktopProps = {
  newsData: NewsDataType[];
};

export default function NewsItemDesktop({ newsData }: NewsItemDesktopProps) {
  return (
    <>
      {newsData.map((newsItem: NewsDataType) => {
        if (newsData[0].link == "") {
          return (
            <NewsItemContainerSkeleton key={newsItem.title}>
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
        } else {
          return (
            <NewsItemContainer
              key={newsItem.title}
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
      })}
    </>
  );
}
