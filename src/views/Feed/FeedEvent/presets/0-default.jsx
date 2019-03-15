/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import FeedEvent from '../FeedEvent'
import FeedLabel from '../../FeedLabel/FeedLabel'
import FeedContent from '../../FeedContent/FeedContent'
import FeedSummary from '../../FeedSummary/FeedSummary'
import FeedDate from '../../FeedDate/FeedDate'
import FeedExtra from '../../FeedExtra/FeedExtra'
import FeedMeta from '../../FeedMeta/FeedMeta'
import FeedLike from '../../FeedLike/FeedLike'
import FeedUser from '../../FeedUser/FeedUser'

export default (
  <FeedEvent uxpId='FeedEvent0'>
    <FeedLabel
      image='https://react.semantic-ui.com/images/avatar/small/helen.jpg'
      uxpId='FeedLabel0'
    />
    <FeedContent uxpId='FeedContent0'>
      <FeedSummary uxpId='FeedSummary0'>
        <FeedUser uxpId='FeedUser0'>Joe Henderson</FeedUser>
        <FeedDate uxpId='FeedDate0'>3 days ago</FeedDate>
      </FeedSummary>
      <FeedExtra text uxpId='FeedExtra0'>
        Ours is a life of constant reruns. We are always circling back to where we did we started,
        then starting all over again. Even if we do not run extra laps that day, we surely will come
        back for more of the same another day soon.
      </FeedExtra>
      <FeedMeta uxpId='FeedMeta0'>
        <FeedLike icon='like' uxpId='FeedLike0'>
          5 Likes
        </FeedLike>
      </FeedMeta>
    </FeedContent>
  </FeedEvent>
)
