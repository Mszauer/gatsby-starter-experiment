import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Use FlexBox here
const NavLinksContainer = styled.nav`
  border-bottom: 1px solid #f2f2f2;
  margin: 1.5em 0 0 5%;
  align-self: center;
  @media screen and (min-width: 600px) {
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
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <NavLinksContainer>
      <Link to="/" activeStyle={LinkActiveStyle}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </Link>
      <Link to="404" activeStyle={LinkActiveStyle}>
        {title}
      </Link>
      <Link to="page-2" activeStyle={LinkActiveStyle}>
        {title}
      </Link>
    </NavLinksContainer>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
