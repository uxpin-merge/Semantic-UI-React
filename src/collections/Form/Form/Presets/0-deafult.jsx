/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Form from '../Form'
import FormField from '../../FormField/FormField'
import FormCheckbox from '../../FormCheckbox/FormCheckbox'
import FormButton from '../../FormButton/FormButton'

export default (
  <Form uxpId='0'>
    <FormField label='First name' uxpId='1' />
    <FormField label='Last name' uxpId='2' />
    <FormField uxpId='3'>
      <FormCheckbox label='I agree to the Terms and Conditions' uxpId='4' />
    </FormField>
    <FormButton type='submit' uxpId='5'>
      Submit
    </FormButton>
  </Form>
)
