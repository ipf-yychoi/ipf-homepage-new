import React from 'react';

const scriptJson = `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iPortfolio",
  "url": "https://iportfolio.co.kr/",
  "sameAs": [
    "https://m.post.naver.com/ipofo",
    "https://apps.apple.com/app/oxfordlearnersbookshelf/id617832312",
    "https://play.google.com/store/apps/details?id=oxford.learners.bookshelf",
    "https://www.facebook.com/ipofo",
    "https://www.youtube.com/channel/UC_zfMeN2L_F1Ss23fPrqTyA"
  ]
}
`;

const NaverConnectionChannels = () => {
  return <script type="application/ld+json">{scriptJson}</script>;
};

export default NaverConnectionChannels;
