import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../../lib'
import FeedDate from '../FeedDate/FeedDate'
import FeedExtra from '../FeedExtra/FeedExtra'
import FeedMeta from '../FeedMeta/FeedMeta'
import FeedSummary from '../FeedSummary/FeedSummary'

function FeedContent(props) {
  const { children, className, content, extraImages, extraText, date, meta, summary } = props

  const classes = cx('content', className)
  const rest = getUnhandledProps(FeedContent, props)
  const ElementType = getElementType(FeedContent, props)

  if (children) {
    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      {date && <FeedDate content={date} />}
      {summary && <FeedSummary content={summary} />}
      {content}
      {extraText && <FeedExtra content={extraText} text />}
      {extraImages && <FeedExtra images={extraImages} />}
      {meta && <FeedMeta like={meta} />}
    </ElementType>
  )
}

FeedContent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** An event can contain a date. */
  date: PropTypes.string,

  /** Shorthand for FeedExtra with images. */
  extraImages: PropTypes.array,

  /** Shorthand for FeedExtra with text. */
  extraText: PropTypes.string,

  /** Shorthand for FeedMeta. */
  meta: PropTypes.string,

  /** Shorthand for FeedSummary. */
  summary: PropTypes.string,
}

FeedContent.defaultProps = {
  as: 'div',
}

export default FeedContent
