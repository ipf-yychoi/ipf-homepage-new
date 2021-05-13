export async function getAllJobs(signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/career`, {
    signal: signal,
  })
    .then((response) => response.json())
    .catch((error) => {
      if (error.name !== 'AbortError') {
        console.log('request failed', error);
      } else {
        console.log('request cancelled', error);
      }
    });
}

export async function getJobDetail(details: string, signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/doc/${details}`, {
    signal: signal,
  })
    .then((response) => response.json())
    .catch((error) => {
      if (error.name !== 'AbortError') {
        console.log('request failed', error);
      } else {
        console.log('request cancelled', error);
      }
    });
}
