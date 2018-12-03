const fetch = require(`node-fetch`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    {
      resolve: 'gatsby-source-graphql', // <- Configure plugin
      options: {
        typeName: 'moviesAll',
        fieldName: 'moviesAll', // <- fieldName under which schema will be stitched
        createLink: () =>
          createHttpLink({
            uri: `https://movie-api-xxx.herokuapp.com/v1alpha1/graphql`, // <- Configure connection GraphQL url
            headers: {
              ContentType: 'application/json',
            },
            fetch,
          }),
        refetchInterval: 10, // Refresh every 10 seconds for new data
      },
    },
  ],
}
