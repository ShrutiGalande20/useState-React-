import {useState} from 'react'

const State = () =>{

    const [name, setName] = useState("Felix");

    const changeName = () =>{

        const userInput = window.prompt("Enter your name: ");
        setName(userInput);
    }

    console.log('component rendered');

    return(
        <>
        <h1>Institute:{name}</h1>
        
        <button onClick={changeName} className='bg-black text-white shadow-md rounded-md m-5 p-2'>Click me</button>
        </>
    );
}

export default State