import styles from "../../../styles/Game.module.css";
import Door from "../../../components/Door";
import { useEffect, useState } from "react";
import { createDoors, updateDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function game() {
    const router = useRouter();

    const [valid, setValid] = useState(false);
    const [doors, setDoors] = useState([]);

    useEffect(() =>{
        const doors = +router.query.doors;
        const haveGift = +router.query.haveGift;

        const validDoors =  doors >= 3 && doors <= 100
        const validHaveGift =  doors >= 1 && haveGift <= doors;
        
        setValid(validDoors && validHaveGift);
    },[doors])

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
                {valid ? 
                    renderDoors() :
                    <h1>Valores inválidos!</h1>}
            </div>  
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Restart the game</button>
                </Link>
            </div>
        </div>
    )
}