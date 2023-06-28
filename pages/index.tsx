/* eslint-disable no-unused-vars */
import Head from "next/head"
import Layout from "../components/Layout/Layout"
import React, {
    ReactElement,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react"
import type { NextPageWithLayout } from "./_app"
import { css, useTheme } from "@emotion/react"
import { CSSTransition } from "react-transition-group"
import { HiArrowCircleLeft } from "react-icons/hi"
import Card from "../components/Card"
import { getDatabaseId, isDBIdValid } from "../utils/parseUrl"
import {
    localStorageInit,
    FC_LOCAL_STORAGE,
    isDBExisted,
} from "../utils/localStorage"
import { DBInfoType } from "../types/database"
import { useFetch } from "../hooks/useFetch"
import Button from "../components/atoms/Button/Button"

const Home: NextPageWithLayout = () => {
    const [inputUrl, setInputUrl] = useState<string>("")
    const [updatedUrl, setUpdatedUrl] = useState<string>("")
    const [knownDatabase, setKnowDatabase] = useState<DBInfoType[]>([])
    const [isPanelExpand, setPanelExpand] = useState<boolean>(false)
    const {
        loading,
        errorMessage,
        user,
        database,
        setErrorMessage,
    } = useFetch(updatedUrl)

    const theme = useTheme()
    const styles = getStyles(theme)

    useEffect(() => {
        localStorageInit(FC_LOCAL_STORAGE)
        if (localStorage.hasOwnProperty(FC_LOCAL_STORAGE)) {
            const dbList = JSON.parse(localStorage.getItem(FC_LOCAL_STORAGE) || "[]")
            dbList && setKnowDatabase(dbList)
        }
    }, [])

    useEffect(() => {
        if (localStorage.hasOwnProperty(FC_LOCAL_STORAGE)) {
            const dbList = JSON.parse(localStorage.getItem(FC_LOCAL_STORAGE) || "[]")
            dbList && setKnowDatabase(dbList)
        }
        if (database.contents.length > 0 && !loading) {
            setPanelExpand(true)
        }
    }, [database, loading])



    const handleSubmit = () => {
        setErrorMessage("")
        const database_id = getDatabaseId(inputUrl)
        if (!isDBIdValid(database_id)) {
            setErrorMessage("The url is invalid")
            return
        }
        if (isDBIdValid(database_id) && isDBExisted(database_id)) {
            setErrorMessage("The database already exists in the list 👉")
        } else {
            setUpdatedUrl(database_id)
        }
    }

    const handleUrlChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setInputUrl(event.target.value)
    }
    const handleClickDB = (value: string) => {
        setUpdatedUrl(value)
    }

    const handlePanel = () => {
        setPanelExpand((prev) => !prev)
    }

    // no idea how this works
    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <div css={styles.container}>
            <Head>
                <title>Notion Flashcard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CSSTransition in={isPanelExpand} nodeRef={nodeRef} timeout={1000}>
                {(state) => (
                    <div css={styles.panelContainer} style={panelTransitionStyles[state]}>
                        {isPanelExpand && (
                            <div
                                css={styles.panelCollapseContainer}
                                style={panelAppearContentStyles[state]}
                            >
                                <h3>Happy learning!</h3>
                            </div>
                        )}
                        <button
                            css={styles.closePanelButton}
                            style={panelCloseButtonTransitionStyles[state]}
                            onClick={handlePanel}
                        >
                            <HiArrowCircleLeft />
                        </button>
                        <div
                            css={styles.panelContent}
                            style={panelContentTransitionStyles[state]}
                        >
                            <div css={styles.dbInputContainer}>
                                {/* first element */}
                                <h1 css={styles.title}>Notion Flashcard</h1>

                                {/* second element */}
                                <div css={styles.panelInputContainer}>
                                    <label>
                                        <p css={styles.label}>Enter your Notion Database Url 📝</p>
                                        <input
                                            css={styles.inputField}
                                            placeholder="Your database url..."
                                            type="text"
                                            value={inputUrl}
                                            name="inputUrl"
                                            onChange={handleUrlChange}
                                        />
                                    </label>
                                    {errorMessage && <p
                                        css={[
                                            styles.inputErrorMessage,
                                            errorMessage && styles.inputErrorMessageAnimation,
                                        ]}
                                    >
                                        {errorMessage}
                                    </p>}
                                    <div css={styles.buttonContainer}>
                                        <Button
                                            label={loading ? "Loading..." : "Submit"}
                                            size="medium"
                                            variant="contained"
                                            color="normal"
                                            backgroundColor="normal"
                                            shape="rounded"
                                            isAnimated
                                            onClick={handleSubmit}
                                        />
                                    </div>
                                </div>
                            </div>
                            {knownDatabase && (
                                <div css={styles.dbInfoContainer}>
                                    <h3 css={styles.label}>Your databases</h3>
                                    <div css={styles.dbListContainer}>
                                        {knownDatabase.map((db) => (
                                            <div key={db.name}>
                                                <Button
                                                    label={db.name}
                                                    size="large"
                                                    variant="contained"
                                                    color="light"
                                                    backgroundColor="light"
                                                    shape="squared"
                                                    isAnimated
                                                    onClick={() => handleClickDB(db.id)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </CSSTransition>
            <main css={styles.cardContainer}>
                {isPanelExpand && loading ? (
                    <p css={styles.label}>Loading</p>
                ) : database.contents.length > 0 ? (
                    <Card
                        databaseContent={database.contents}
                        databaseInfo={{ id: database.id, name: database.name }}
                        userInfo={user}
                    />
                ) : (
                    <p css={styles.label}>Nothing loaded yet</p>
                )}
            </main>
        </div>
    )
}

const getStyles = (theme: any) => {
    return ({
        container: css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "480px",
            width: "1200px",
            gap: "28px",
            backgroundColor: theme.colors.grey[100],
            padding: "48px",
        }),
        panelContainer: css({
            gridColumnStart: 1,
            gridColumnEnd: 4,
            backgroundColor: theme.colors.grey[200],
            gridRowStart: 1,
            gridRowEnd: 2,
            zIndex: 10,
            borderRadius: "28px",
            transitionDuration: "2s",
            transitionProperty: "all",
            transform: "translateY(36px)",
            minHeight: "350px",
            display: "flex",
            boxShadow:
                `${theme.colors.accentShadow[500]} 5px 5px, ${theme.colors.accentShadow[400]} 10px 10px, ${theme.colors.accentShadow[300]} 15px 15px, ${theme.colors.accentShadow[200]} 20px 20px, ${theme.colors.accentShadow[100]} 25px 25px;`,
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
            marginLeft: "20px",
        }),
        buttonContainer: css({
            alignSelf: "center",
            margin: "16px 28px 34px 28px",
        }),
        cardContainer: css({
            gridColumnStart: 2,
            gridColumnEnd: 5,
            backgroundColor: theme.colors.grey[100],
            gridRowStart: 1,
            gridRowEnd: 2,
            boxShadow: `${theme.colors.shadow[100]} 0px 2px 4px`,
            borderRadius: "28px",
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            textOverflow: "ellipsis",
            justifyContent: "center",
            alignItems: "center",
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
            zIndex: 30,
        }),
        title: css({
            fontSize: "48px",
            fontFamily: "'Merriweather', serif",
            fontWeight: "700",
            marginBottom: "48px",
        }),
        inputField: css({
            padding: "6px 16px",
            borderRadius: "18px",
            width: "100%",
            fontSize: "16px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
            marginTop: "12px",
        }),
        label: css({
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
            fontSize: "18px",
            margin: "0 12px 0 0",
        }),
        panelInputContainer: css({
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
        }),
        inputErrorMessage: css({
            transform: "translateX(-100%)",
            transition: "all 2s ease",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
            fontSize: "16px",
            color: theme.colors.caution.main,
            margin: "8px 0 8px 0",
        }),
        inputErrorMessageAnimation: css({
            transform: "translateX(0)",
        }),
        dbInfoContainer: css({
            marginTop: "28px",
            alignSelf: "flex-start",
        }),
        dbButton: css({
            padding: "12px 28px",
            borderRadius: "12px",
            borderStyle: "none",
            background: theme.colors.secondary.main,
            fontSize: "18px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
            ":hover": {
                transform: "scale(1.03)",
            },
            transition: "transform .2s",
        }),
        dbListContainer: css({
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "18px",
        }),
    })
}

const panelAppearContentStyles: { [state: string]: React.CSSProperties } = {
    entering: {
        // Fix styles
        width: "fill-available",
        display: "flex",
        opacity: 1,
        justifyContent: "center",
        alignItems: "center",
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

const panelTransitionStyles: { [state: string]: React.CSSProperties } = {
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

const panelContentTransitionStyles: { [state: string]: React.CSSProperties } = {
    entering: {
        opacity: "0",
        display: "none",
    },
    entered: {
        opacity: "0",
        display: "none",
    },
    exiting: {
        transform: "translateX(0)",
        opacity: "0",
    },
    exited: {
        transform: "translateX(0)",
    },
}

const panelCloseButtonTransitionStyles: {
    [state: string]: React.CSSProperties;
} = {
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

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Home
