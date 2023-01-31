import TodoItem from './ToDoItem';
import EditTodo from './EditTodo';

function TodoList({todoList, deleteTodo, toggleTodo, toggleEdit, editTodo, selectTodo}) {
    return  (
        <ul>
            {todoList.map((todo) => todo.edit ? (
                <EditTodo
                key={todo.id} 
                todo={todo} 
                cancelEditTodo={() => toggleEdit(todo.id)}
                editTodo={(content) => editTodo(todo.id, content)}
                />
            ) : (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={() => deleteTodo(todo.id)}
                toggleTodo={() => toggleTodo(todo.id) }
                toggleEdit={() => toggleEdit(todo.id) }
                selectTodo={() => selectTodo(todo.id)}
                /> 
            ))}
        </ul>
    ) 
    
       
    
}


export default TodoList