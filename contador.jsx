import {useState} from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={increment}>+1</button>

            <span>{count}</span>

            <button onClick={decrement}>-1</button>
        </div>
    );

}

export default Contador;