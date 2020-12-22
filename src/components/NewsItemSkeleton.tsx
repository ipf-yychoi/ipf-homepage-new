import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import NewsItemContainer from "../components/NewsItemContainer";
import NewsItemPublisher from "../components/NewsItemPublisher";
import NewsItemTitle from "../components/NewsItemTitle";
import NewsItemDescription from "../components/NewsItemDescription";
import NewsItemDate from "../components/NewsItemDate";

export const NewsItemContainerSkeleton = styled(NewsItemContainer)`
  :hover {
    box-shadow: none;
  }

  :active {
    background-color: white;
  }
`;

function NewsItemSkeleton() {
  return (
    <NewsItemContainerSkeleton>
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

export default NewsItemSkeleton;
