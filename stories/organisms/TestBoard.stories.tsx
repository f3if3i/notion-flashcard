import type { Meta, StoryObj } from "@storybook/react"
import TestBoard from "../../components/organisms/TestBoard/index"

const meta: Meta<typeof TestBoard> = {
    title: "organisms/TestBoard",
    component: TestBoard,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TestBoard>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: TestBoard,
    },
}

