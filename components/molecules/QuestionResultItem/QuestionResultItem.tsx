import { css, useTheme } from "@emotion/react"
import { HiArrowCircleRight, HiOutlineEmojiHappy, HiOutlineEmojiSad, HiQuestionMarkCircle } from "react-icons/hi"
import { Theme } from "../../../styles/theme"
import Card from "../../atoms/Card"
import Icon from "../../atoms/Icon"
import Typography from "../../atoms/Typography"

type QuestionResultItemProps = {
    description: string
    name: string
    selectedOption: string
}

const QuestionResultItem = ({ description, name, selectedOption }: QuestionResultItemProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <Card width="" height="100%" borderRadius="s" backgroundColor={theme.colors.white}>
            <div css={styles.container}>
                <div css={styles.questionContainer}>
                    <div css={styles.questionIcon}>
                        <Icon IconComponent={HiQuestionMarkCircle} />
                    </div>
                    <Typography variant={"body1"} customCss={styles.questionTypo}>{description}</Typography>
                </div>
                <div css={styles.answerContainer}>
                    {selectedOption === name ?
                        (<div css={styles.answerItem}>
                            <div css={styles.questionIcon}>
                                <Icon IconComponent={HiOutlineEmojiHappy} color="success" />
                            </div>
                            <Typography variant={"body1"} customCss={styles.questionTypo}>{selectedOption}</Typography>
                        </div>)
                        :
                        (<div css={styles.wrongItemContainer}>
                            <div css={styles.answerItem}>
                                <div css={styles.questionIcon}>
                                    <Icon IconComponent={HiOutlineEmojiSad} color="error" />
                                </div>
                                <Typography variant={"body1"} customCss={styles.questionTypo}>{selectedOption}</Typography>
                            </div>
                            <div css={styles.answerItem}>
                                <div css={styles.questionIcon}>
                                    <Icon IconComponent={HiArrowCircleRight} color="success" />
                                </div>
                                <Typography variant={"body1"} customCss={styles.questionTypo}>{name}</Typography>
                            </div>
                        </div>)}
                </div>
            </div>
        </Card>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[6],
        }),
        questionContainer: css({
            display: "flex",
            gap: theme.spacing[4],
            alignItems: "center",
        }),
        questionIcon: css({
            flexShrink: 0,
            alignSelf: "flex-start",
        }),
        questionTypo: css({
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
        }),
        answerContainer: css({

        }),
        answerItem: css({
            display: "flex",
            gap: theme.spacing[4],
            alignItems: "center",
        }),
        wrongItemContainer: css({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[2],
        }),
    })
}

export default QuestionResultItem
