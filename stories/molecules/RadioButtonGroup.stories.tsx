import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import RadioButton from "../../components/atoms/RadioButton/RadioButton"
import RadioButtonGroup from "../../components/molecules/RadioButtonGroup/index"

const meta: Meta<typeof RadioButtonGroup> = {
    title: "molecules/RadioButtonGroup",
    component: RadioButtonGroup,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RadioButtonGroup>;

export const Primary: Story = {
    name: "default",
    args: {
        name: "Select an option:",
        direction: "vertical"
    },
    render: (args) => <RadioButtonGroupWithHook {...args} />
}

const RadioButtonGroupWithHook = ({ name, direction }: { name: string, direction: "vertical" | "horizontal" }) => {
    const [value, setValue] = useState<"yes" | "no" | "notSure">("yes")
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value as "yes" | "no" | "notSure")
    }
    return <RadioButtonGroup name={name} direction={direction}>
        <RadioButton name={"yes"} label={"Yes"} isChecked={value === "yes"} value="yes" onChange={(e) => handleOnChange(e)} />
        <RadioButton name={"no"} label={"No"} isChecked={value === "no"} value="no" onChange={(e) => handleOnChange(e)} />
        <RadioButton name={"notSure"} label={"Not Sure"} value="notSure" isChecked={value === "notSure"} onChange={(e) => handleOnChange(e)} />
    </RadioButtonGroup>
}

