import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"

type TestReportProps = {
    name: string
}

const TestReport = ({ name }: TestReportProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>{name} Sample</div>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            backgroundColor: "pink"
        })
    })
}

export default TestReport
