import styles from "../styles/Door.module.css";
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel,
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps){
    const door  = props.value
    const selected = door.selected ? styles.selected: ''

    const toggleSelection = e => props.onChange(door.toggleSelection())

    function renderDoor() {
        return (
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.doorknob}></div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            {door.open ? false : renderDoor()}
            <div className={styles.floor}>
            </div>
        </div>
    )
}