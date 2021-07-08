/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Modal from '../Modal'
import ModalContent from '../ModalContent'
import Button from '../../../elements/Button'
import ModalHeader from '../ModalHeader'
import ModalActions from '../ModalActions'

export default (
  <Modal trigger={<Button uxpId='00'>Basic Modal</Button>} basic size='small' uxpId='01'>
    <ModalHeader content='Archive Old Messages' uxpId='1' />
    <ModalContent uxpId='2'>
      Your inbox is getting full, would you like us to enable automatic archiving of old messages?
    </ModalContent>
    <ModalActions uxpId='3'>
      <Button basic color='red' icon='remove' inverted uxpId='4'>
        No
      </Button>
      <Button color='green' icon='checkmark' inverted uxpId='5'>
        Yes
      </Button>
    </ModalActions>
  </Modal>
)
