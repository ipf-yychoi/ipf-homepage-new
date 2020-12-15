import { navigate } from "gatsby";

export function getJobsListData() {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/career`)
    .then((response) => response.json())
    .catch((error) => {
      return null;
    });
}

export function getJobDetail(details: string) {
  return fetch(`https://culture.iportfolio.co.kr/api/doc/${details}`)
    .then((response) => response.json())
    .catch((error) => {
      navigate("/Career/");
    });
}
