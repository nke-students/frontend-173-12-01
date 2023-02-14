import {useState} from "react";


export const Application = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState('');
    const [hidden, setHidden] = useState(true);
    
    

    const add = () => setValue((prev) => prev + 1);
    const rem = () => setValue((prev) => prev - 1);
    const toggle = () =>  setHidden((prev) => !prev);
    return (
        <div>
            Value: {value}
            Name: {name}

            <button onClick={add}>Plus</button>
            <button onClick={rem}>Minus</button>
            <input onChange={(e) => setName(e.target.value)}/> 
        <div>
        <button onClick={toggle}>Нажми, если маму любишь</button>

        {!hidden && <div>иди нахуй</div>}

        </div>
    </div>
    )
};