/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Item from '../Item'
import ItemImage from '../ItemImage'
import ItemContent from '../ItemContent'
import ItemHeader from '../ItemHeader'
import ItemDescription from '../ItemDescription'
// import ItemExtra from '../ItemExtra'
// import ItemMeta from '../ItemMeta'
// import Image from '../../../elements/Image/Image'
import ItemGroup from '../ItemGroup'

export default (
  <ItemGroup uxpId='0'>
    <Item uxpId='1'>
      <ItemImage
        size='small'
        src='https://react.semantic-ui.com/images/wireframe/image.png'
        uxpId='2'
      />

      <ItemContent uxpId='3'>
        <ItemHeader as='a' uxpId='4'>
          Cute Dog
        </ItemHeader>
        <ItemDescription uxpId='5'>
          Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their
          adorable faces, others for their, tiny stature, and even others for their massive size.
        </ItemDescription>
      </ItemContent>
    </Item>

    <Item uxpId='6'>
      <ItemImage
        size='small'
        src='https://react.semantic-ui.com/images/wireframe/image.png'
        uxpId='7'
      />

      <ItemContent uxpId='8'>
        <ItemHeader as='a' uxpId='9'>
          Cute Dog
        </ItemHeader>
        <ItemDescription
          content='Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces.'
          uxpId='10'
        />
      </ItemContent>
    </Item>
  </ItemGroup>
)

/* (
  <ItemGroup uxpId='0'>
    <Item uxpId='1'>
      <ItemImage size='tiny' src='https://reactsemantic-uicomimages/wireframeimagepng' uxpId='2' />
      <ItemContent uxpId='3'>
        <ItemHeader as='a' uxpId='4'>
          Header
        </ItemHeader>
        <ItemMeta uxpId='5'>Description</ItemMeta>
        <ItemDescription uxpId='6'>
          <Image src='https://reactsemantic-uicomimages/wireframe/short-paragraphpng' uxpId='6' />
        </ItemDescription>
        <ItemExtra>Additional Details</ItemExtra>
      </ItemContent>
    </Item>
  </ItemGroup>
)
*/
