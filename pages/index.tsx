/* eslint-disable no-unused-vars */
import Head from "next/head"
import Layout from "../components/Layout/Layout"
import React, { ReactElement, SetStateAction, useEffect, useRef, useState } from "react"
import type { NextPageWithLayout } from "./_app"
import notion from "../lib/notion"
import { User } from "./api/user"
import { css } from "@emotion/react"
import { CSSTransition } from "react-transition-group"
import { HiArrowCircleLeft } from "react-icons/hi"
import Card from "../components/Card"
import { getDatabaseId, isDBIdValid } from "../utils/parseUrl"

type DatabaseRow = {
    name: string,
    description: string
}

type DatabaseInfo = {
    name: string,
    id: string
}

const Home: NextPageWithLayout = () => {
    const [user, setUser] = useState<User>({ userId: "", userName: "" })
    const [database, setDatabase] = useState<DatabaseRow[]>()
    const [databaseInfo, setDatabaseInfo] = useState<DatabaseInfo>({ name: "", id: "" })
    const [inputUrl, setInputUrl] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [databaseLoading, setDatabaseLoading] = useState(false)
    const [knownDatabase, setKnowDatabase] = useState<DatabaseInfo[]>([])
    const [isPanelExpand, setPanelExpand] = useState<boolean>(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [ifFlipped, setIfFlipped] = useState(false)
    const [contentIndex, setContentIndex] = useState<number>(0)

    useEffect(() => {
        if (localStorage.hasOwnProperty("notionFlashcardDBIdList") && localStorage.hasOwnProperty("notionFlashcardDBNameList")) {
            const dbIdList = JSON.parse(localStorage.getItem("notionFlashcardDBIdList")!)
            const dbNameList = JSON.parse(localStorage.getItem("notionFlashcardDBNameList")!)
            if (dbIdList.length === dbNameList.length) {
                const dbList = dbIdList.map((_: string, i: number) => {
                    return {
                        id: dbIdList[i],
                        name: dbNameList[i]
                    }
                })
                setKnowDatabase(dbList)
            }
        }
    }, [])

    const fetchData = async (database_id: string) => {
        setDatabaseLoading(true)
        try {
            const response = await notion.retreiveUser({ database_id: database_id })
            const responseDB = await notion.queryDatabase({ database_id: database_id })
            const filteredDatabase = responseDB.data.results.map((data: { properties: { Name: { title: { plain_text: any }[] }; Description: { rich_text: { plain_text: any }[] } } }) => ({
                name: data.properties.Name.title[0].plain_text,
                description: data.properties.Description.rich_text[0].plain_text
            }))
            setUser(response.data)
            setDatabase(filteredDatabase)
            setDatabaseLoading(false)
            setDatabaseInfo({ name: responseDB.data.databaseTitle, id: database_id })
            setName(filteredDatabase[0].name)
            setDescription(filteredDatabase[0].description)
            setContentIndex(0)
            setPanelExpand(true)
            return { name: responseDB.data.databaseTitle, id: database_id }
        } catch (exception) {
            setDatabaseLoading(false)
            setErrorMessage("Please check if the database format is valid and none of the field is empty")
        }
    }

    const updateLocalStorage = (database_id: string, database_name: string) => {
        const newDB = { id: database_id, name: database_name }
        if (localStorage.hasOwnProperty("notionFlashcardDBIdList")) {
            const dbIdList = JSON.parse(localStorage.getItem("notionFlashcardDBIdList")!)
            const dbNameList = JSON.parse(localStorage.getItem("notionFlashcardDBNameList")!)
            if (!dbIdList.includes(newDB.id)) {
                if (dbIdList.length > 6) {
                    dbIdList.shift()
                    dbNameList.shift()
                }
                dbIdList.push(newDB.id)
                dbNameList.push(newDB.name)
                localStorage.setItem("notionFlashcardDBIdList", JSON.stringify(dbIdList))
                localStorage.setItem("notionFlashcardDBNameList", JSON.stringify(dbNameList))
                setKnowDatabase((prev) => [...prev, newDB])
            }
        } else {
            const dbIdList: string[] = []
            const dbNameList: string[] = []
            dbIdList.push(newDB.id)
            dbNameList.push(newDB.name)
            localStorage.setItem("notionFlashcardDBIdList", JSON.stringify(dbIdList))
            localStorage.setItem("notionFlashcardDBNameList", JSON.stringify(dbNameList))
            setKnowDatabase((prev) => [...prev, newDB])
        }
    }

    const handleSubmit = () => {
        setErrorMessage("")

        const database_id = getDatabaseId(inputUrl)
        if (isDBIdValid(database_id)) {

            if (localStorage.hasOwnProperty("notionFlashcardDBIdList") && localStorage.hasOwnProperty("notionFlashcardDBNameList")) {
                const dbIdList = JSON.parse(localStorage.getItem("notionFlashcardDBIdList")!)
                if (dbIdList.includes(database_id)) {
                    setErrorMessage("The database already exists in the list 👉")
                } else {
                    fetchData(database_id).then(
                        (result) => {
                            if (result && result.id) {
                                updateLocalStorage(result.id, result.name)
                            }
                        }
                    )
                }
            } else {
                fetchData(database_id).then(
                    (result) => {
                        if (result && result.id) {
                            updateLocalStorage(result.id, result.name)
                        }
                    }
                )

            }
        } else {
            setErrorMessage("😵 Oops, the url is invalid. Try another url!")
        }
    }

    const handleUrlChange = (event: { target: { value: SetStateAction<string> } }) => {
        setInputUrl(event.target.value)
    }
    const handleClickDB = (event: any) => {
        fetchData(event.target.value)
    }

    const handlePanel = () => {
        setPanelExpand((prev) => !prev)
    }

    const flipCard = () => {
        setIfFlipped((prev) => !prev)
    }

    const setNewCard = (index: number) => {
        if (database) {
            setName(database[index].name)
            setDescription(database[index].description)
        }
    }

    const indexIncrement = () =>
        setContentIndex((prev) => prev + 1)


    const handleClick = () => {
        flipCard()
    }

    const handleNextButton = () => {
        if (database) {
            if (contentIndex < database.length - 1) {
                indexIncrement()
                setIfFlipped(false)
                setNewCard(contentIndex + 1)
            } else {
                setName("Congrats!!")
            }
        }
    }

    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <div css={styles.container}>
            <Head>
                <title>Notion Flashcard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CSSTransition in={isPanelExpand} nodeRef={nodeRef} timeout={1000}>
                {(state) =>
                    <div css={styles.panelContainer} style={panelTransitionStyles[state]}>
                        {isPanelExpand &&
                            <div css={styles.panelCollapseContainer} style={panelAppearContentStyles[state]}>
                                <h3>Happy learning!</h3>
                            </div>}
                        <button
                            css={styles.closePanelButton}
                            style={panelCloseButtonTransitionStypes[state]}
                            onClick={handlePanel}
                        ><HiArrowCircleLeft /></button>
                        <div css={styles.panelContent} style={panelContentTransitionStyles[state]}>
                            <div css={styles.dbInputContainer}>
                                {/* first element */}
                                <h1 css={styles.title}>
                                    Notion Flashcard
                                </h1>

                                {/* second element */}
                                <div css={styles.panelInputContainer}>

                                    <label>
                                        <p css={styles.label}>Enter your Notion Database ID 📝</p>
                                        <input
                                            css={styles.inputField}
                                            placeholder="Your database id..."
                                            type="text" value={inputUrl} name="inputUrl" onChange={handleUrlChange} />
                                    </label>
                                    <p css={[styles.inputErrorMessage, errorMessage && styles.inputErrorMessageAnimation]}>{errorMessage && errorMessage}</p>
                                    <button
                                        css={styles.submitButton}
                                        onClick={handleSubmit} >{databaseLoading ? "Loading..." : "Submit"}</button>


                                </div>
                            </div>
                            {knownDatabase && <div css={styles.dbInfoContainer}>
                                <h3 css={styles.label}>Your databases</h3>
                                <div css={styles.dbListContainer}>
                                    {knownDatabase.map((db) =>
                                        <div key={db.name}>
                                            <button css={styles.dbButton} onClick={handleClickDB} value={db.id}>{db.name}</button>
                                        </div>
                                    )}
                                </div>
                            </div>}
                        </div>
                    </div>
                }
            </CSSTransition >
            <main css={styles.cardContainer}>
                {isPanelExpand ?
                    database ?
                        <>

                            <div css={styles.flashCardContainer}>

                                <Card
                                    title={name}
                                    description={description}
                                    ifFlipped={ifFlipped}
                                    onClick={handleClick} />
                            </div>
                            <div css={styles.flashcardControlContainer}>
                                <div css={styles.flashCardGeneralInfo}>
                                    <p>Hi! <span css={styles.underline}>{user && user.userName}</span></p>
                                    <p>Your are now learning <span css={styles.underline}>{databaseInfo && databaseInfo.name}</span></p>

                                    <p> Progress: <span css={styles.underline}>{contentIndex + 1}</span> / {database.length}</p>
                                </div>
                                <button
                                    css={[styles.submitButton]}
                                    onClick={handleNextButton}>Next
                                </button>
                            </div>
                        </>

                        : <p css={styles.label}>Not Loaded yet</p> : null
                }
            </main>

        </div >
    )
}


