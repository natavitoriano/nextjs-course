import Door from "../components/Door";
import DoorModel from "../model/door";

export default function Home() {
  const d1 = new DoorModel(1, false, true)
  const d2 = new DoorModel(2)

  return (
    <div style={{display: "flex"}}>
      <Door door={d1}/>
      <Door door={d2}/>
    </div>
  )
}
