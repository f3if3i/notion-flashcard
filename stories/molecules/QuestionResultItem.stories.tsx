import type { Meta, StoryObj } from "@storybook/react"
import QuestionResultItem from "../../components/molecules/QuestionResultItem/index"

const meta: Meta<typeof QuestionResultItem> = {
    title: "molecules/QuestionResultItem",
    component: QuestionResultItem,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof QuestionResultItem>;

export const Primary: Story = {
    name: "correct",
    args: {
        // label: QuestionResultItem,
    },
    render: (args) => <div css={{
        width:
            "100%"
    }} > <QuestionResultItem name={"DynamoDB"} description={"What is the most popular database of AWS"} selectedOption={"DynamoDB"} /></div>
}

export const Secondary: Story = {
    name: "wrong",
    args: {
        // label: QuestionResultItem,
    },
    render: (args) => <div css={{
        width:
            "100%"
    }} > <QuestionResultItem name={"DynamoDB"} description={"What is the most popular database of AWS"} selectedOption={"Amazon Aurora"} /></div>
}

