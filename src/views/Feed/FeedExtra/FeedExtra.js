import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { createHTMLImage, getElementType, getUnhandledProps, useKeyOnly } from '../../../lib'

/**
 * A feed can contain an extra content.
 */
function FeedExtra(props) {
  const { className, children, content, images, text } = props

  const classes = cx(
    useKeyOnly(images, 'images'),
    useKeyOnly(content || text, 'text'),
    'extra',
    className,
  )
  const rest = getUnhandledProps(FeedExtra, props)
  const ElementType = getElementType(FeedExtra, props)

  // TODO need a "collection factory" to handle creating multiple image elements and their keys
  const imageElements = _.map(images, (image, index) => {
    const key = [index, image].join('-')
    return createHTMLImage(image, { key })
  })

  return (
    <ElementType {...rest} className={classes}>
      {content || children}
      {imageElements}
    </ElementType>
  )
}

FeedExtra.propTypes = {
  /** An element type to render as (string). */
  as: PropTypes.string,

  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** An event can contain additional information like a set of images. */
  images: PropTypes.array,

  /** An event can contain additional text information. */
  text: PropTypes.bool,
}

FeedExtra.defaultProps = {
  as: 'div',
  content: '',
  images: [],
}

export default FeedExtra
