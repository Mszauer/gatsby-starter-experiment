import React from "react"
import { storiesOf } from "@storybook/react"
import Navbar from "./navbar"

storiesOf("Components|Navbar", module)
    .add('Entire Navbar', () => <Navbar></Navbar>)