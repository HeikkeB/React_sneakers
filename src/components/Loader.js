import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    width={150}
    height={186}
    viewBox="0 0 150 186"
    backgroundColor="#f3f3f3"
    foregroundColor="#f2f2f2"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
    <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
    <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
    <rect x="0" y="126" rx="3" ry="3" width="85" height="15" />
    <rect x="118" y="154" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)

export default MyLoader
