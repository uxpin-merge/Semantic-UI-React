import React from 'react'
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import DropdownDivider from '../../DropdownDivider/DropdownDivider';
import DropdownHeader from '../../DropdownHeader/DropdownHeader';
import DropdownItem from '../../DropdownItem/DropdownItem';
import Dropdown from "../Dropdown";
import DropdownSearchInput from "../../DropdownSearchInput/DropdownSearchInput";

const tagOptions = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

export default (
  <Dropdown
    text='Filter Posts'
    icon='filter'
    floating
    labeled
    button
    className='icon'
    uxpId='Dropdown0'
  >
    <DropdownMenu uxpId='DropdownMenu0'>
      <DropdownSearchInput
        icon='search'
        iconPosition='left'
        className='search'
        uxpId='DropdownSearchInput0'
      />
      <DropdownDivider uxpId='DropdownDivider0' />
      <DropdownHeader icon='tags' content='Tag Label' uxpId='DropdownHeader0' />
      <DropdownMenu scrolling uxpId='DropdownMenu1'>
        {tagOptions.map(option => (
          <DropdownItem key={option.value} {...option} uxpId={`DropdownItem-${option.value}`} />
        ))}
      </DropdownMenu>
    </DropdownMenu>
  </Dropdown>
)
