import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import { linkResolver } from './src/utils'
import './src/styles'

registerLinkResolver(linkResolver)