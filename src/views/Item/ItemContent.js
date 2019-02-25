import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useVerticalAlignProp,
} from '../../lib'
import ItemHeader from './ItemHeader'
import ItemDescription from './ItemDescription'
import ItemExtra from './ItemExtra'
import ItemMeta from './ItemMeta'

/**
 * An item can contain content.
 */
function ItemContent(props) {
  const { children, className, content, description, extra, header, meta, verticalAlign } = props

  const classes = cx(useVerticalAlignProp(verticalAlign), 'content', className)
  const rest = getUnhandledProps(ItemContent, props)
  const ElementType = getElementType(ItemContent, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      {ItemHeader.create(header, { autoGenerateKey: false })}
      {ItemMeta.create(meta, { autoGenerateKey: false })}
      {ItemDescription.create(description, { autoGenerateKey: false })}
      {ItemExtra.create(extra, { autoGenerateKey: false })}
      {content}
    </ElementType>
  )
}

ItemContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: PropTypes.node,

  /** Shorthand for ItemDescription component. */
  description: PropTypes.node,

  /** Shorthand for ItemExtra component. */
  extra: PropTypes.node,

  /** Shorthand for ItemHeader component. */
  header: PropTypes.node,

  /** Shorthand for ItemMeta component. */
  meta: PropTypes.node,

  /** Content can specify its vertical alignment. */
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
}

export default ItemContent
