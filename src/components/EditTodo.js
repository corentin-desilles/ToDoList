import { useState } from "react";

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
            <button onClick={cancelEditTodo} className="btn btn-reverse-primary">
                Annuler
            </button>
            <button onClick={handleClick} className="btn btn-primary">
                Enregistrer
            </button>
        </div>
    );
}


export default EditTodo;