/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Dropdown from '../index'
import DropdownMenu from '../../DropdownMenu'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

export default (
  <DropdownMenu right uxpId='0'>
    <Dropdown text='Dropdown' options={options} simple uxpId='1' />
  </DropdownMenu>
)
