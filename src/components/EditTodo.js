import { useState } from "react";
import Button from "./Button";

function EditTodo({todo, editTodo, cancelEditTodo}) {
    const [value, setValue] = useState(todo.content);

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleClick() {
        editTodo(value);
        setValue('');
    }

    function handleKeyDown(e) {
        if (e.code ==="Enter" && value.length) {
            editTodo(value);
            setValue('');
        }
    }

    
    return (
        <div className=" d-flex flex-row justify-content-center align-items-center mb-10 ">
            <input 
                onChange={handleChange} 
                onKeyDown={handleKeyDown} 
                value={value} 
                type="text" 
                placeholder="Modofiez votre To Do" 
                className="input flex-fill mr-15"
            />
            <Button
                onClick={cancelEditTodo}
                text='Annuler'
                className='mr-15'
            />
            <Button
                onClick={handleClick}
                text='Enregistrer'
                className='mr-15'
            />
        </div>
    );
}


export default EditTodo;