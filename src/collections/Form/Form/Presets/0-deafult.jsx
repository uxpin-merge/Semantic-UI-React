/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Form from '../Form'
import FormGroup from '../../FormGroup/FormGroup'
import FormInput from '../../FormInput/FormInput'
// import FormField from '../../FormField/FormField'
import FormCheckbox from '../../FormCheckbox/FormCheckbox'
import FormButton from '../../FormButton/FormButton'
import FormTextArea from '../../FormTextArea/FormTextArea'

export default (
  <Form uxpId='0'>
    <FormGroup widths='equal' uxpId='1'>
      <FormInput fluid label='First name' placeholder='First name' uxpId='2' />
    </FormGroup>
    <FormTextArea label='About' placeholder='Tell us more about you...' uxpId='3' />
    <FormCheckbox label='I agree to the Terms and Conditions' uxpId='4' />
    <FormButton uxpId='5'>Submit</FormButton>
  </Form>
)

/*
  <Form fluid uxpId='0'>
  <FormField label='First Name' content='First Name' uxpId='1' />
  <FormField label='Last Name' content='Last Name' uxpId='2' />
  <FormCheckbox uxpId='3' label='I agree to the Terms and Conditions' />
  <FormButton uxpId='4'>Submit</FormButton>
</Form>
*/
