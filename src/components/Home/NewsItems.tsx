import React from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

const NewsData = [
  {
    label: "헤럴드경제",
    header: '"자기주도적 학습 능력을 키워라" 언택트 교육 시대의 학습법은?',
    description:
      "코로나19가 바꿔놓은 일상의 모습 가운데, 그 변화의 양상이 두드러지는 분야가 바로 교육이다. 언택트 교육 시대가 찾아옴에 따라 온라인 교육",
    date: "2020.06.23",
  },
  {
    label: "dsf",
    header: '"자기주도적 학습 능력을 키워라" 언택트 교육 시대의 학습법은?',
    description:
      "코로나19가 바꿔놓은 일상의 모습 가운데, 그 변화의 양상이 두드러지는 분야가 바로 교육이다. 언택트 교육 시대가 찾아옴에 따라 온라인 교육",
    date: "2020.06.23",
  },
  {
    label: "asdf",
    header: '"자기주도적 학습 능력을 키워라" 언택트 교육 시대의 학습법은?',
    description:
      "코로나19가 바꿔놓은 일상의 모습 가운데, 그 변화의 양상이 두드러지는 분야가 바로 교육이다. 언택트 교육 시대가 찾아옴에 따라 온라인 교육",
    date: "2020.06.23",
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);
  margin: 40px 0;
  width: 100%;
`;

const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 336px;
  min-height: 238px;
  padding: 32px;
  border-radius: 16px;
  background-color: white;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }
`;

const NewsItemLabel = styled.p`
  ${Typography("caption", 1.2, 700)};
  color: ${colors.primary};
  text-align: left;
  margin: 8px 0;
`;

const NewsItemHeader = styled.p`
  ${Typography("body", 1.6, 700)};
  letter-spacing: -0.1px;
  margin: 8px 0px;
`;

const NewsItemDate = styled.p`
  ${Typography("caption", 1.2, 400)};
  color: ${colors.gray4};
  text-align: left;
  margin: 8px 0;
`;

const NewsItemDescription = styled.p`
  ${Typography("body", 1.4)};
  color: ${colors.black};
  margin: 24px 0 40px 0;

  word-break: keep-all;
`;

function NewsItem() {
  let isMobile = false;
  if (window.screen.width <= 480) isMobile = true;

  return (
    <Wrapper>
      {!isMobile &&
        Object.keys(NewsData).map(function (key: string, index) {
          return (
            <NewsItemContainer key={(NewsData as any)[key].label}>
              <a href="#" />
              <NewsItemLabel>{(NewsData as any)[key].label}</NewsItemLabel>
              <NewsItemHeader>{(NewsData as any)[key].header}</NewsItemHeader>
              <NewsItemDescription style={{ margin: "8px 0" }}>
                {(NewsData as any)[key].description}
              </NewsItemDescription>
              <NewsItemDate>{(NewsData as any)[key].date}</NewsItemDate>
            </NewsItemContainer>
          );
        })}
      {isMobile && (
        <NewsItemContainer>
          <a href="#" />
          <NewsItemLabel>{NewsData[0].label}</NewsItemLabel>
          <NewsItemHeader>{NewsData[0].header}</NewsItemHeader>
          <NewsItemDescription style={{ margin: "8px 0" }}>
            {NewsData[0].description}
          </NewsItemDescription>
          <NewsItemDate>{NewsData[0].date}</NewsItemDate>
        </NewsItemContainer>
      )}
    </Wrapper>
  );
}

export default NewsItem;
