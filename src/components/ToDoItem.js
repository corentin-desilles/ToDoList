import Button from "./Button";

function TodoItem({todo, deleteTodo, toggleTodo, toggleEdit, selectTodo}) {
    return(
        <li 
            onClick={selectTodo}
            className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${todo.selected ? 'selected' : ''} `}
        >
            <span className="flex-fill mr-15">{todo.content} {todo.done && '✓'}</span>
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    toggleTodo();
                }} 
                text = "Valider"
                className="mr-15"
                />

            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    toggleEdit();
                }} 
                text = "Modifier"
                className="mr-15"
                />

            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo();
                }} 
                text = "Supprimer"
                />
        </li>
    );
}

export default TodoItem