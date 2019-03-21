import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  useWidthProp,
} from '../../../lib'

/**
 * A set of fields can appear grouped together.
 * @see Form
 */
function FormGroup(props) {
  const { children, className, grouped, inline, unstackable, widths } = props

  const classes = cx(
    useKeyOnly(grouped, 'grouped'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(unstackable, 'unstackable'),
    useWidthProp(widths, null, true),
    'fields',
    className,
  )
  const rest = getUnhandledProps(FormGroup, props)
  const ElementType = getElementType(FormGroup, props)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

FormGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Fields can show related choices. */
  grouped: PropTypes.bool,

  /** Multiple fields may be inline in a row. */
  inline: PropTypes.bool,

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: PropTypes.oneOf([
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
    'equal',
  ]),
}

FormGroup.defaultProps = {
  as: 'div',
}

export default FormGroup
