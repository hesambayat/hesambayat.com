import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useMetaData } from '../hooks'

export default props =>
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            name
            description
            siteUrl
            image
            author {
              name
            }
            publisher {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `}
    render={({ site }) => {
      const [metadata, { isArticle, markup }] = useMetaData(site.siteMetadata, props.markup)

      return (
        <>
          <Helmet>
            <title>{metadata.name}</title>
            <meta name="description" content={metadata.description} />
            <meta name="image" content={metadata.image} />
            <link rel="canonical" href={metadata.url} />

            <meta property="og:url" content={metadata.url} />
            {isArticle && <meta property="og:type" content="article" />}
            <meta property="og:title" content={metadata.name} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="fb:app_id" content={metadata.social.fbAppID} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={metadata.social.twitter} />
            <meta name="twitter:title" content={metadata.name} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content={metadata.image} />
          </Helmet>
          <Helmet>
            <script type="application/ld+json">{JSON.stringify(markup)}</script>
          </Helmet>
        </>
      )
    }}
  />
