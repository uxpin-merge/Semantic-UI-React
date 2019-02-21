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

/*
    <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell> singleLine>Evidence Rating</TableHeaderCell>
        <TableHeaderCell>Effect</TableHeaderCell>
        <TableHeaderCell>Efficacy</TableHeaderCell>
        <TableHeaderCell>Consensus</TableHeaderCell>
        <TableHeaderCell>Comments</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell >
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </TableCell >
        <TableCell  singleLine>Power Output</TableCell >
        <TableCell >
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </TableCell >
        <TableCell  textAlign='right'>
          80% <br />
          <a href='#'>18 studies</a>
        </TableCell >
        <TableCell >
          Creatine supplementation is the reference compound for increasing muscular creatine
          levels; there is variability in this increase, however, with some nonresponders.
        </TableCell >
      </TableRow>
      <TableRow>
        <TableCell >
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </TableCell >
        <TableCell  singleLine>Weight</TableCell >
        <TableCell >
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </TableCell >
        <TableCell  textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </TableCell >
        <TableCell >
          Creatine is the reference compound for power improvement, with numbers from one
          meta-analysis to assess potency
        </TableCell >
      </TableRow>
    </TableBody>
  </Table>
*/
