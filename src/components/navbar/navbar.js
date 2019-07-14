import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoContainer = styled.div`
  margin-left: 5%;
  @media screen and(min-width: 600px) {
    margin-left: 2.3em;
  }

  Img {
    display: block;
  }
`
const NavLinksContainer = styled.nav`
  margin: 1.5em 0 0 5%;
  align-self: center;
  @media screen and (min-width : 600px) {
    margin: 0 0.8em 0 0;
  }
`

const LinkActiveStyle = {
  color: `#000000`,
  borderBottom: `2px solid #000000`,
  fontWeight: 300,
}

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
    <React.Fragment>
      <LogoContainer>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </LogoContainer>
      <NavLinksContainer>
        <Link to="/" activeStyle={LinkActiveStyle}>{title}</Link>
        <Link to="404" activeStyle={LinkActiveStyle}>{title}</Link>
        <Link to="page-2" activeStyle={LinkActiveStyle}>{title}</Link>
      </NavLinksContainer>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
