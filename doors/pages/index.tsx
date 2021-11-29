import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import NumberInput from "../components/numberInput";
import { useState } from "react";

export default function Form() {
  const [numberDoors, setNumberDoors] = useState(3);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Qtde Portas?" 
            value={numberDoors} onChange={newNumbers => setNumberDoors(newNumbers)} />
        </Card>
      </div>
      <div>
        <Card></Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
