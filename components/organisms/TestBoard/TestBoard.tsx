/* eslint-disable no-unused-vars */
import { css, useTheme } from "@emotion/react"
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

type TestBoardProps = {
    testArray: testItemType[]
    databaseInfo: DBInfoType,
    userInfo: User
}

const TestBoard = ({ testArray, databaseInfo, userInfo }: TestBoardProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    const [progress, setProgress] = useState(0)
    const [description, setDescription] = useState(testArray[progress].description)
    const [options, setOptions] = useState<string[]>(testArray[progress].options)
    const [name, setName] = useState("")
    const [result, setResult] = useState(false)
    const [finalResult, setFinalResult] = useState(0)
    const [selectedOption, setSelectedOption] = useState("")

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div css={styles.container}>
            <Card width="75%" height="" backgroundColor="light">
                <div css={styles.contentContainer}>
                    <div>
                        <Typography variant={"body1"}>{capitalizeFirstLetter(description)}</Typography>
                    </div>
                    <RadioButtonGroup name="Answer" direction={"vertical"} >
                        <RadioButton name={options[0]} label={capitalizeFirstLetter(options[0])} isChecked={selectedOption === options[0]} value={options[0]} onChange={(e) => handleOnChange(e)} />
                        <RadioButton name={options[1]} label={capitalizeFirstLetter(options[1])} isChecked={selectedOption === options[1]} value={options[1]} onChange={(e) => handleOnChange(e)} />
                        <RadioButton name={options[2]} label={capitalizeFirstLetter(options[2])} isChecked={selectedOption === options[2]} value={options[2]} onChange={(e) => handleOnChange(e)} />
                        <RadioButton name={options[3]} label={capitalizeFirstLetter(options[3])} isChecked={selectedOption === options[3]} value={options[3]} onChange={(e) => handleOnChange(e)} />


                    </RadioButtonGroup>
                </div>
            </Card>
            <div css={styles.controlContainer}>
                <DatabaseInfoPanel
                    userName={userInfo && userInfo.userName ? userInfo.userName : "undefined"} databaseName={databaseInfo && databaseInfo.name ? databaseInfo.name : "undefined"}
                    databaseLength={testArray.length}
                    currentIndex={progress + 1} />
            </div>
        </div>
    )
}

const FinalResult = () => {
    return <div>www</div>
}

const getStyles = (theme: Theme) => {
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
            gap: theme.spacing[4],
        }),
        controlContainer: css({
            width: "25%",
            display: "flex",
            flexDirection: "column",
            flexGrow: "100%",
            padding: "20px",
            gap: theme.spacing[8],
            justifyContent: "center"
        })
    })
}

export default TestBoard
