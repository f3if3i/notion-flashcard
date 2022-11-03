
import { css } from "@emotion/react"
import React, { useEffect, useState } from "react"
import database from "../../pages/api/database"
import { User } from "../../pages/api/user"
import { DBDataType, DBInfoType } from "../../types/database"

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

    useEffect(() => {
        if (databaseContent) {
            setName(databaseContent[0].name)
            setDescription(databaseContent[0].description)
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
        <div>
            <div css={styles.flashCardContainer}>

                <div
                    css={styles.card}
                    onClick={handleClick}
                >
                    {ifFlipped ? <p css={styles.description}>{description}</p> : <h2 css={styles.name}>{name}</h2>}
                </div>
            </div>
            <div css={styles.flashcardControlContainer}>
                <div css={styles.flashCardGeneralInfo}>
                    <p>Hi! <span css={styles.underline}>{userInfo && userInfo.userName}</span></p>
                    <p>Your are now learning <span css={styles.underline}>{databaseInfo && databaseInfo.name}</span></p>

                    <p> Progress: <span css={styles.underline}>{contentIndex + 1}</span> / {database.length}</p>
                </div>
                <button
                    css={[styles.submitButton]}
                    onClick={handleNextButton}>Next
                </button>
            </div>
        </div>

    )
}

const styles = {
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
    flashCardContainer: css({
        width: "76%",
        height: "100%",
        padding: "18px"
    }),
    underline: css({
        textDecoration: "rgba(252, 186, 3) wavy underline"
    }),
    card: css({
        margin: "1rem",
        padding: "4rem",
        textAlign: "center",
        color: "inherit",
        textDecoration: "none",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        maxWidth: "800px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textOverflow: "ellipsis",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.319)",
        cursor: "pointer"
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
    submitButton: css({
        borderRadius: "28px",
        color: "rgba(252, 186, 3)",
        backgroundColor: "black",
        padding: "6px 16px",
        border: "solid 2px black",
        fontSize: "16px",
        fontFamily: "'Kanit', serif",
        fontWeight: "600",
        transition: "all 1s ease",
        ":hover": {
            borderRight: "solid 2px black",
            borderBottom: "solid 4px black",
        },
        alignSelf: "center",
        margin: "8px 28px 34px 28px",
        width: "120px"
    }),

}

export default Flashcard

