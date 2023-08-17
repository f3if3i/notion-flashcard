import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import Card from "../../atoms/Card"
import ReportHeader from "../../molecules/ReportHeader/ReportHeader"
import Section from "../../molecules/Section/Section"
import { User } from "../../../pages/api/user"
import { DBInfoType } from "../../../types/database"
import { testItemType } from "../../../types/test"
import QuestionResultItem from "../../molecules/QuestionResultItem/QuestionResultItem"

type TestReportProps = {
    testArray: testItemType[]
    databaseInfo: DBInfoType,
    userInfo: User,
    selectedOptions: string[],
    score: number
}

const TestReport = ({ testArray, databaseInfo, userInfo, selectedOptions, score }: TestReportProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <Card width="" height="100%" borderRadius="s" backgroundColor={theme.colors.white}>
            <div css={styles.container}>
                <ReportHeader testTheme={databaseInfo.name} author={userInfo.userName ?? ""} score={score} />
                <Section title={"Questions"} >
                    <div css={styles.sectionInnerContainer}>
                        {testArray.map((testItem, index) => {
                            return (
                                <QuestionResultItem key={index} description={testItem.description} name={testItem.name} selectedOption={selectedOptions[index]} />
                            )
                        })}
                    </div>
                </Section>
            </div>
        </Card>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        container: css({
            padding: theme.spacing[6],
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[6]
        }),
        sectionInnerContainer: css({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[6]
        }),
    })
}

export default TestReport
