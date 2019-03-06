/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import TableHeaderCell from '../TableHeaderCell'
import TableHeader from '../TableHeader'
import TableCell from '../TableCell'
import Table from '../Table'

export default (
  <Table uxpId='0'>
    <TableHeader uxpId='1'>
      <TableRow uxpId='2'>
        <TableHeaderCell uxpId='3'>Name</TableHeaderCell>
        <TableHeaderCell uxpId='4'>Status</TableHeaderCell>
        <TableHeaderCell uxpId='5'>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody uxpId='6'>
      <TableRow uxpId='7'>
        <TableCell uxpId='8'>John</TableCell>
        <TableCell uxpId='9'>Approved</TableCell>
        <TableCell uxpId='10'>None</TableCell>
      </TableRow>
      <TableRow uxpId='11'>
        <TableCell uxpId='12'>Jamie</TableCell>
        <TableCell uxpId='13'>Approved</TableCell>
        <TableCell uxpId='14'>Requires call</TableCell>
      </TableRow>
      <TableRow uxpId='15'>
        <TableCell uxpId='16'>Jill</TableCell>
        <TableCell uxpId='17'>Denied</TableCell>
        <TableCell uxpId='18'>None</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
