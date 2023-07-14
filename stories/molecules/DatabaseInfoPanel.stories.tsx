import type { Meta, StoryObj } from "@storybook/react"
import DatabaseInfoPanel from "../../components/molecules/DatabaseInfoPanel/index"

const meta: Meta<typeof DatabaseInfoPanel> = {
    title: "molecules/DatabaseInfoPanel",
    component: DatabaseInfoPanel,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DatabaseInfoPanel>;

export const Primary: Story = {
    name: "default",
    args: {
        userName: "Micah Yujin",
        databaseName: "Next.js",
        databaseLength: 20,
        currentIndex: 0
    },
}

