import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@restlucas-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/restlucas.png',
    alt: 'Lucas Oliveira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
