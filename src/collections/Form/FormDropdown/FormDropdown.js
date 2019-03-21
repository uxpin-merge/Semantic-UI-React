import React from 'react'
import PropTypes from 'prop-types'
import { getUnhandledProps } from '../../../lib'
import FormField from '../FormField/FormField'

/**
 * Sugar for <Form.Field control={Dropdown} />.
 * @see Dropdown
 * @see Form
 */
function FormDropdown(props) {
  const { control, options } = props
  const rest = getUnhandledProps(FormDropdown, props)

  return <FormField {...rest} control={control} options={options} />
}

FormDropdown.propTypes = {
  /** A FormField control prop. */
  control: PropTypes.string,
  options: PropTypes.array,
}

FormDropdown.defaultProps = {
  control: '<Dropdown />',
  options: [],
}

export default FormDropdown
