import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import { linkResolver } from './src/utils/linkResolver'

import './src/styles/variables.css'
import './src/styles/normalize.css'
import './src/styles/grids.css'

registerLinkResolver(linkResolver)