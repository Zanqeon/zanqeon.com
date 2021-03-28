import React from 'react'
import {
  Container,
  Row,
  Column
} from './index'

export default {
  title: 'Styleguide/Grid'
}

const styling = { background: '#bfedff', height: '15rem', textAlign: 'center' }

export const Layout = () => (
  <Container>
    <Row>
      <Column columns="xs:1 sm:1 md:1 lg:1"><div style={styling}>Column 1</div></Column>
      <Column columns="xs:11 sm:11 md:11 lg:11"><div style={styling}>Column 11</div></Column>
      <Column columns="xs:2 sm:2 md:2 lg:2"><div style={styling}>Column 2</div></Column>
      <Column columns="xs:10 sm:10 md:10 lg:10"><div style={styling}>Column 10</div></Column>
      <Column columns="xs:3 sm:3 md:3 lg:3"><div style={styling}>Column 3</div></Column>
      <Column olumns="xs:9 sm:9 md:9 lg:9"><div style={styling}>Column 9</div></Column>
      <Column columns="xs:4 sm:4 md:4 lg:4"><div style={styling}>Column 4</div></Column>
      <Column columns="xs:8 sm:8 md:8 lg:8"><div style={styling}>Column 8</div></Column>
      <Column columns="xs:5 sm:5 md:5 lg:5"><div style={styling}>Column 5</div></Column>
      <Column columns="xs:7 sm:7 md:7 lg:7"><div style={styling}>Column 7</div></Column>
      <Column columns="xs:6 sm:6 md:6 lg:6"><div style={styling}>Column 6</div></Column>
      <Column columns="xs:6 sm:6 md:6 lg:6"><div style={styling}>Column 6</div></Column>
      <Column columns="xs:12 sm:12 md:12 lg:12"><div style={styling}>Column 12</div></Column>
      <Column columns="xs:4 sm:4 md:4 lg:4"><div style={styling}>Column 4</div></Column>
      <Column columns="xs:4 sm:4 md:4 lg:4" offset="xs:4 sm4 md:4 lg:4"><div style={styling}>Column 4 + offset 4</div></Column>
      <Column columns="xs:12 sm:9 md:6 lg:3"><div style={styling}>xs:12 sm:9 md:6 lg:3</div></Column>
    </Row>
  </Container>
)
