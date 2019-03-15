/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Feed from '../Feed'

// export default (
//   <FeedEvent uxpId='FeedEvent0'>
//     <FeedLabel image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' uxpId='FeedLabel0' />
//     <FeedContent uxpId='FeedContent0'>
//       <FeedSummary uxpId='FeedSummary0'>
//         <FeedUser uxpId='FeedUser0'>Joe Henderson</FeedUser>
//         <FeedDate uxpId='FeedDate0'>3 days ago</FeedDate>
//       </FeedSummary>
//       <FeedExtra text uxpId='FeedExtra0'>
//         Ours is a life of constant reruns. We're always circling back to where we'd we started,
//         then starting all over again. Even if we don't run extra laps that day, we surely will
//         come back for more of the same another day soon.
//       </FeedExtra>
//       <FeedMeta uxpId='FeedMeta0'>
//         <FeedLike icon='like' uxpId='FeedLike0'>5 Likes</FeedLike>
//       </FeedMeta>
//     </FeedContent>
//   </FeedEvent>
// )

const events = [
  {
    date: '1 Hour Ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    meta: '4 Likes',
    summary: 'Elliot Fu added you as a friend',
  },
  {
    date: '4 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    meta: '1 Like',
    summary: 'Helen Troy added 2 new illustrations',
    extraImages: [
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
    ],
  },
  {
    date: '3 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    meta: '8 Likes',
    summary: 'Joe Henderson posted on his page',
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: '4 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraText: 'Look at these fun pics I found from a few years ago. Good times.',
    extraImages: [
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
    ],
  },
]

export default <Feed events={events} uxpId='Feed0' />
