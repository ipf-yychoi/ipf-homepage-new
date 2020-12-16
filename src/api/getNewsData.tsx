export function getNewsData(signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/news`, {
    signal: signal,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
