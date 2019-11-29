import React from 'react'
import { RichText } from 'prismic-reactjs'
import * as Component from '../components'

export default ({ data }) => {
  console.log('%cDEBUG:%c data', 'color:aqua', 'color:deeppink', data)
  // Required check for no data being returned
  if (!data) return 'loading...'

  if (!data.prismic.post) return 'Not found!'

  return (
    <>
      <Component.HeaderSecondary />
      {RichText.render(data.prismic.post.title)}
      {RichText.render(data.prismic.post.content)}
      <Component.Footer />
    </>
  );
}

export const query = graphql`
query PageQuery($uid: String!) {
  prismic {
    post(lang:"en-us", uid: $uid) {
      title
      content
      _meta {
        uid
        tags
        lastPublicationDate
      }
    }
  }
}`