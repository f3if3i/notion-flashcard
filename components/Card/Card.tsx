
import React, { ReactEventHandler } from "react"
import styles from "../../components/Card/Card.module.css"

type CardProps = {
	title: string
	description: string
	ifFlipped: boolean
	onClick: ReactEventHandler
}
const Card = ({ title, description, ifFlipped, onClick } : CardProps) => {
    return (
        <div 
            className={styles.card}
            onClick={onClick}
        >
            {ifFlipped ? <p>{description}</p>: <h2>{title}</h2> }
        </div>
    )
}

export default Card