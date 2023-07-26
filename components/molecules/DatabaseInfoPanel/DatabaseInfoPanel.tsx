import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import Typography from "../../atoms/Typography/Typography"

type DatabaseInfoPanelProps = {
    userName: string
    databaseName: string
    databaseLength: number
    currentIndex: number
}

const DatabaseInfoPanel = ({ userName, databaseName, databaseLength, currentIndex }: DatabaseInfoPanelProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>
            <Typography variant={"body1"} >Database created by <span css={styles.underline}>{userName}</span></Typography>
            <Typography variant={"body1"} >You are now learning <span css={styles.underline}>{databaseName}</span></Typography>
            <Typography variant={"body1"} >Progress: <span css={styles.underline}>{currentIndex + 1}</span> / {databaseLength}</Typography>
        </div>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            lineHeight: "28px",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[3]
        }),
        underline: css({
            textDecoration: `${theme.colors.secondary.main} wavy underline`
        }),
    })
}

export default DatabaseInfoPanel
