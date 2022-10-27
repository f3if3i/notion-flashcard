
import { css } from "@emotion/react"
import React, { ReactEventHandler } from "react"

type CardProps = {
    title: string
    description: string
    ifFlipped: boolean
    onClick: ReactEventHandler
}
const Card = ({ title, description, ifFlipped, onClick }: CardProps) => {
    return (
        <div
            css={styles.card}
            onClick={onClick}
        >
            {ifFlipped ? <p css={styles.description}>{description}</p> : <h2 css={styles.name}>{title}</h2>}
        </div>
    )
}

const styles = {
    card: css({
        margin: "1rem",
        padding: "4rem",
        textAlign: "center",
        color: "inherit",
        textDecoration: "none",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        maxWidth: "800px",
        height: "500px",
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
    })

}

export default Card

