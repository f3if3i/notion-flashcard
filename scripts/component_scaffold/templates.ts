export const createComponentTemplate = (
    name: string
): string => `import styles from "../../components/${name}/${name}.module.css"

type ${name}Props = {
	name: string
}

const ${name} = ({ name }: ${name}Props) => {
	
    return (
        <div className={styles.container}>{name} Sample</div>
    )
}

export default ${name}
`

export const createIndexTemplate = (
    name: string
): string => `export { default } from "./${name}"
export * from "./${name}"
`

export const createStyleTemplate = (): string => `.container {
	
}
`