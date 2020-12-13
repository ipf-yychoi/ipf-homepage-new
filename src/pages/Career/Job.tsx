import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Typography from "../../assets/Typography";

import { getJobDetail } from "../../api/getJobsData";

import Header from "../../components/Header";
import Container from "../../components/Container";

type Props = {
  location: any;
};

type JobDetailType = {
  date: string;
  publisher: string;
  title: string;
  link: string;
  summary: string;
};

const ContainerStyled = styled(Container)`
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h2`
  ${Typography("heading1")};
`;

const SubTitle = styled.p`
  ${Typography("body", 1.6, 700)};
`;

function displayJobDetail(jobsDetailData: [any] | null) {
  if (jobsDetailData) {
    console.log(jobsDetailData);
    return jobsDetailData.map((jobDetail: any, index: number) => {
      switch (jobDetail.depth) {
        case 1:
          return <Title>{jobDetail.title}</Title>;
        case 2:
          return <SubTitle>{jobDetail.title}</SubTitle>;
        case 3:
          return <div />;
      }
    });
  }
}

export default function Job({ location }: Props) {
  const [jobsData, setJobsData] = useState(null);

  useEffect(() => {
    getJobDetail(location.state.details).then((resultData) => {
      setJobsData(resultData);
    });
  }, []);

  return (
    <>
      <Header>Career</Header>
      <ContainerStyled>
        {jobsData && displayJobDetail(jobsData)}
      </ContainerStyled>
    </>
  );
}
