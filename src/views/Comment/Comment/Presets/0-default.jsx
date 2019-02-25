/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Comment from '../Comment'
import CommentAvatar from '../../CommentAvatar/CommentAvatar'
import CommentContent from '../../CommentContent'
import CommentAuthor from '../../CommentAuthor'
// import CommentMetadata from '../CommentMetadata'
import CommentText from '../../CommentText'
// import Icon from '../../../elements/Icon/Icon'

export default (
  <Comment uxpId='00'>
    <CommentAvatar
      as='a'
      src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg'
      uxpId='01'
    />
    <CommentContent uxpId='02'>
      <CommentAuthor uxpId='03'>Stevie Feliciano</CommentAuthor>
      <CommentText uxpId='44'>
        Hey guys, I hope this example comment is helping you read this documentation.
      </CommentText>
    </CommentContent>
  </Comment>
)
