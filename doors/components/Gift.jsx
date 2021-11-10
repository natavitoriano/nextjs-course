import styles from "../styles/Gift.module.css";

export default function Gift() {
    return(
        <div className={styles.gift}>
            <div className={styles.cover}>Tampa</div>
            <div className={styles.giftBody}>Corpo</div>
        </div>
    )
}