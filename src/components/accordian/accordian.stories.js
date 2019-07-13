import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordian from "./accordian"

storiesOf('Components|Accordian', module)
    .add('with content', () => <Accordian title="Accordian Title"><p>Accordian child</p></Accordian>)