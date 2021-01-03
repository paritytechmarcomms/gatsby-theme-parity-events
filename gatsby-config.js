module.exports = {
  siteMetadata: {
    title: "Sub0 - Substrate Developer Community Conference",
    siteUrl: "https://sub0.parity.io",
    description: "Sub0 Online brings together blockchain developers and Substrate learners from around the world to share and discuss innovative Web3 solutions built using Substrate."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Substrate Developer Community Conference`,
        short_name: `Sub0`,
        start_url: `/`,
        icon: `src/images/favicon-sub0nline.png`,
        background_color: `#111111`,
        theme_color: `#18ffb2`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakerImages",
        path: "./src/images/speakers/",
      },
      __key: "images",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/content/",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
