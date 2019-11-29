import React from 'react'
import { graphql, Link } from 'gatsby'
import * as Component from '../components'

export default ({ data }) => {
  console.log('%cDEBUG:%c data', 'color:aqua', 'color:deeppink', data)
  if (!data) return null

  return (
    <>
      <Component.HeaderPrimary />
      {data.prismic.allPosts.edges.map(item => {
        console.log('%cDEBUG:%c item', 'color:aqua', 'color:deeppink', item)
        return (
          <h3 key={item.node._meta.uid}>
            <Link to={`/blog/${item.node._meta.uid}`}>{item.node.title[0].text}</Link>
          </h3>
        )
      })}
      <Component.Footer />
    </>
  )
}

export const query = graphql`
{
  prismic {
    allPosts {
      edges {
        node {
          title
          content
          _meta {
            uid
            tags
            lastPublicationDate
          }
        }
      }
    }
  }
}`