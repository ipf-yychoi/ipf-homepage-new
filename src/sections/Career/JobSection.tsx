import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import { getJobsListData, getJobDetail } from "../../api/getJobsData";

import Container from "../../components/Container";
import JobItem from "../../components/JobItem";

import img_arrow_jobs_right from "../../assets/images/Career/img_arrow_jobs_right.png";

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
    getJobsListData().then((resultData) => {
      setJobsData(resultData);
    });
  }, []);

  function displayJobsData(jobsListData: [JobItemDataType] | null) {
    if (jobsListData) {
      return jobsListData.map((jobItemData: JobItemDataType, index) => {
        return <JobItem jobItemData={jobItemData} />;
      });
    }
  }

  return (
    <ContainerStyled>
      {t("HPG-79")}
      <div style={{ marginTop: "64px", width: "100%" }}>
        {displayJobsData(jobsData)}
      </div>
    </ContainerStyled>
  );
}
