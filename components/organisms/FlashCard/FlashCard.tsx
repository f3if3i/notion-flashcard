
import { css, useTheme } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { User } from "../../../pages/api/user"
import { DBDataType, DBInfoType } from "../../../types/database"
import Button from "../../atoms/Button/Button"
import Card from "../../atoms/Card/Card"
import { Theme } from "../../../styles/theme"

type FlashcardProps = {
    databaseContent: DBDataType[],
    databaseInfo: DBInfoType,
    userInfo: User
}
const Flashcard = ({ databaseContent, databaseInfo, userInfo }: FlashcardProps) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [ifFlipped, setIfFlipped] = useState(false)
    const [contentIndex, setContentIndex] = useState<number>(0)

    const theme = useTheme() as Theme
    const styles = getStyles(theme)

    useEffect(() => {
        if (databaseContent.length > 0) {
            databaseContent[0].name && setName(databaseContent[0].name)
            databaseContent[0].description && setDescription(databaseContent[0].description)
            setContentIndex(0)
        }

    }, [databaseContent])

    const flipCard = () => {
        setIfFlipped((prev) => !prev)
    }

    const setNewCard = (index: number) => {

        setName(databaseContent[index].name)
        setDescription(databaseContent[index].description)
    }

    const indexIncrement = () =>
        setContentIndex((prev) => prev + 1)

    const handleClick = () => {
        flipCard()
    }
    const handleNextButton = () => {
        if (contentIndex < databaseContent.length - 1) {
            indexIncrement()
            setIfFlipped(false)
            setNewCard(contentIndex + 1)
        } else {
            setName("Congrats!!")
        }
    }

    return (
        <div css={styles.flashCardPanelContainer}>
            <Card width="75%" height="100%" backgroundColor="light">
                <div
                    css={styles.cardContent}
                    onClick={handleClick}
                >
                    {ifFlipped ? <p css={styles.description}>{description}</p> : <h2 css={styles.name}>{name}</h2>}
                </div>
            </Card>
            <div css={styles.flashcardControlContainer}>
                <div>
                    <p>Database created by <span css={styles.underline}>{userInfo && userInfo.userName}</span></p>
                    <p>And you are now learning <span css={styles.underline}>{databaseInfo && databaseInfo.name}</span></p>

                    <p> Progress: <span css={styles.underline}>{contentIndex + 1}</span> / {databaseContent.length}</p>
                </div>
                <Button
                    onClick={handleNextButton}
                    label="Next" />
            </div>
        </div >
    )
}

const getStyles = (theme: any) => {
    return ({
        flashCardPanelContainer: css({
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            textOverflow: "ellipsis",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            padding: "26px",
            width: "100%"
        }),
        flashcardControlContainer: css({
            display: "flex",
            flexDirection: "column",
            fontSize: "18px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
            padding: "20px",
        }),
        underline: css({
            textDecoration: `${theme.colors.secondary.main} wavy underline`
        }),
        cardContent: css({
            textAlign: "center",
            color: "inherit",
            textDecoration: "none",
            width: "400px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textOverflow: "ellipsis",
            cursor: "pointer",
            overflowY: "auto",
        }),
        name: css({
            margin: "0 0 1rem 0",
            fontSize: "28px",
        }),
        description: css({
            fontSize: "22px",
            lineHeight: 1.5,
            description: "100%"
        }),
    })
}

export default Flashcard