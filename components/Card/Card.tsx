
import { css, useTheme } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { User } from "../../pages/api/user"
import { DBDataType, DBInfoType } from "../../types/database"
import Button from "../atoms/Button/Button"

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

    const theme = useTheme()
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
            <div
                css={styles.card}
                onClick={handleClick}
            >
                {ifFlipped ? <p css={styles.description}>{description}</p> : <h2 css={styles.name}>{name}</h2>}
            </div>
            <div css={styles.flashcardControlContainer}>
                <div css={styles.flashCardGeneralInfo}>
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
        flashCardGeneralInfo: css({
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
        card: css({
            margin: "1rem",
            padding: "4rem",
            textAlign: "center",
            color: "inherit",
            textDecoration: "none",
            border: `1px solid ${theme.colors.grey[300]}`,
            borderRadius: "10px",
            width: "75%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textOverflow: "ellipsis",
            backgroundColor: theme.colors.grey[100],
            cursor: "pointer",
            overflowY: "hidden"
        }),
        name: css({
            margin: "0 0 1rem 0",
            fontSize: "28px",
        }),
        description: css({
            margin: 0,
            fontSize: "22px",
            lineHeight: 1.5,
            textOverflow: "ellipsis"
        }),
    })
}

export default Flashcard
