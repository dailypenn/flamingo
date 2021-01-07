import React from 'react'
import s from 'styled-components'

import { FUTURA_REGULAR } from '../fonts'

const Credit = s.div`
  color: #000000;
  ${({ font = FUTURA_REGULAR }) => font}
  padding: 1rem;
  font-size: 80%;
  text-align: center;
  background-color: ${({ bgColor = '#FFFFFF' }) => bgColor};
`

const Footer = ({ font, emoji, bgColor }) => (
  <Credit font={font} bgColor={bgColor}>
    Made with <span role="img"> {emoji} </span> by The Daily Pennsylvanian Web
    Department © 2020. All rights reserved.
  </Credit>
)

export default Footer