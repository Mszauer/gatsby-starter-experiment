import React from "react"
import { storiesOf } from "@storybook/react"
import NavItem from "./navItem"

storiesOf("Components|Navbar", module)
    .add('Navigation Item', () => <NavItem />)