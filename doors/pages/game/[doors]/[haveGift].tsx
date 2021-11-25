import styles from "../../../styles/Game.module.css";
import Door from "../../../components/Door";
import { useEffect, useState } from "react";
import { createDoors, updateDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function game() {
    const router = useRouter();
    const [doors, setDoors] = useState([]);

    useEffect(() =>{
        const doors = +router.query.doors;
        const haveGift = +router.query.haveGift;
        setDoors(createDoors(doors, haveGift));
    },[router?.query])

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.num} value={door} 
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))}/>
    })
  }
    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>  
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Restart the game</button>
                </Link>
            </div>
        </div>
    )
}