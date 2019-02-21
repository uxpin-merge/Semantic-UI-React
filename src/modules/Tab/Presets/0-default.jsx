/* eslint-disable react/jsx-filename-extension */

import * as React from 'react'
import Tab from '../Tab'

const panes = [
  { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
  { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
  { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
]

export default <Tab panes={panes} renderActivOnly={false} />
