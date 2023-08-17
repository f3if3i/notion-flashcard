import type { Meta, StoryObj } from "@storybook/react"
import ReportHeader from "../../components/molecules/ReportHeader/index"

const meta: Meta<typeof ReportHeader> = {
    title: "molecules/ReportHeader",
    component: ReportHeader,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ReportHeader>;

export const Primary: Story = {
    name: "default",
    args: {
        testTheme: "AWS Cloud Practitioner",
        author: "Charlotte Li",
        score: 100,
    },
}

