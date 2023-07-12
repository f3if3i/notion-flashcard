import type { Meta, StoryObj } from "@storybook/react"
import RadioButton from "../../components/atoms/RadioButton/index"

const meta: Meta<typeof RadioButton> = {
    title: "atoms/RadioButton",
    component: RadioButton,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: RadioButton,
        name: "RadioButton",
        label: "radioButton",
        isChecked: true,
        id: "id"
    },
}

