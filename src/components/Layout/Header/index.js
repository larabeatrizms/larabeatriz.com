import React from 'react'
import { Link } from 'gatsby'

import { Container } from './styles'

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <strong>Lara</strong> Beatriz
        </Link>
      </h1>
    </div>
  </Container>
)

export default Header
