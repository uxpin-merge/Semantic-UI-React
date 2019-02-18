/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Form from '../Form'
import FormField from '../../FormField/FormField'
import FormCheckbox from '../../FormCheckbox/FormCheckbox'
import Button from '../../../../elements/Button/Button/Button'

export default (
  <Form uxpId='0'>
    <FormField uxpId='1'>
      <label>First Name</label>
      <input placeholder='First Name' />
    </FormField>
    <FormField uxpId='2'>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </FormField>
    <FormField uxpId='3'>
      <FormCheckbox uxpId='4' label='I agree to the Terms and Conditions' />
    </FormField>
    <Button uxpId='5' type='submit'>
      Submit
    </Button>
  </Form>
)
