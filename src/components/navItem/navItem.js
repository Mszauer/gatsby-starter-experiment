import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLi = styled.p`
  display: inline-block;
  padding: 0 1.4em 0 0;
  font-size: 0.9em;

  Link {
    text-decoration: none;
    color: #7D7C7D;
  }
`
const LinkActiveStyle = {
  color: `#000000`,
  borderBottom: `2px solid #000000`,
  fontWeight: 300,
}

const NavItem = ({ title, location }) => {
  return (
    <StyledLi>
      <Link to={location} activeStyle={LinkActiveStyle}>{title}</Link>
    </StyledLi>
  )
}

NavItem.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string
}

NavItem.defaultProps = {
  title: "Home",
  location: "/"
}
export default NavItem