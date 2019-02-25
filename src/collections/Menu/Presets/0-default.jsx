/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Menu from '../Menu'
import MenuItem from '../MenuItem/MenuItem'

export default (
  <Menu uxpId='0' style={{ width: '100%' }}>
    <MenuItem name='Editorials' active uxpId='1'>
      {' '}
      Editorials{' '}
    </MenuItem>
    <MenuItem name='Reviews' uxpId='2'>
      {' '}
      Reviews{' '}
    </MenuItem>
    <MenuItem name='Upcoming Events' uxpId='3'>
      Upcoming Events
    </MenuItem>
  </Menu>
)

/*
const items = [
  { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]


export default <Menu items={items} uxpId='0' />
*/
