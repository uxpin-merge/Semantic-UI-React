/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import FeedContent from '../FeedContent'
import FeedSummary from '../../FeedSummary/FeedSummary'
import FeedUser from '../../FeedUser/FeedUser'
import FeedDate from '../../FeedDate/FeedDate'
import FeedMeta from '../../FeedMeta/FeedMeta'
import FeedLike from '../../FeedLike/FeedLike'

export default (
  <FeedContent uxpId='FeedContent0'>
    <FeedSummary uxpId='FeedSummary0'>
      <FeedUser uxpId='FeedUser0'>Elliot Fu</FeedUser>
      <FeedDate uxpId='FeedDate0'>1 Hour Ago</FeedDate>
    </FeedSummary>
    <FeedMeta uxpId='FeedMeta0'>
      <FeedLike icon='like' uxpId='FeedLike0'>
        4 Likes
      </FeedLike>
    </FeedMeta>
  </FeedContent>
)
