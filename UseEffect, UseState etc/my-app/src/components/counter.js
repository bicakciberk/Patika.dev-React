import React from "react";
import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount((count) => {
            return count > 0 ? count - 1 : count = 0;
        })
    }

    const decrease = () => {
        setCount((count) => {
            return count < 20 ? count + 1 : count = 20;
        })
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;