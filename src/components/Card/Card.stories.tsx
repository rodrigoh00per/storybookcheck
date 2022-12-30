import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from './Card'
import { string } from 'prop-types'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: string
  }
} as ComponentMeta<typeof Card>


const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const BasicCard = Template.bind({})

BasicCard.args = {
  title: 'title card test'
}