const styles = {
    container: css({
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "480px",
        width: "1200px",
        gap: "28px",
        backgroundColor: "#f5f5f5",
        padding: "48px"

    }),
    panelContainer: css({
        gridColumnStart: 1,
        gridColumnEnd: 4,
        backgroundColor: "#EEEBE4",
        gridRowStart: 1,
        gridRowEnd: 2,
        zIndex: 10,
        borderRadius: "28px",
        transitionDuration: "2s",
        transitionProperty: "all",
        transform: "translateY(36px)",
        minHeight: "350px",
        display: "flex",
        boxShadow: "rgba(252, 186, 3, 0.4) 5px 5px, rgba(252, 186, 3, 0.3) 10px 10px, rgba(252, 186, 3, 0.2) 15px 15px, rgba(245, 188, 0, 0.1) 20px 20px, rgba(245, 188, 0, 0.05) 25px 25px;"
    }),
    panelContent: css({
        display: "flex",
        borderRadius: "28px",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "nowrap",
        width: "100%",
        padding: "26px",
        gap: "28px",
        overflow: "hidden",
    }),
    panelCollapseContainer: css({
        fontSize: "16px",
        fontFamily: "'Kanit', serif",
        fontWeight: "400",
        padding: "20px",
        transition: "all 2s ease",
        marginLeft: "20px"

    }),
    cardContainer: css({
        gridColumnStart: 2,
        gridColumnEnd: 5,
        backgroundColor: "###b0b0b0",
        gridRowStart: 1,
        gridRowEnd: 2,
        boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
        borderRadius: "28px",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        textOverflow: "ellipsis",
        justifyContent: "center",
        alignItems: "center"
    }),
    dbInputContainer: css({
        minWidth: "420px",
    }),
    closePanelButton: css({
        position: "absolute",
        right: "6px",
        top: "6px",
        backgroundColor: "transparent",
        borderStyle: "none",
        fontSize: "46px",
        transition: "transform 1.8s ease",
        zIndex: 30
    }),
    title: css({
        fontSize: "48px",
        fontFamily: "'Merriweather', serif",
        fontWeight: "700",
        marginBottom: "48px"
    }),
    inputField: css({
        padding: "6px 16px",
        borderRadius: "18px",
        width: "100%",
        fontSize: "16px",
        fontFamily: "'Kanit', serif",
        fontWeight: "400",
        marginTop: "12px"
    }),
    label: css({
        fontFamily: "'Kanit', serif",
        fontWeight: "400",
        fontSize: "18px",
        margin: "0 12px 0 0",
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
    panelInputContainer: css({
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    }),
    inputErrorMessage: css({
        transform: "translateX(-100%)",
        transition: "all 2s ease",
        fontFamily: "'Kanit', serif",
        fontWeight: "400",
        fontSize: "16px",
        color: "#EE4521",
        margin: "8px 0 8px 0"
    }),
    inputErrorMessageAnimation: css({
        transform: "translateX(0)"
    }),
    dbInfoContainer: css({
        marginTop: "28px",
        alignSelf: "flex-start"
    }),
    dbButton: css({
        padding: "12px 28px",
        borderRadius: "12px",
        borderStyle: "none",
        background: "rgba(252, 186, 3)",
        fontSize: "18px",
        fontFamily: "'Kanit', serif",
        fontWeight: "600",
        ":hover": {
            transform: "scale(1.03)"
        },
        transition: "transform .2s"
    }),
    dbListContainer: css({
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
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
    flashCardContainer: css({
        width: "76%",
        height: "100%",
        padding: "18px"
    }),
    underline: css({
        textDecoration: "rgba(252, 186, 3) wavy underline"
    })
}


const panelAppearContentStyles: { [state: string]: React.CSSProperties } = (
    {
        entering: {
            // Fix styles
            width: "fill-available",
            display: "flex",
            opacity: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        entered: {
            // Fix styles
            width: "fill-available",
            display: "flex",
            opacity: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        exiting: {
            display: "none",
        },
        exited: {
            display: "none",
        },
    }
)


const panelTransitionStyles: { [state: string]: React.CSSProperties } = (
    {
        entering: {
            width: "240px",
        },
        entered: {
            width: "240px",
        },
        exiting: {
            width: "100%",
        },
        exited: {
            width: "100%",
        },
    }
)

const panelContentTransitionStyles: { [state: string]: React.CSSProperties } = (
    {
        entering: {
            opacity: "0",
            display: "none"
        },
        entered: {
            opacity: "0",
            display: "none"
        },
        exiting: {
            transform: "translateX(0)",
            opacity: "0"

        },
        exited: {
            transform: "translateX(0)",
        },
    }
)

const panelCloseButtonTransitionStypes: { [state: string]: React.CSSProperties } = (
    {
        entering: {
            transform: "rotateZ(180deg)",
        },
        entered: {
            transform: "rotateZ(180deg)",
        },
        exiting: {
            transform: "rotateZ(0deg)",

        },
        exited: {
            transform: "rotateZ(0deg)",
        },
    }
)

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home
