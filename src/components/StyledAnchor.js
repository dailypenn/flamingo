import React from 'react'

import s from 'styled-components'

const Wrapper = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

const StyledAnchor = ({ link, children }) => (
  <Wrapper href={link} target="_blank">
    {children}
  </Wrapper>
)

export default StyledAnchor
