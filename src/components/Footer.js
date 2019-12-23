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
        <p>
          <svg viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none"/>
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM7.22,11.9v.21a5.24,5.24,0,0,0,.06.78,2,2,0,0,0,.23.68,1.36,1.36,0,0,0,.46.48,1.32,1.32,0,0,0,.69.18,1.54,1.54,0,0,0,.47-.08,1.22,1.22,0,0,0,.4-.23,1.14,1.14,0,0,0,.28-.36,1.11,1.11,0,0,0,.12-.45h1.39a2.09,2.09,0,0,1-.23.89,2.37,2.37,0,0,1-.58.73,2.65,2.65,0,0,1-.84.49,3,3,0,0,1-1,.18,3.15,3.15,0,0,1-1.32-.26,2.65,2.65,0,0,1-.93-.71,2.83,2.83,0,0,1-.55-1,4.55,4.55,0,0,1-.18-1.27V11.9a4.55,4.55,0,0,1,.19-1.27A2.92,2.92,0,0,1,6.4,9.57a2.67,2.67,0,0,1,.93-.72,3,3,0,0,1,1.32-.26,3,3,0,0,1,1.08.18,2.54,2.54,0,0,1,.84.51,2.33,2.33,0,0,1,.54.79,2.78,2.78,0,0,1,.22,1H9.95a1.36,1.36,0,0,0-.11-.5,1.5,1.5,0,0,0-.26-.41,1.25,1.25,0,0,0-.4-.28,1.41,1.41,0,0,0-.49-.1A1.38,1.38,0,0,0,8,10a1.36,1.36,0,0,0-.46.48,2,2,0,0,0-.23.68A5.18,5.18,0,0,0,7.22,11.9Zm9.71,1.21h1.39a2.09,2.09,0,0,1-.23.89,2.37,2.37,0,0,1-.58.73,2.65,2.65,0,0,1-.84.49,3,3,0,0,1-1,.18,3.15,3.15,0,0,1-1.32-.26,2.65,2.65,0,0,1-.93-.71,2.83,2.83,0,0,1-.55-1,4.55,4.55,0,0,1-.18-1.27V11.9a4.55,4.55,0,0,1,.19-1.27,2.92,2.92,0,0,1,.55-1.06,2.67,2.67,0,0,1,.93-.72,3,3,0,0,1,1.32-.26,3,3,0,0,1,1.08.18,2.54,2.54,0,0,1,.84.51,2.33,2.33,0,0,1,.54.79,2.78,2.78,0,0,1,.22,1H16.94a1.36,1.36,0,0,0-.11-.5,1.5,1.5,0,0,0-.26-.41,1.25,1.25,0,0,0-.4-.28,1.41,1.41,0,0,0-.49-.1A1.38,1.38,0,0,0,15,10a1.36,1.36,0,0,0-.46.48,2,2,0,0,0-.23.68,5.18,5.18,0,0,0-.06.79v.21a5.24,5.24,0,0,0,.06.78,2,2,0,0,0,.23.68,1.36,1.36,0,0,0,.46.48,1.32,1.32,0,0,0,.69.18,1.54,1.54,0,0,0,.47-.08,1.22,1.22,0,0,0,.4-.23,1.14,1.14,0,0,0,.28-.36A1.11,1.11,0,0,0,16.93,13.11Z" />
          </svg>
          {`${year}. Published under the Creative Commons License.`}
        </p>
      </div>
    </footer>
  )
}