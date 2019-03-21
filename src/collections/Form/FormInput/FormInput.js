import React from 'react'
import PropTypes from 'prop-types'
import { getUnhandledProps } from '../../../lib'
import FormField from '../FormField/FormField'

/**
 * Sugar for <Form.Field control={Input} />.
 * @see Form
 * @see Input
 */
function FormInput(props) {
  const { control } = props
  const rest = getUnhandledProps(FormInput, props)

  return <FormField {...rest} control={control} />
}

FormInput.propTypes = {
  /** A FormField control prop. */
  control: PropTypes.string,
}

FormInput.defaultProps = {
  control: '<Input />',
}

export default FormInput
