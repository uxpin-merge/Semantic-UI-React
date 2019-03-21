import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../../lib'

/**
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  const { children, className, content, direction, open, scrolling } = props

  const classes = cx(
    direction,
    useKeyOnly(open, 'visible'),
    useKeyOnly(scrolling, 'scrolling'),
    'menu transition',
    className,
  )
  const rest = getUnhandledProps(DropdownMenu, props)
  const ElementType = getElementType(DropdownMenu, props)

  return (
    <ElementType {...rest} className={classes}>
      {children || content}
    </ElementType>
  )
}

DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** A dropdown menu can open to the left or to the right. */
  direction: PropTypes.oneOf(['left', 'right']),

  /** Whether or not the dropdown menu is displayed. */
  open: PropTypes.bool,

  /** A dropdown menu can scroll. */
  scrolling: PropTypes.bool,
}

export default DropdownMenu
