const { NODE_ENV } = process.env;

/**
 * In case there is a need to add plugins only in dev
 * envirnmnent
 * @example
 * plugins = [
 *   `gatsby-plugin-eslint`,
 * ]
 */
let plugins= [];
if (NODE_ENV == 'development') {
  plugins = []
}

module.exports = {
  siteMetadata: {
    title: `SWAK`,
    description: `We feel proud in announcing that we are official partners for EATON. We possess a team of skilled professionals who are well versed with the industry knowledge, quality standards, logical and technical skills, which they implement to acquire utmost customer satisfaction.`,
    author: `BadGAMERbaD`,
    googleSiteVerification: '3CXnajmQF2ySaDl8R4L4UdKagco966VeoX6CRmLumrw',
    contact: {
      address: `404/ Vighnaharta Tower, Gaondevi, Shivaji path, Thane (west) – 400602, INDIA.`,
      email: `swakenterprises@gmail.com`,
      phone0: `+91 9920245684`,
      phone1: `+91-8369754771`,
    }
  },
  plugins: [
    ...plugins,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}