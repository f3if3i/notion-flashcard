import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import Typography from "../../atoms/Typography/Typography"

type RadioButtonGroupProps = {
    name: string
    direction: "vertical" | "horizontal"
    children: React.ReactNode
}

const RadioButtonGroup = ({ name, direction, children }: RadioButtonGroupProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme, direction)
    return (
        <fieldset css={styles.fieldset}>
            <legend><Typography variant="body1">{name}</Typography></legend>
            <div css={styles.container}>{children}</div>
        </fieldset>
    )
}

const getStyles = (theme: Theme, direction: "vertical" | "horizontal") => {
    return ({
        container: css({
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
            gap: direction === "vertical" ? theme.spacing[1] : theme.spacing[4],
            marginTop: theme.spacing[2]
        }),
        fieldset: css({
            border: "none",
            padding: 0,
            margin: 0
        })
    })
}

export default RadioButtonGroup
