/* eslint-disable no-unused-vars */
import { css, useTheme, keyframes, Keyframes } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import RadioButtonGroup from "../../molecules/RadioButtonGroup/RadioButtonGroup"
import { testItemType } from "../../../types/test"
import Typography from "../../atoms/Typography/Typography"
import { useState } from "react"
import DatabaseInfoPanel from "../../molecules/DatabaseInfoPanel/DatabaseInfoPanel"
import { DBInfoType } from "../../../types/database"
import { User } from "../../../pages/api/user"
import RadioButton from "../../atoms/RadioButton/RadioButton"
import { capitalizeFirstLetter } from "../../../utils/string"
import Card from "../../atoms/Card"
import { HiAnnotation, HiQuestionMarkCircle } from "react-icons/hi"
import Icon from "../../atoms/Icon/Icon"
import Button from "../../atoms/Button/Button"

type TestBoardProps = {
    testArray: testItemType[]
    databaseInfo: DBInfoType,
    userInfo: User
}

const TestBoard = ({ testArray, databaseInfo, userInfo }: TestBoardProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    const [progress, setProgress] = useState(0)
    const [description, setDescription] = useState(testArray[0].description)
    const [options, setOptions] = useState<string[]>(testArray[0].options)
    const [name, setName] = useState(testArray[0].name)
    const [selectedOption, setSelectedOption] = useState("")
    const [score, setScore] = useState(0)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value)
    }

    const handleNextQuestion = () => {
        if (selectedOption === name) {
            setScore(score + 1)
        }
        if (progress < 19) {
            setDescription(testArray[progress + 1].description)
            setOptions(testArray[progress + 1].options)
            setName(testArray[progress + 1].name)
        }
        setProgress(progress + 1)
    }

    return (
        <div css={styles.container}>
            {progress < 20 ?
                <>
                    <Card width="75%" height="" backgroundColor="light">
                        <div css={styles.contentContainer}>
                            <div css={styles.descriptionContainer}>
                                <div css={styles.iconContainer}>
                                    <Icon IconComponent={HiQuestionMarkCircle} />
                                </div>
                                <div css={styles.textContainer}><Typography variant={"body1"}>{capitalizeFirstLetter(description)}</Typography>
                                </div>
                            </div>
                            <div css={styles.answerContainer}>
                                <div css={styles.descriptionContainer}>
                                    <div css={styles.iconContainer}>
                                        <Icon IconComponent={HiAnnotation} />
                                    </div>
                                    <div css={styles.optionContainer}>                    <RadioButtonGroup name="Answer" direction={"vertical"} >
                                        <RadioButton name={options[0]} label={capitalizeFirstLetter(options[0])} isChecked={selectedOption === options[0]} value={options[0]} onChange={(e) => handleOnChange(e)} />
                                        <RadioButton name={options[1]} label={capitalizeFirstLetter(options[1])} isChecked={selectedOption === options[1]} value={options[1]} onChange={(e) => handleOnChange(e)} />
                                        <RadioButton name={options[2]} label={capitalizeFirstLetter(options[2])} isChecked={selectedOption === options[2]} value={options[2]} onChange={(e) => handleOnChange(e)} />
                                        <RadioButton name={options[3]} label={capitalizeFirstLetter(options[3])} isChecked={selectedOption === options[3]} value={options[3]} onChange={(e) => handleOnChange(e)} />
                                    </RadioButtonGroup>
                                    </div>
                                </div>
                                <div>
                                    <Button label={"Next"} onClick={() => handleNextQuestion()} />
                                </div>
                            </div>
                        </div>

                    </Card>
                    <div css={styles.controlContainer}>
                        <DatabaseInfoPanel
                            userName={userInfo && userInfo.userName ? userInfo.userName : "undefined"} databaseName={databaseInfo && databaseInfo.name ? databaseInfo.name : "undefined"}
                            databaseLength={testArray.length}
                            currentIndex={progress} />
                    </div>
                </>
                :
                <FinalResult score={score} />
            }
        </div>
    )
}

type FinalResultProps = {
    score: number
}
const FinalResult = ({ score }: FinalResultProps) => {
    const theme = useTheme() as Theme
    const expand = keyframes`
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: 100%;
      opacity: 1;
    }
  `
    const styles = getStyles(theme, expand)

    return <Card width="100%" height="" backgroundColor="light" >
        <div css={styles.resultContainer}>
            <div css={styles.resultContent}>
                <Typography variant={"body1"}>Your final score is ...</Typography>
                <div css={styles.resultContentMain}>
                    <Typography variant={"h4"}>{score}/ 20</Typography>
                </div>
            </div>
        </div>
    </Card>
}

const getStyles = (theme: Theme, expand?: Keyframes) => {
    return ({
        container: css({
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%"
        }),
        contentContainer: css({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }),
        controlContainer: css({
            width: "25%",
            display: "flex",
            flexDirection: "column",
            flexGrow: "100%",
            padding: "20px",
            gap: theme.spacing[8],
            justifyContent: "center"
        }),
        descriptionContainer: css({
            display: "flex",
            textOverflow: "hidden",
        }),
        iconContainer: css({
            flexShrink: 0,
            marginRight: theme.spacing[4]
        }),
        textContainer: css({
            marginTop: theme.spacing[1],
            flexGrow: 1,
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            overflow: "hidden",
            maxHeight: "140px",
            textOverflow: "ellipsis",
            width: "100%",
        }),
        optionContainer: css({
            marginTop: theme.spacing[1],
            flexGrow: 1,
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
        }),
        answerContainer: css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }),
        resultContainer: css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            animation: `${expand} 2s ease-in-out forwards`
        }),
        resultContent: css({
            width: "280px",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[6]
        }),
        resultContentMain: css({
            alignSelf: "flex-end"
        })
    })
}

export default TestBoard
