export function getJobsListData() {
    return fetch(
      `https://culture.iportfolio.co.kr/api/homepage/career`
    ).then((response) => response.json());
  }
  
  export function getJobsDetailsData() {
    https://culture.iportfolio.co.kr/api/doc/{details}
  }
