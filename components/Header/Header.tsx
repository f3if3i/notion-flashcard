import styles from "../../components/Header/Header.module.css"

type HeaderProps = {
	name: string
}

const Header = ({ name }: HeaderProps) => {
	
    return (
        <div className={styles.header}>{name} Sample</div>
    )
}

export default Header