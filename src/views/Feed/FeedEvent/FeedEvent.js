import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../../lib'
import FeedContent from '../FeedContent/FeedContent'
import FeedLabel from '../FeedLabel/FeedLabel'

/**
 * A feed contains an event.
 */
function FeedEvent(props) {
  const {
    content,
    children,
    className,
    date,
    extraImages,
    extraText,
    image,
    icon,
    meta,
    summary,
  } = props

  const classes = cx('event', className)
  const rest = getUnhandledProps(FeedEvent, props)
  const ElementType = getElementType(FeedEvent, props)

  const hasContentProp = content || date || extraImages || extraText || meta || summary
  const contentProps = { content, date, extraImages, extraText, meta, summary }

  return (
    <ElementType {...rest} className={classes}>
      {icon && <FeedLabel icon={icon} />}
      {image && <FeedLabel image={image} />}
      {hasContentProp && <FeedContent {...contentProps} />}
      {children}
    </ElementType>
  )
}

FeedEvent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for FeedContent. */
  content: PropTypes.string,

  /** Shorthand for FeedDate. */
  date: PropTypes.string,

  /** Shorthand for FeedExtra with images. */
  extraImages: PropTypes.array,

  /** Shorthand for FeedExtra with content. */
  extraText: PropTypes.string,

  /** An event can contain icon label. */
  icon: PropTypes.string,

  /** An event can contain image label. */
  image: PropTypes.string,

  /** Shorthand for FeedMeta. */
  meta: PropTypes.string,

  /** Shorthand for FeedSummary. */
  summary: PropTypes.string,
}

FeedEvent.defaultProps = {
  as: 'div',
}

export default FeedEvent
