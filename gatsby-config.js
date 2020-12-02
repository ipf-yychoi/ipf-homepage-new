module.exports = {
  siteMetadata: {
    title: `iPorfolio Homepage`,
    author: `SeHee Hyung`,
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
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/assets/translations`,
        languages: [`ko`, `en`],
        defaultLanguage: `ko`,
        redirect: false,
      },
    },
  ],
};
