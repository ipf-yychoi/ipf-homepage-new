import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import { getJobsListData } from "../../api/getJobsData";

import Container from "../../components/Container";
import JobItem from "../../components/JobItem";

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

export default function JobSection() {
  const { t } = useTranslation();

  const [jobsData, setJobsData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getJobsListData(signal).then((resultData) => {
      setJobsData(resultData);
    });

    return function cleanup() {
      abortController.abort();
      setJobsData(null);
    };
  }, []);

  function displayJobsData(jobsListData: [JobItemDataType] | null) {
    if (jobsListData) {
      return jobsListData.map((jobItemData: JobItemDataType, index) => {
        return <JobItem key={jobItemData.title} jobItemData={jobItemData} />;
      });
    }
  }

  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      {t("HPG-79")}
      <div style={{ marginTop: "64px", width: "100%" }}>
        {jobsData && displayJobsData(jobsData)}
      </div>
    </ContainerStyled>
  );
}
