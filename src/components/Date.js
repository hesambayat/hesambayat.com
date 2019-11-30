import React from 'react'
import * as Utils from '../utils'

export default ({ date }) => (
  <time dateTime={date}>
    {Utils.formatDate(date)}
  </time>
)