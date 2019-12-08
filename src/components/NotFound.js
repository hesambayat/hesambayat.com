import React from 'react'
import { Link } from 'gatsby'
import * as Component from '.'

export default () => (
  <>
    <Component.Schema
      markup={{
        "name": "Page not found",
      }} />
    <Component.HeaderSecondary />
    <div className="not-found-error">
      <div className="container">
        <h2>Page not found</h2>
        <p className="announcement">Don't be upset, let's <Link to="/">go home</Link>.</p>
      </div>
    </div>
  </>
)
