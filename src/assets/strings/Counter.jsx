import { useState } from "react";

const Counter = () =>{

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    return(
    <>
    <br /> <hr />
    <h1>Simple Counter</h1>

    <p >count : {count}</p>

    <button className='bg-black text-white rounded-md p-2 m-3' onClick={increment}>Increment</button>
    <button className='bg-black text-white rounded-md p-2'onClick={decrement}>Decrement</button>
    </>
    );
}

export default Counter