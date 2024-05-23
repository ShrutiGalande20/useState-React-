import { useState } from "react";

const Input = ()=>{

    <hr />

    const [text, setText] = useState('');

    const handleChange = (event) =>{
        setText(event.target.value); // `event.target.value` gets the current value of the input field
    };
    

    return(
        <>
        <br /> <hr />
        <h1>Text input example</h1>
        <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={'Type something...'}
         />
         <p>Current text: {text}</p>
        </>
    );
}

export default Input