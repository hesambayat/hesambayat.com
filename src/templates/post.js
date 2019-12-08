import React from 'react'
import { graphql } from 'gatsby'
import { RichText, Elements } from 'prismic-reactjs'
import Img from 'gatsby-image'
import * as Component from '../components'

export default ({ data }) => {
  if (!data) return 'loading...'

  const { post } = data.prismic
  if (!post) return 'Not found!'

  const htmlSerializer = (type, element, content, children, key) => {
    switch (type) {
      case Elements.preformatted:
        return React.createElement('pre', { className: 'prettyprint', key }, children)

      default:
        return null
    }
  }

  return (
    <>
      <Component.Schema
        markup={{
          "@type": "Article",
          "headline": RichText.asText(post.title),
          "name": RichText.asText(post.title),
          "datePublished": post._meta.firstPublicationDate,
          "dateModified": post._meta.lastPublicationDate,
          "articleBody": RichText.asText(post.excerpt),
          "description": RichText.asText(post.excerpt),
          "url": `https://hesambayat.com/${post._meta.uid}`,
          "image": `https://hesambayat.com${post.imageSharp.publicURL}`
        }} />
      <Component.HeaderSecondary />
      <div className="post">
        <div className="container">
          <RichText render={post.title} />
          <Component.DateWithUpdate published={post._meta.firstPublicationDate} updated={post._meta.lastPublicationDate} />
          {
            post.body.map((slice, idx) => {
              if (slice.type === 'text') {
                return <RichText key={`slice-${idx}`} render={slice.primary.text} htmlSerializer={htmlSerializer} />
              }

              if (slice.type === 'image') {
                const fluid = slice.primary.imageBlockSharp.childImageSharp ? slice.primary.imageBlockSharp.childImageSharp.fluid : {
                  aspectRatio: slice.primary.imageBlock.dimensions.width / slice.primary.imageBlock.dimensions.height,
                  base64: "",
                  sizes: "",
                  src: slice.primary.imageBlockSharp.publicURL,
                  srcSet: "",
                  srcSetWebp: "",
                  srcWebp: "",
                }

                return <Img key={`slice-${idx}`} fluid={fluid} className={slice.label} />
              }

              return null
            })
          }
        </div>
      </div>
      <Component.Bio />
      <Component.Footer />
      {post.has_code === 'Yes' && <Component.CodePrettify />}
    </>
  )
}

export const query = graphql`
  query PostQuery($uid: String!) {
    prismic {
      post(lang:"en-us", uid: $uid) {
        title
        has_code
        excerpt
        image
        imageSharp {
          publicURL
        }
        body {
          ... on PRISMIC_PostBodyImage {
            type
            label
            primary {
              imageBlock
              imageBlockSharp {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on PRISMIC_PostBodyText {
            type
            label
            primary {
              text
            }
          }
        }
        _meta {
          uid
          tags
          firstPublicationDate
          lastPublicationDate
        }
      }
    }
  }
`