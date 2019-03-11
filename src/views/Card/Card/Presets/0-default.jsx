/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Card from '..'
// import CardContent from '../../CardContent'
// import Image from '../../../../elements/Image'
// import CardHeader from '../../CardHeader'
// import CardMeta from '../../CardMeta'
// import CardDescription from '../../CardDescription'

export default (
  // <Card uxpId='0'>
  //   <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' uxpId='1' />
  //   <CardContent uxpId='2'>
  //     <CardHeader uxpId='3'>Elliot Baker</CardHeader>
  //     <CardMeta uxpId='4'>Friend</CardMeta>
  //     <CardDescription uxpId='5'>
  //       Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with
  //       his cat.
  //     </CardDescription>
  //   </CardContent>
  // </Card>

  <Card
    image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    uxpId='1'
  />
)
