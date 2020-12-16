export function getJobsListData(signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/career`, {
    signal: signal,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function getJobDetail(details: string, signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/doc/${details}`, {
    signal: signal,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
