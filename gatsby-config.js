/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'hesambayatcom', // (REQUIRED, replace with your own)
        accessToken: 'MC5YZUFhZkJFQUFES3dLbUFV.ECZ-K--_vWYE77-977-977-977-9eO-_ve-_vW_vv73vv73vv70677-977-9Gu-_ve-_ve-_vXHvv73vv73vv73vv73vv73vv70', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [{ // (optional, builds pages dynamically)
          type: 'Post',         // TypeName from prismic
          match: '/blog/:uid',  // Pages will be generated under this pattern
          path: '/blog',        // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/post.js'),
        }],
      }
    }
  ]
}
