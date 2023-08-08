import type { Meta, StoryObj } from "@storybook/react"
import Section from "../../components/molecules/Section/index"

const meta: Meta<typeof Section> = {
    title: "molecules/Section",
    component: Section,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
    name: "default",
    args: {
        title: "Questions",
        children: <div>Content</div>
    },
}

