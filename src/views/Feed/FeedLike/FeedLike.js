import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../../lib'
import Icon from '../../../elements/Icon'

/**
 * A feed can contain a like element.
 */
function FeedLike(props) {
  const { className, children, content, icon } = props

  const classes = cx('like', className)
  const rest = getUnhandledProps(FeedLike, props)
  const ElementType = getElementType(FeedLike, props)

  return (
    <ElementType {...rest} className={classes}>
      {Icon.create(icon, { autoGenerateKey: false })}
      {content || children}
    </ElementType>
  )
}

FeedLike.defaultProps = {
  as: 'a',
}

FeedLike.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** Shorthand for icon. Mutually exclusive with children. */
  icon: PropTypes.string,
}

FeedLike.defaultProps = {
  icon: 'like',
}

export default FeedLike
