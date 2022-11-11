import React, { useState } from 'react';

const defaultItems = [
    {
        name: 'Item A'
    },
    {
        name: 'Item B'
    },
    {
        name: 'Item C'
    }

]

// type Items = {
//     name: string
// }

const Todo = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState<any[]>(defaultItems)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {


        setText(event.target.value)
    }

    const handleClick = () => {

        setItems((prev) => [...prev, { name: text }])
    }
    return (
        <>
            <input value={text} onChange={handleChange} />

            <button onClick={handleClick} >Add todo</button>

            <br /><br />



            {
                items.map((item, index) => (
                    <h3 key={index}>{item.name}</h3>
                ))
            }

        </>
    )
}

export default Todo