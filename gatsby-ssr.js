import React from 'react'
import Helmet from "react-helmet"
import favicon from './static/favicon.png'



exports.onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <Helmet
    title="..."
    meta={[
        { name: 'description', content: '...' },
        { name: 'keywords', content: '....' },
    ]}
    link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
    ]}
  />
])