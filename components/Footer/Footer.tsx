import styles from "../../components/Footer/Footer.module.css"

type FooterProps = {
	name: string
}

const Footer = ({ name }: FooterProps) => {
	
    return (
        <div className={styles.container}>{name} Sample</div>
    )
}

export default Footer
