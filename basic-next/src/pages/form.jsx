import { useState } from "react"

export default function form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [users, setUsers] = useState([]);

    async function saveUser(){
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ name, age })
        })

        setName("");
        setAge(0);

        const resp = await fetch('/api/form');
        const users = await resp.json();
        setUsers(users);
    }

    function renderUsers() {
        return users.map((user, i) => {
            return <li key={i}>{user.name} tem {user.age}</li>
        })
    }

    return (
        <div>
            <h1>Integrating with API #2</h1>
            <input type="text" value={name}
                onChange={e => setName(e.target.value)}/>
            <input type="number" value={age}
                onChange={e => setAge(+e.target.value)}/>
            <button onClick={saveUser}>Submit</button>

            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}