/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sarah Di",
    description: "Sarah Di. Lifelong Learner and CS Artist at Carnegie Mellon University.",
    author: `@difriendlygrape`,
    siteUrl: `https://www.sarahdi.com`,
    keywords: "Sarah, sarah di, di, computer science, art",
    image: `static/images/art/landscape/clouds.jpg`,
    menuLinks:[
      {
        name:'About',
        link:"/about/"
      },
      {
        name:'Work',
        link:"/work/"
      },
      {
        name:'Visual Arts',
        link:"/visual-arts/"
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sarah Di`,
        short_name: `Sarah Di`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "static/favicon.svg", // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
