import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style = {{
            border:"3px solid tomato",
            borderRadius:"20px",
            margin:"10px",
            padding:"10px"
            }}>
                
            <h3>Counter: {count}</h3>
            <button style={{background:"purple", color:"White"}} onClick={handleAdd}>Add</button>

            <button style={{background:"maroon", color:"white", marginLeft:"5px"}} onClick={handleReduce}>Reduce</button>
        </div>
    )
}