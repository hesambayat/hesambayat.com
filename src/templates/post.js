import React from 'react'
import { graphql } from 'gatsby'
import { RichText, Elements } from 'prismic-reactjs'
import * as Component from '../components'

export default ({ data }) => {
  console.log('%cDEBUG:%c data', 'color:aqua', 'color:deeppink', data)
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
          "articleBody": RichText.asText(post.content),
          "description": RichText.asText(post.excerpt),
          "url": `https://hesambayat.com/${post._meta.uid}`
        }} />
      <Component.HeaderSecondary />
      <div className="post">
        <div className="container">
          <RichText render={post.title} />
          <Component.DateWithUpdate published={post._meta.firstPublicationDate} updated={post._meta.lastPublicationDate} />
          <RichText render={post.content} htmlSerializer={htmlSerializer} />
        </div>
      </div>
      <Component.Bio />
      <Component.Footer />
      <Component.CodePrettify />
    </>
  )
}

export const query = graphql`
query PageQuery($uid: String!) {
  prismic {
    post(lang:"en-us", uid: $uid) {
      title
      content
      excerpt
      _meta {
        uid
        tags
        firstPublicationDate
        lastPublicationDate
      }
    }
  }
}`