import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../../lib'

/**
 * A feed can contain a user element.
 */
function FeedUser(props) {
  const { as, children, className } = props
  const classes = cx('user', className)
  const rest = getUnhandledProps(FeedUser, props)
  const ElementType = getElementType(FeedUser, props)

  return (
    <ElementType {...rest} as={as} className={classes}>
      {children}
    </ElementType>
  )
}

FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

FeedUser.defaultProps = {
  as: 'a',
  className: '',
}

export default FeedUser
