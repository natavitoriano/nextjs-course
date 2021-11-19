import styles from "../styles/Door.module.css";
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel,
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps){
    const door  = props.value
    const selected = door.selected && !door.open ? styles.selected: ''

    const toggleSelection = e => props.onChange(door.toggleSelection())
    const ope = e => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }

    function renderDoor() {
        return (
            
            <div className={styles.door}>
                <div className={styles.number}>{door.num}</div>
                <div className={styles.doorknob}
                    onClick={ope}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.open ? false : renderDoor()}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}