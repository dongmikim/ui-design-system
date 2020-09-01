const path = require('path')

module.exports = {
  siteMetadata: {
    title: `UI DESIGN`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Kim dong mi`,
  },
  plugins: [
    {
    resolve: `gatsby-plugin-mdx`,
    options: {
      defaultLayouts: {
        default: require.resolve("./src/components/layout.js"),
      },
    },
  },
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      src: path.join(__dirname, 'src'),
      pages: path.join(__dirname, 'src/pages'),
      ui: path.join(__dirname, 'src/ui'),
    }
  },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.(sa|sc|c)ss$/,
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}
