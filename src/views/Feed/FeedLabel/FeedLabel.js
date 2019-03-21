import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { createHTMLImage, getElementType, getUnhandledProps } from '../../../lib'
import Icon from '../../../elements/Icon'

/**
 * An event can contain an image or icon label.
 */
function FeedLabel(props) {
  const { className, content, icon, image } = props

  const classes = cx('label', className)
  const rest = getUnhandledProps(FeedLabel, props)
  const ElementType = getElementType(FeedLabel, props)

  return (
    <ElementType {...rest} className={classes}>
      {content}
      {Icon.create(icon, { autoGenerateKey: false })}
      {createHTMLImage(image)}
    </ElementType>
  )
}

FeedLabel.propTypes = {
  /** An element type to render as (string). */
  as: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.string,

  /** An event can contain icon label. */
  icon: PropTypes.string,

  /** An event can contain image label. */
  image: PropTypes.string,
}

FeedLabel.defaultProps = {
  as: 'div',
  content: '',
  className: '',
  image: '',
}

export default FeedLabel
