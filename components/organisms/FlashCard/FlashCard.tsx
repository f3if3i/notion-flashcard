
import { css, useTheme } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { User } from "../../../pages/api/user"
import { DBDataType, DBInfoType } from "../../../types/database"
import Button from "../../atoms/Button/Button"
import Card from "../../atoms/Card/Card"
import { Theme } from "../../../styles/theme"
import DatabaseInfoPanel from "../../molecules/DatabaseInfoPanel/DatabaseInfoPanel"

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
                <DatabaseInfoPanel
                    userName={userInfo && userInfo.userName ? userInfo.userName : "undefined"} databaseName={databaseInfo && databaseInfo.name ? databaseInfo.name : "undefined"}
                    databaseLength={databaseContent.length}
                    currentIndex={contentIndex + 1} />
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
            flexGrow: "100%",
            padding: "20px",
            width: "100%",
            gap: theme.spacing[8],
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