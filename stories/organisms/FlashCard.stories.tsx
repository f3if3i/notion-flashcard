import type { Meta, StoryObj } from "@storybook/react"
import FlashCard from "../../components/organisms/FlashCard/index"

const meta: Meta<typeof FlashCard> = {
    title: "organisms/FlashCard",
    component: FlashCard,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FlashCard>;

export const Primary: Story = {
    name: "default",
    args: {
        databaseContent: [{ name: "Title", description: "description" }, { name: "Title", description: "description" }],
        databaseInfo: { id: "xxxxx", name: "database name" },
        userInfo: { userId: "testid", userName: "user name" }
    },
}
