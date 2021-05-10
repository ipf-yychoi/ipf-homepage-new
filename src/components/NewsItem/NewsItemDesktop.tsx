import React from 'react';

import NewsDataType from './NewsDataType';
import { NewsItemDescriptionText } from './NewsItemDescription';
import NewsItemContainer from './NewsItemContainer';
import NewsItemPublisher from './NewsItemPublisher';
import NewsItemTitle from './NewsItemTitle';
import NewsItemDate from './NewsItemDate';

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
      <NewsItemDescriptionText>{newsItem.summary}</NewsItemDescriptionText>
      <NewsItemDate>{newsItem.date}</NewsItemDate>
    </NewsItemContainer>
  );
}
