import React, { useState, useEffect } from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import { responsive } from "../layouts/responsive";

import { getNewsData } from "../api/getNewsData";

import Container from "../components/Container";
import NewsItemDescription from "../components/NewsItemDescription";

import NewsItemDesktop from "../components/NewsItemDesktop";
import NewsItemMobile from "../components/NewsItemMobile";

export const NewsItemContainer = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 3.2rem;
  border-radius: 1.6rem;
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

  @media ${responsive.conditionForDesktop} {
    width: 33.6rem;
  }
`;

export const NewsItemContainerSkeleton = styled(NewsItemContainer)`
  :hover {
    box-shadow: none;
  }

  :active {
    background-color: white;
  }
`;

export const NewsItemDescriptionStyled = styled(NewsItemDescription)`
  height: 6.3rem;
  overflow: hidden;
`;

const NewsItemDesktopContainer = styled(Container)`
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
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const [newsData, setNewsData] = useState<NewsDataType[]>([emptyNewsData]);

  useEffect(() => {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    getNewsData(signal).then((resultData: NewsDataType[]) => {
      setNewsData(resultData.slice(0, 3));
    });

    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
      abortController.abort();
      setNewsData([emptyNewsData]);
    };
  }, []);

  function handleResize() {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  return isMobile ? (
    <NewsItemMobile newsData={newsData} />
  ) : (
    <NewsItemDesktopContainer>
      <NewsItemDesktop newsData={newsData} />
    </NewsItemDesktopContainer>
  );
}

export default NewsItemPreview;
