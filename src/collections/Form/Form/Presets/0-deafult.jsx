/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Form from '../Form'
import FormField from '../../FormField/FormField'
import FormCheckbox from '../../FormCheckbox/FormCheckbox'
import FormButton from '../../FormButton/FormButton'

export default (
  <Form fluid uxpId='0'>
    <FormField label='First Name' content='First Name' uxpId='1' />
    <FormField label='Last Name' content='Last Name' uxpId='2' />
    <FormCheckbox uxpId='3' label='I agree to the Terms and Conditions' />
    <FormButton uxpId='4'>Submit</FormButton>
  </Form>
)
