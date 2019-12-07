import React from 'react'
import * as Utils from '../utils'

export default ({ published, updated }) => (
  <time dateTime={published}>
    {`Published ${Utils.formatDate(published)} \u2014 Updated ${Utils.formatDate(updated)}`}
  </time>
)