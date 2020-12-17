import React from 'react'
import {
  Container,
  Row,
  Col
} from './index'

export default {
  title: 'Styleguide/Grid'
}

const styling = { background: '#bfedff', height: '15rem', textAlign: 'center' }

export const Layout = () => (
  <Container>
    <Row>
      <Col columns="xs:1 sm:1 md:1 lg:1"><div style={styling}>col 1</div></Col>
      <Col columns="xs:11 sm:11 md:11 lg:11"><div style={styling}>col 11</div></Col>
      <Col columns="xs:2 sm:2 md:2 lg:2"><div style={styling}>col 2</div></Col>
      <Col columns="xs:10 sm:10 md:10 lg:10"><div style={styling}>col 10</div></Col>
      <Col columns="xs:3 sm:3 md:3 lg:3"><div style={styling}>col 3</div></Col>
      <Col columns="xs:9 sm:9 md:9 lg:9"><div style={styling}>col 9</div></Col>
      <Col columns="xs:4 sm:4 md:4 lg:4"><div style={styling}>col 4</div></Col>
      <Col columns="xs:8 sm:8 md:8 lg:8"><div style={styling}>col 8</div></Col>
      <Col columns="xs:5 sm:5 md:5 lg:5"><div style={styling}>col 5</div></Col>
      <Col columns="xs:7 sm:7 md:7 lg:7"><div style={styling}>col 7</div></Col>
      <Col columns="xs:6 sm:6 md:6 lg:6"><div style={styling}>col 6</div></Col>
      <Col columns="xs:6 sm:6 md:6 lg:6"><div style={styling}>col 6</div></Col>
      <Col columns="xs:12 sm:12 md:12 lg:12"><div style={styling}>col 12</div></Col>
      <Col columns="xs:4 sm:4 md:4 lg:4"><div style={styling}>col 4</div></Col>
      <Col columns="xs:4 sm:4 md:4 lg:4" offset="xs:4 sm4 md:4 lg:4"><div style={styling}>col 4 + offset 4</div></Col>
      <Col columns="xs:12 sm:9 md:6 lg:3"><div style={styling}>xs:12 sm:9 md:6 lg:3</div></Col>
    </Row>
  </Container>
)
