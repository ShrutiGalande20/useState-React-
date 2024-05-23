import { useState } from "react";

const PasswordToggle = () =>{

    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const toggleVisibility = () =>{
        setIsVisible(!isVisible);
    }

    return(
        <>
        <br /> <br /><hr />
        <h1>Password Visibility Toggle</h1>

        <input 
        type={isVisible ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        />

        <button className='bg-black text-white p-2 rounded-md'onClick={toggleVisibility}>{isVisible ? 'hide' : 'show'}</button>

        <p>password : {password}</p>
        </>
    );
}

export default PasswordToggle