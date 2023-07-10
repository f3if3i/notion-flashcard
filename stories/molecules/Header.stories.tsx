import type { Meta, StoryObj } from "@storybook/react"
import Header from "../../components/molecules/Header/index"

const meta: Meta<typeof Header> = {
    title: "molecules/Header",
    component: Header,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: Header,
    },
}

