import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navbar from "./navbar/navbar"
import "./layout.css"

const GridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px auto 200px;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
`

const Content = styled.main`
  grid-area: c;
`

const Footer = styled.footer`
  grid-area: f;
`

const Header = styled.header`
  grid-area: h;
`
const Layout = ({ children }) => {
  return (
    <GridContainer>
      <Header>
        <Navbar />
      </Header>
      <Content>{children}</Content>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </GridContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
