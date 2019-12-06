import React from 'react'

const getPublishedYear = (startYear = 2019) => {
  try {
    const thisYear = new Date().getFullYear()
    return thisYear > startYear ? `${startYear} \u2014 ${thisYear}` : startYear
  } catch (_) {
    return startYear
  }
}

export default () => {
  const year = getPublishedYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{`\u00a9 ${year}. Published under the Creative Commons License.`}</p>
      </div>
    </footer>
  )
}