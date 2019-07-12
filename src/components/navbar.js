import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Accordian from "../components/accordian"
import NavItem from "../components/navItem"

const StyledHeader = styled.header`
  grid-area: h;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #F2F2F2;
  padding: 2.3em 0;

  @media screen and (min-width : 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const LogoContainer = styled.div`
  margin-left: 5%;
  @media screen and(min-width: 600px) {
    margin-left: 2.3em;
  }

  Img {
    display: block;
  }
`
const StyledNav = styled.nav`
  margin: 1.5em 0 0 5%;
  align-self: center;
  @media screen and (min-width : 600px) {
    margin: 0 0.8em 0 0;
  }
`

const Navbar = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fixed(width: 50, height:50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledHeader>
      <LogoContainer>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </LogoContainer>
      <StyledNav>
        <ul>
          <Accordian title="Accordian">
            <NavItem />
          </Accordian>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
