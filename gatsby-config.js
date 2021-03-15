require('dotenv').config({
  path: `.env.development`,
});

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `Deep River Soaps`,
    description: `Handmade, Homemade Soap`,
    author: `Niall Mahford`,
  },
  plugins: [
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deep River Soaps Website`,
        short_name: `Deep River Soaps`,
        description: `Highest quality soaps, made by hand at home`,
        start_url: `/`,
        background_color: `#DCDCDC`,
        theme_color: `#DCDCDC`,
        display: `minimal-ui`,
        icon: `src/images/logo-favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
