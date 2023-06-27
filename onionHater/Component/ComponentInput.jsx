import React,{useState} from 'react';

const ComponentInput = () => {
    
    const [value,setValue] = useState('');
    
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        if(inputValue.toLowerCase().includes('cebolla')){
            alert('Odio la cebolla!');
        }
    }
    return(
        <div>
           <input type="text" value={value} onChange={handleChange} /> 
        </div>
    );
};
 
export default ComponentInput;