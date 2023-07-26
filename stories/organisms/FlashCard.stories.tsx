import type { Meta, StoryObj } from "@storybook/react"
import FlashCard from "../../components/organisms/FlashCard/index"
import { DBDataType, DBInfoType } from "../../types/database"
import { User } from "../../pages/api/user"
import { css } from "@emotion/css"

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
    render: (args) => <FlashCardWithContainer {...args} />
}

const FlashCardWithContainer = ({ databaseContent, databaseInfo, userInfo }: { databaseContent: DBDataType[], databaseInfo: DBInfoType, userInfo: User, }) => {
    return <div css={styles.container}>
        <FlashCard databaseContent={databaseContent} databaseInfo={databaseInfo} userInfo={userInfo} />
    </div>
}

const styles = {
    container: css({
        height: "600px",
        width: "1800px"
    })
}