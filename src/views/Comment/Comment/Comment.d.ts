import * as React from 'react'

import { SemanticShorthandContent } from '../../../generic'
import CommentAction from '../CommentAction'
import CommentActions from '../CommentActions'
import CommentAuthor from '../CommentAuthor/CommentAuthor'
import CommentAvatar from '../CommentAvatar/CommentAvatar'
import CommentContent from '../CommentContent/CommentContent'
import CommentGroup from '../CommentGroup/CommentGroup'
import CommentMetadata from '../CommentMetadata'
import CommentText from '../CommentText/CommentText'

export interface CommentProps extends StrictCommentProps {
  [key: string]: any
}

export interface StrictCommentProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Comment can be collapsed, or hidden from view. */
  collapsed?: boolean

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

interface CommentComponent extends React.StatelessComponent<CommentProps> {
  Action: typeof CommentAction
  Actions: typeof CommentActions
  Author: typeof CommentAuthor
  Avatar: typeof CommentAvatar
  Content: typeof CommentContent
  Group: typeof CommentGroup
  Metadata: typeof CommentMetadata
  Text: typeof CommentText
}

declare const Comment: CommentComponent

export default Comment
