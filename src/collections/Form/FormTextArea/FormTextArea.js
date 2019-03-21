import React from 'react'
import PropTypes from 'prop-types';
import { getUnhandledProps } from '../../../lib'
import FormField from '../FormField/FormField';

/**
 * Sugar for <Form.Field control={TextArea} />.
 * @see Form
 * @see TextArea
 */
function FormTextArea(props) {
  const rest = getUnhandledProps(FormTextArea, props)

  console.log(props.control);

  return <FormField {...rest} control={props.control} />
}

FormTextArea.propTypes = {
  control: PropTypes.string
}

FormTextArea.defaultProps = {
  control: '<TextArea />'
}

export default FormTextArea
