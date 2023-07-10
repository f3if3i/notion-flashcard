import type { Meta, StoryObj } from "@storybook/react"
import Card from "../../components/atoms/Card/index"

const meta: Meta<typeof Card> = {
    title: "atoms/Card",
    component: Card,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: Card,
    },
}

