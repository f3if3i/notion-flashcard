import type { Meta, StoryObj } from "@storybook/react"
import Footer from "../../components/molecules/Footer/index"

const meta: Meta<typeof Footer> = {
    title: "molecules/Footer",
    component: Footer,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: Footer,
    },
    parameters: {
        layout: "fullscreen",
    },
}

