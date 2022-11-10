import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={() => setNumber(prevent => prevent - 1)}>Decrease</button>
            <button onClick={() => setNumber(prevent => prevent + 1)}>Increase</button>
        </div>
    )
}

export default Counter