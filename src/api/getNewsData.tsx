export function getNewsData(signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/news`, {
    signal: signal,
  })
    .then((response) => response.json())
    .catch((error) => {
      if (error.name !== "AbortError") {
        console.log("request failed", error);
      } else {
        console.log("request cancelled", error);
      }
    });
}
