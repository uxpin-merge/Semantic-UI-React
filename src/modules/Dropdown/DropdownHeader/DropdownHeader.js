import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  getElementType,
  getUnhandledProps,
} from '../../../lib'
import Icon from '../../../elements/Icon'

/**
 * A dropdown menu can contain a header.
 */
function DropdownHeader(props) {
  const { children, className, content, icon } = props

  const classes = cx('header', className)
  const rest = getUnhandledProps(DropdownHeader, props)
  const ElementType = getElementType(DropdownHeader, props)

  if (children) {
    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      {Icon.create(icon, { autoGenerateKey: false })}
      {content}
    </ElementType>
  )
}

DropdownHeader.propTypes = {
  /** An element type to render as (string or function) */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** Shorthand for Icon. */
  icon: PropTypes.string,
}

DropdownHeader.defaultProps = {
  as: 'div',
}

DropdownHeader.create = createShorthandFactory(DropdownHeader, content => ({ content }))

export default DropdownHeader
