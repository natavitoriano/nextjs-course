import Door from "../components/Door";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Door selected = {true}/>
      <Door selected = {false}/>
    </div>
  )
}
