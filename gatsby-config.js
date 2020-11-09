module.exports = {
  siteMetadata: {
    title: `iPortfolio Homepage`,
    siteUrl: `https://www.iportfolio.co.kr`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
