import React from "react"
import { useSelector, useDispatch } from 'react-redux'

const Child = () => {
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <div style={{maxWidth: '400px', margin: '2rem auto', border: "1px solid blue", padding: "10px 20px", textAlign: 'center'}}>
                <h2>Child Component</h2>
            <span>Count: {count}</span>
            </div>
        </>
    )
}

export default Child;