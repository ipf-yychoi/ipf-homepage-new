import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "gatsby-plugin-intl";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

import img_arrow_down from "../../images/Career/img_arrow_down.png";

const EmploymentStepData = {
  first: {
    title: <FormattedMessage id="HPG-71" />,
    description: <FormattedMessage id="HPG-72" />,
  },
  second: {
    title: <FormattedMessage id="HPG-73" />,
    description: <FormattedMessage id="HPG-74" />,
    subText: <FormattedMessage id="HPG-75" />,
  },
  third: {
    title: <FormattedMessage id="HPG-76" />,
    description: <FormattedMessage id="HPG-77" />,
  },
  fourth: {
    title: <FormattedMessage id="HPG-78" />,
    description: <FormattedMessage id="HPG-79" />,
    subText: <FormattedMessage id="HPG-80" />,
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  margin: 120px 0;

  width: 100%;
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 16px 32px;

  border-radius: 16px;
  background-color: rgba(239, 80, 48, 0.1);

  margin-right: 32px;

  white-space: nowrap;
  ${Typography("heading2")};
  color: ${colors.primary};
`;

const ArrowDown = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  left: 5%;
  margin: 24px 0;
`;

const Column = styled.div`
  flex-direction: column;
  margin: auto 0;
`;

const Title = styled.h1`
  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const Caption = styled.caption`
  ${Typography("caption", 400)};

  margin: 24px 0 64px 0;
`;

const Description = styled.p`
  ${Typography("body", 1.6)};
  color: ${colors.black};

  word-break: keep-all;
`;

const SubText = styled.p`
  ${Typography("body", 1.4)};
`;

function EmploymentStep() {
  return (
    <Container>
      <Title>
        <FormattedMessage id="HPG-69" />,
      </Title>
      <Caption>
        <FormattedMessage id="HPG-70" />,
      </Caption>
      {Object.keys(EmploymentStepData).map(function (key: string, index) {
        return (
          <div key={key} style={{ width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <RedBubble>{(EmploymentStepData as any)[key].title}</RedBubble>
              <Column>
                <Description>
                  {(EmploymentStepData as any)[key].description}
                </Description>
                <SubText>{(EmploymentStepData as any)[key].subText}</SubText>
              </Column>
            </div>
            {key !== "fourth" && <ArrowDown src={img_arrow_down} />}
          </div>
        );
      })}
    </Container>
  );
}

export default EmploymentStep;
