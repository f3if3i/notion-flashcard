import type { Meta, StoryObj } from "@storybook/react"
import TestReport from "../../components/organisms/TestReport/index"

const meta: Meta<typeof TestReport> = {
    title: "Organisms/TestReport",
    component: TestReport,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TestReport>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: TestReport,
    },
}

