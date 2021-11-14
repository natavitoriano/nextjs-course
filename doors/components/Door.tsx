import styles from "../styles/Door.module.css";
import DoorModel from '../model/door'

interface DoorProps {
    door: DoorModel
}

export default function Door(props: DoorProps){
    const { door } = props
    const selected = door.selected ? styles.selected: ''

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>3</div>
                    <div className={styles.doorknob}></div>
                </div>
            </div>
            <div className={styles.floor}>

            </div>
        </div>
    )
}