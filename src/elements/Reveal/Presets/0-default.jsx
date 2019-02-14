/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Image from '../../Image/Image'
import Reveal from '../Reveal'

export default (
  <Reveal animated='fade'>
    <Reveal.Content visible>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://react.semantic-ui.com/images/avatar/large/ade.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)
