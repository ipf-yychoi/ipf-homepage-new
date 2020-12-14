import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import { getJobDetail } from "../api/getJobsData";

import Label from "../components/Label";

import img_arrow_jobs_right from "../assets/images/Career/img_arrow_jobs_right.png";

type JobItemDataType = {
  part: string;
  title: string;
  details: string;
  due_date: string;
};

type Props = {
  jobItemData: JobItemDataType;
};

const Item = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  white-space: nowrap;
  background-color: white;
  cursor: pointer;

  margin-bottom: 8px;

  transition: all 0.1s linear;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }

  :focus {
    background-color: ${colors.gray1};
  }

  @media only screen and (min-width: 1040px) {
    width: 1040px;
    flex-direction: row;
    padding: 40px;
  }
`;

const Arrow = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  right: 44px;
  top: 40px;
`;

const TypeOfJob = styled.p`
  ${Typography("body")};
  width: 12.4rem;
  text-align: left;
`;

const LabelStyled = styled(Label)`
  color: ${colors.black};
  width: 100%;
  margin: 0;
  text-align: left;
`;

export default function JobItem({ jobItemData }: Props) {
  console.log(jobItemData.details);
  return (
    <div style={{ display: "flex" }} key={jobItemData.title}>
      <Item onClick={() => navigate(`/Career/Job`, { state: jobItemData })}>
        <TypeOfJob>{jobItemData.part}</TypeOfJob>
        <LabelStyled>{jobItemData.title}</LabelStyled>
      </Item>
      <Arrow src={img_arrow_jobs_right} />
    </div>
  );
}
