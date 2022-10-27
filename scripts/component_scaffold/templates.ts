export const createComponentTemplate = (
    name: string
): string => `import { css } from "@emotion/react"

type ${name}Props = {
	name: string
}

const ${name} = ({ name }: ${name}Props) => {
	
    return (
        <div css={styles.container}>{name} Sample</div>
    )
}

const styles = {
	container: css({
		backgroundColor: "pink
	})
}

export default ${name}
`

export const createIndexTemplate = (
    name: string
): string => `export { default } from "./${name}"
export * from "./${name}"
`
