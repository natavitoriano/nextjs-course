import { useState } from "react";
import Door from "../components/Door";
import { createDoors, updateDoors } from "../functions/doors";
import DoorModel from "../model/door";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.num} value={door} 
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))}/>
    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderDoors()}
    </div>
  )
}
