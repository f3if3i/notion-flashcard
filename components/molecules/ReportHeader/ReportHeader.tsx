import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import Typography from "../../atoms/Typography"
import Card from "../../atoms/Card"

type ReportHeaderProps = {
    testTheme: string
    author: string
    score: number
}

const ReportHeader = ({ testTheme, author, score }: ReportHeaderProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <div css={styles.container}>
            <Typography variant={"h4"}>Overview</Typography>
            <div css={styles.headerInnerContainer}>
                <div css={styles.detailsItemContainer}>
                    <HeaderCard title={"Theme"} context={testTheme} />
                </div>
                <div css={styles.detailsItemContainer}>
                    <HeaderCard title={"Author"} context={author} />
                </div>
                <div css={styles.detailsItemContainer}>
                    <HeaderCard title={"Score"} context={score} />
                </div>
            </div>
        </div>
    )
}

const HeaderCard = ({ title, context }: { title: string, context: string | number }) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <div css={styles.headerCardContainer}>
            <Card width="100%" height="100%" borderRadius="s" padding="m" margin="0px" backgroundColor={theme.colors.white}>
                <div css={styles.detailsTitleContainer}>
                    <Typography variant={"body1"}>{title}</Typography>
                </div>
                <Typography variant={"h6"} customCss={styles.contextClamp}>{context}</Typography>
            </Card>
        </div>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
        }),
        headerTitleContainer: css({

        }),
        headerInnerContainer: css({
            display: "flex",
            justifyContent: "space-between",
            gap: theme.spacing[12],
            marginTop: theme.spacing[4]
        }),
        detailsTitleContainer: css({
            marginBottom: theme.spacing[2]
        }),
        detailsItemContainer: css({
            display: "flex",
            flexDirection: "column",
            flex: 1
        }),
        headerCardContainer: css({
            height: "100%",
            width: "240px"
        }),
        contextClamp: css({
            maxHeight: "120px",
            height: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
        }),
    })
}

export default ReportHeader
