import { useState } from "react"
import Button from "./Button";

function AddTodo({ addTodo }) {
   const [value, setValue] = useState("");

function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
}

function handleClick() {
    addTodo(value);
    setValue('');
}

function handleKeyDown(e) {
    if (e.code ==="Enter" && value.length) {
        addTodo(value);
        setValue('');
    }
}

    
    return (
        <div className=" d-flex flex-row justify-content-center align-items-center ">
            <input onChange={handleChange} 
                    onKeyDown={handleKeyDown} 
                    value={value} 
                    type="text" 
                    placeholder="Entrer votre To Do" 
                    className="input flex-fill mr-15"/>
            <Button text="Ajouter" onClick={handleClick} />
        </div>
    );
}


export default AddTodo;