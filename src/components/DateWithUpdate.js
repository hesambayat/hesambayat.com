import React from 'react'
import * as Utils from '../utils'

export default ({ published, updated }) => {
  const format = { year: 'numeric', month: 'short', day: 'numeric' }
  return (
    <time dateTime={published}>
      {`Published ${Utils.formatDate(published, format)} \u2014 Updated ${Utils.formatDate(updated, format)}`}
    </time>
  )
}