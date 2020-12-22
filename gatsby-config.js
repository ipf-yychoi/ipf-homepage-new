module.exports = {
  siteMetadata: {
    title: `iPorfolio Homepage`,
    author: `SeHee Hyung`,
    siteUrl: `https://company.iportfolio.co.kr`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-async`,
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `ko`],
        defaultLanguage: `ko`,
        debug: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      },
    },
    {
      resolve: `gatsby-plugin-cname`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "256699829",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
};
