import PropTypes from 'prop-types'
import React from 'react'

import { getUnhandledProps } from '../../../lib'
import Dropdown from '../../../modules/Dropdown'
import FormField from '../FormField/FormField'

/**
 * Sugar for <Form.Field control={Select} />.
 * @see Form
 * @see Select
 */
function FormSelect(props) {
  const { control, options } = props
  const rest = getUnhandledProps(FormSelect, props)

  return <FormField {...rest} control={control} options={options} />
}

FormSelect.propTypes = {
  /** A FormField control prop. */
  control: FormField.propTypes.control,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes)).isRequired,
}

FormSelect.defaultProps = {
  control: '<Select />',
}

export default FormSelect
