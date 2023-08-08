import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import Typography from "../../atoms/Typography"

type SectionProps = {
    title: string
    children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>
            <Typography variant={"h4"}>{title}</Typography>
            <div css={styles.contentContainer}>
                {children}
            </div>
        </div>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[4]
        }),
        contentContainer: css({
        })
    })
}

export default Section
