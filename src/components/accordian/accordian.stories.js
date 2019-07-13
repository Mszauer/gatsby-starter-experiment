import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordian from "./accordian"

storiesOf('Accordian', module)
    .add('with content', () => <Accordian title="Accordian"><p>Accordian child</p></Accordian>)