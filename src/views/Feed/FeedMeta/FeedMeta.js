import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../../lib'
import FeedLike from '../FeedLike/FeedLike'

/**
 * A feed can contain a meta.
 */
function FeedMeta(props) {
  const { children, className, content, like } = props

  const classes = cx('meta', className)
  const rest = getUnhandledProps(FeedMeta, props)
  const ElementType = getElementType(FeedMeta, props)

  if (children) {
    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      <FeedLike content={like} />
      {content}
    </ElementType>
  )
}

FeedMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** Shorthand for FeedLike. */
  like: PropTypes.string,
}

FeedMeta.defaultProps = {
  as: 'div',
}

export default FeedMeta
