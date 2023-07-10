export const createComponentTemplate = (
    name: string,
): string => `import { css, useTheme } from "@emotion/react"

type ${name}Props = {
	name: string
}

const ${name} = ({ name }: ${name}Props) => {
    const theme = useTheme()
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>{name} Sample</div>
    )
}

const getStyles = (theme: any) => {
    return ({
        container: css({
            backgroundColor: "pink"
        })
    })
}

export default ${name}
`

export const createIndexTemplate = (
    name: string,
): string => `export { default } from "./${name}"
export * from "./${name}"
`

export const createStoryTemplate = (name: string, category: string): string => `import type { Meta, StoryObj } from "@storybook/react"
import ${name} from "../../components/${category}/${name}/index"

const meta: Meta<typeof ${name}> = {
    title: "${category}/${name}",
    component: ${name},
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ${name}>;

export const Primary: Story = {
    name: "default",
    args: {
        // label: ${name},
    },
}

`
