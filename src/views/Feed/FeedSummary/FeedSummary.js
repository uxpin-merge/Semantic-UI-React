import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, getElementType, getUnhandledProps } from '../../../lib'
import FeedDate from '../FeedDate/FeedDate'
import FeedUser from '../FeedUser/FeedUser'

/**
 * A feed can contain a summary.
 */
function FeedSummary(props) {
  const { children, className, content, date, user } = props

  const classes = cx('summary', className)
  const rest = getUnhandledProps(FeedSummary, props)
  const ElementType = getElementType(FeedSummary, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      <FeedUser content={user} />
      {content}
      <FeedDate content={date} />
    </ElementType>
  )
}

FeedSummary.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** Shorthand for FeedDate. */
  date: PropTypes.string,

  /** Shorthand for FeedUser. */
  user: PropTypes.string,
}

FeedSummary.defaultProps = {
  as: 'div',
}

export default FeedSummary
