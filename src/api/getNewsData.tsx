export function getNewsData() {
  return fetch(
    `https://culture.iportfolio.co.kr/api/homepage/news`
  ).then((response) => response.json());
}
