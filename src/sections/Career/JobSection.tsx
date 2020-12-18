import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Skeleton from "react-loading-skeleton";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import { getJobsListData } from "../../api/getJobsData";

import Container from "../../components/Container";
import JobItem, {
  Item,
  DescriptionContainer,
  TypeOfJob,
  LabelStyled,
} from "../../components/JobItem";
import SubTitle from "../../components/SubTitle";

type JobItemDataType = {
  part: string;
  title: string;
  details: string;
  due_date: string;
};

const ContainerStyled = styled(Container)`
  flex-direction: column;
  background-color: ${colors.gray1};

  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const ItemSkeleton = styled(Item)`
  width: 100%;
`;

const DescriptionContainerSkeleton = styled(DescriptionContainer)`
  width: 100%;
`;

const TypeOfJobSkeleton = styled(TypeOfJob)`
  width: 100px;
`;

const LabelSkeleton = styled(LabelStyled)`
  width: 100%;
`;

const emptyJobsData = {
  part: "",
  title: "",
  details: "",
  due_date: "",
};

export default function JobSection() {
  const { t } = useTranslation();

  const [jobsData, setJobsData] = useState<[JobItemDataType]>([emptyJobsData]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getJobsListData(signal).then((resultData) => {
      setJobsData(resultData);
    });

    return function cleanup() {
      abortController.abort();
      setJobsData([emptyJobsData]);
    };
  }, []);

  function displayJobsData(jobsListData: [JobItemDataType]) {
    return jobsListData.map((jobItemData: JobItemDataType, index) => {
      return <JobItem key={jobItemData.title} jobItemData={jobItemData} />;
    });
  }

  function displayJobsDataSkeleton() {
    return (
      <ItemSkeleton as="div">
        <DescriptionContainerSkeleton>
          <TypeOfJobSkeleton>
            <Skeleton />
          </TypeOfJobSkeleton>
          <LabelSkeleton>
            <Skeleton />
          </LabelSkeleton>
        </DescriptionContainerSkeleton>
      </ItemSkeleton>
    );
  }

  return (
    <ContainerStyled>
      <SubTitle
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {t("HPG-79")}
      </SubTitle>
      <div
        style={{ marginTop: "64px", width: "100%" }}
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        {jobsData[0].title != ""
          ? displayJobsData(jobsData)
          : displayJobsDataSkeleton()}
      </div>
    </ContainerStyled>
  );
}
