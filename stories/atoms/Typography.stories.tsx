import type { Meta, StoryObj } from "@storybook/react"
import Typography from "../../components/atoms/Typography/index"

const meta: Meta<typeof Typography> = {
    title: "atoms/Typography",
    component: Typography,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
    name: "default",
    args: {
        children: "This is a sentence.",
        variant: "body1"
    },
}

