import {useState} from 'react'

const  Dropdown = () =>{

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) =>{
        setSelectedOption(event.target.value);
    };

    return(
        <>
        <br />
    <hr />
    <h1>Drop down seletion</h1>
    <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
    </select>
    <p>Selected : {selectedOption}</p>
    </>
    );
    

}

export default Dropdown 