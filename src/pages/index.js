import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import * as Component from '../components'

export default ({ data }) => {
  console.log('%cDEBUG:%c data', 'color:aqua', 'color:deeppink', data)
  if (!data) return null

  return (
    <>
      <Component.Schema
        markup={{
        }}
      />
      <Component.HeaderPrimary />
      {data.prismic.allPosts.edges.map(item => {
        return (
          <div className="post" key={item.node._meta.uid}>
            <h3>
              <Link to={`/${item.node._meta.uid}`}>{RichText.asText(item.node.title)}</Link>
            </h3>
            <Component.Date date={item.node._meta.lastPublicationDate} />
            {RichText.render(item.node.excerpt)}
          </div>
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
          excerpt
          _meta {
            uid
            tags
            firstPublicationDate
            lastPublicationDate
          }
        }
      }
    }
  }
}`