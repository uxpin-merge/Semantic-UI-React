import React from 'react'
import PropTypes from 'prop-types';
import { getUnhandledProps } from '../../../lib'
import FormField from '../FormField/FormField'

/**
 * Sugar for <Form.Field control={Radio} />.
 * @see Form
 * @see Radio
 */
function FormRadio(props) {
  const { control, label } = props
  const rest = getUnhandledProps(FormRadio, props)

  return <FormField {...rest} control={control} label={label} />
}

FormRadio.propTypes = {
  label: PropTypes.string,

  /** A FormField control prop. */
  control: PropTypes.string,
}

FormRadio.defaultProps = {
  control: '<Radio />',
}

export default FormRadio
