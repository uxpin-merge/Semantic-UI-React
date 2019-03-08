/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Menu from '../../../collections/Menu/Menu'
import MenuItem from '../../../collections/Menu/MenuItem/MenuItem'
import Sidebar from '../Sidebar'
import SidebarPushable from '../SidebarPushable'
import Segment from '../../../elements/Segment/Segment/Segment'
import SidebarPusher from '../SidebarPusher'
import Header from '../../../elements/Header/Header'
import Image from '../../../elements/Image/Image'

export default (
  <SidebarPushable as={Segment} uxpId='1'>
    <Sidebar icon='labeled' inverted vertical visible width='thin' uxpId='1'>
      <Menu uxpId='11'>
        <MenuItem as='a' uxpId='2'>
          Home
        </MenuItem>
        <MenuItem as='a' uxpId='3'>
          Games
        </MenuItem>
        <MenuItem as='a' uxpId='4'>
          Channels
        </MenuItem>
      </Menu>
    </Sidebar>
    <SidebarPusher uxpId='5'>
      <Segment basic uxpId='6'>
        <Header as='h3' uxpId='7'>
          Application Content
        </Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' uxpId='8' />
      </Segment>
    </SidebarPusher>
  </SidebarPushable>
)
