import type { Meta, StoryObj } from "@storybook/react"
import Icon from "../../components/atoms/Icon/index"
import { HiAnnotation } from "react-icons/hi"

const meta: Meta<typeof Icon> = {
    title: "atoms/Icon",
    component: Icon,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    name: "default",
    args: {
        IconComponent: HiAnnotation,
    },
}

