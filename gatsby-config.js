const path = require('path')

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    '@context': 'http://schema.org',
    name: 'Hesam Bayat',
    description: 'Hesam Bayat personal blog',
    siteUrl: 'https://hesambayat.com',
    image: 'https://hesambayat.com/images/hesam-bayat.png',
    author: {
      name: 'Hesam Bayat'
    },
    publisher: {
      name: 'Hesam Bayat',
      url: 'https://hesambayat.com',
      logo: 'https://hesambayat.com/images/hesam-bayat-sole-proprietorship.png',
    },
    social: {
      twitter: '@hsmbyt',
      fbAppID: '',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-plugin-sitemap',
      options: {
        exclude: ['/preview']
      }
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'hesambayatcom', // (REQUIRED, replace with your own)
        accessToken: 'MC5YZUFhZkJFQUFES3dLbUFV.ECZ-K--_vWYE77-977-977-977-9eO-_ve-_vW_vv73vv73vv70677-977-9Gu-_ve-_ve-_vXHvv73vv73vv73vv73vv73vv70', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: false, // (optional, activated Previews. Default: false)
        pages: [{ // (optional, builds pages dynamically)
          type: 'Post',         // TypeName from prismic
          match: '/:uid',  // Pages will be generated under this pattern
          path: '/post',        // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/post.js'),
        }],
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        // Enables 'Add to Homescreen' prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/meow-party.gif', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to 'anonymous'
        crossOrigin: 'use-credentials',
      }
    }
  ]
}
