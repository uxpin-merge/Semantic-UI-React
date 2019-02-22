/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Card from '../Card'
import CardContent from '../CardContent'
/*
import Icon from '../../../elements/Icon/Icon'
import CardDescription from '../CardDescription'
import CardHeader from '../CardHeader'
import CardMeta from '../CardMeta'

import Image from '../../../elements/Image/Image'
*/

export default (
  <Card
    image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    uxpId='0'
  >
    <CardContent icon='name' extra='16 friends' uxpId='1' />
  </Card>
)
/*
 <Card uxpId='0'>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' uxpId='1' />
    <CardContent uxpId='2'>
      <CardHeader uxpId='3'>Matthew</CardHeader>
      <CardMeta uxpId='4'>
        <span className='date'>Joined in 2015</span>
      </CardMeta>
      <CardDescription uxpId='5'>Matthew is a musician living in Nashville.</CardDescription>
    </CardContent>
    <CardContent extra uxpId='6'>
      <a>
        <Icon name='user' uxpId='7' />
        22 Friends
      </a>
    </CardContent>
  </Card>
)
*/
