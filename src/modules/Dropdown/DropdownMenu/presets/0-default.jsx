import React from 'react'
import DropdownMenu from '../DropdownMenu'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownDivider from '../../DropdownDivider/DropdownDivider'

export default (
  <DropdownMenu uxpId='DropdownMenu0'>
    <DropdownItem text='New' uxpId='DropdownItem0' />
    <DropdownItem text='Open...' description='ctrl + o' uxpId='DropdownItem1' />
    <DropdownItem text='Save as...' description='ctrl + s' uxpId='DropdownItem2' />
    <DropdownItem text='Rename' description='ctrl + r' uxpId='DropdownItem3' />
    <DropdownItem text='Make a copy' uxpId='DropdownItem4' />
    <DropdownItem icon='folder' text='Move to folder' uxpId='DropdownItem5' />
    <DropdownItem icon='trash' text='Move to trash' uxpId='DropdownItem6' />
    <DropdownDivider uxpId='DropdownDivider0' />
    <DropdownItem text='Download As...' uxpId='DropdownItem7' />
    <DropdownItem text='Publish To Web' uxpId='DropdownItem8' />
    <DropdownItem text='E-mail Collaborators' uxpId='DropdownItem9' />
  </DropdownMenu>
)
