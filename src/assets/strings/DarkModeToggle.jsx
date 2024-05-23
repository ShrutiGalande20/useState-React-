import { useState } from "react";

const DarkModeToggle = () =>{

    const [isDarkMode, setIsDarkMode] = useState(false);

        const toggleDarkMode = () =>{
            setIsDarkMode(!isDarkMode);
        }

    return(
        <>
        <br /><hr /> <hr />
        <div style={ {
            backgroundColor: isDarkMode ? 'black' : 'white',
            color: isDarkMode ? 'white' : 'black',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1>Dark mode toggle</h1>
            <p>{isDarkMode ? 'darkmode' : 'lightmode'}</p>

            <button onClick={toggleDarkMode}>
                Toggle to {isDarkMode ? 'light' : 'dark'}Mode
            </button>
        </div>
        </>
    );
}

export default DarkModeToggle