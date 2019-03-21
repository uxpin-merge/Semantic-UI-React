import React from 'react'
import FormDropdown from '../FormDropdown';

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

export default (
  <FormDropdown control='<Dropdown />' options={options} />
)
