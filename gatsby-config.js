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
  ],
};
