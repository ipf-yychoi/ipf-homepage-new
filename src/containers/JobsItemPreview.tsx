import React, { useState, useEffect } from "react";

import { getJobsListData } from "../api/getJobsData";

import JobItem from "../components/JobItem";
import JobItemSkeleton from "../components/JobItemSkeleton";

type JobItemDataType = {
  part: string;
  title: string;
  details: string;
  due_date: string;
};

const emptyJobsData = {
  part: "",
  title: "",
  details: "",
  due_date: "",
};

export default function JobSection() {
  const [jobsData, setJobsData] = useState<JobItemDataType[]>([emptyJobsData]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getJobsListData(signal).then((resultData: JobItemDataType[]) => {
      setJobsData(resultData);
    });

    return function cleanup() {
      abortController.abort();
      setJobsData([emptyJobsData]);
    };
  }, []);

  return (
    <div
      style={{ marginTop: "64px", width: "100%" }}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      {jobsData[0].title == "" ? (
        <JobItemSkeleton />
      ) : (
        jobsData.map((jobItemData: JobItemDataType, index) => {
          return <JobItem key={jobItemData.title} jobItemData={jobItemData} />;
        })
      )}
    </div>
  );
}
