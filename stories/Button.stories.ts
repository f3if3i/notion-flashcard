import type { Meta, StoryObj } from "@storybook/react"
import Button from "./../components/atoms/Button/index"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: "atoms/Button",
    component: Button,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    name: "medium",
    args: {
        label: "Button",
        size: "medium"
    },
}

