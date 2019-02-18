/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Breadcrumb from '../Breadcrumb'
import BreadcrumbDivider from '../BreadcrumbDivider/BreadcrumbDivider'
import BreadcrumbSection from '../BreadcrumbSection/BreadcrumbSection'

export default (
  <Breadcrumb uxpId='0' size='medium'>
    <BreadcrumbSection uxpId='1' link>
      Home
    </BreadcrumbSection>
    <BreadcrumbDivider uxpId='2' />
    <BreadcrumbSection uxpId='3' link>
      Store
    </BreadcrumbSection>
    <BreadcrumbDivider uxpId='4' />
    <BreadcrumbSection uxpId='5' active>
      Product
    </BreadcrumbSection>
    <BreadcrumbDivider uxpId='6' />
  </Breadcrumb>
)
