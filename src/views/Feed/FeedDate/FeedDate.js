import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../../lib'

/**
 * An event or an event summary can contain a date.
 */
function FeedDate(props) {
  const { children, className } = props
  const classes = cx('date', className)
  const rest = getUnhandledProps(FeedDate, props)
  const ElementType = getElementType(FeedDate, props)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

FeedDate.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

FeedDate.defaultProps = {
  as: 'div',
  className: '',
}

export default FeedDate
