import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { createElement } from 'react'

import {
  createHTMLLabel,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  useWidthProp,
} from '../../../lib'
import Checkbox from '../../../modules/Checkbox'
import Radio from '../../../addons/Radio'

/**
 * A field is a form element containing a label and an input.
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see Visibility
 */
function FormField(props) {
  const {
    children,
    className,
    content,
    control,
    disabled,
    error,
    inline,
    label,
    required,
    type,
    width,
  } = props

  const classes = cx(
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(error, 'error'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(required, 'required'),
    useWidthProp(width, 'wide'),
    'field',
    className,
  )
  const rest = getUnhandledProps(FormField, props)
  const ElementType = getElementType(FormField, props)

  console.log({ classes });

  // ----------------------------------------
  // No Control
  // ----------------------------------------

  // console.log(control.type, Checkbox, control.type === Checkbox);

  if (_.isNil(control)) {
    if (_.isNil(label)) {
      return (
        <ElementType {...rest} className={classes}>
          {content || children}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes}>
        <label>{label}</label>
      </ElementType>
    )
  }

  // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------
  const controlProps = { ...rest, content, disabled, required, type }

  // wrap HTML checkboxes/radios in the label
  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return (
      <ElementType className={classes}>
        <label>
          {createElement(control, controlProps)} {label}
        </label>
      </ElementType>
    )
  }

  // pass label prop to controls that support it
  if (control.type === Checkbox || control.type === Radio) {
    return (
      <ElementType className={classes}>
        {createElement(control.type, { ...controlProps, label })}
      </ElementType>
    )
  }

  // ----------------------------------------
  // Other Control
  // ----------------------------------------

  return (
    <ElementType className={classes}>
      {createHTMLLabel(label, {
        defaultProps: { htmlFor: _.get(controlProps, 'id') },
        autoGenerateKey: false,
      })}
      {createElement(control.type, controlProps)}
    </ElementType>
  )
}

FormField.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: PropTypes.string,

  /** Individual fields may be disabled. */
  disabled: PropTypes.bool,

  /** Individual fields may display an error state. */
  error: PropTypes.bool,

  /** A field can have its label next to instead of above it. */
  inline: PropTypes.bool,

  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: PropTypes.string,

  /** A field can show that input is mandatory. */
  required: PropTypes.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: PropTypes.string,

  /** A field can specify its width in grid columns */
  width: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
  ]),
}

FormField.defaultProps = {
  as: 'div',
  width: 'six',
}

export default FormField
