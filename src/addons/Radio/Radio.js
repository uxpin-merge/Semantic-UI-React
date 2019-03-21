import React from 'react'

import { getUnhandledProps } from '../../lib'
import Checkbox from '../../modules/Checkbox'
import PropTypes from "prop-types";

/**
 * A Radio is sugar for <Checkbox radio />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */
function Radio(props) {
  const { label, slider, toggle, type } = props
  const rest = getUnhandledProps(Radio, props)
  // const ElementType = getElementType(Radio, props)
  // radio, slider, toggle are exclusive
  // use an undefined radio if slider or toggle are present
  const radio = !(slider || toggle) || undefined

  return (
    <Checkbox
      {...rest}
      label={label}
      type='radio'
      radio={radio}
      slider={slider}
      toggle={toggle}
    />
  )
}

Radio.propTypes = {
  label: PropTypes.string,

  /** Format to emphasize the current selection state. */
  slider: Checkbox.propTypes.slider,

  /** Format to show an on or off choice. */
  toggle: Checkbox.propTypes.toggle,
}

export default Radio
