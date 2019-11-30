import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import * as Component from '../components'

export default ({ data }) => {
  console.log('%cDEBUG:%c data', 'color:aqua', 'color:deeppink', data)
  if (!data) return 'loading...'

  const { post } = data.prismic
  if (!post) return 'Not found!'

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
      {RichText.render(post.title)}
      <Component.Date date={post._meta.lastPublicationDate} />
      {RichText.render(post.content)}
      <Component.Footer />
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