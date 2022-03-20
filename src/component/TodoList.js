import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import todo from "./Todo";


function TodoList() {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const updatesTodo = (todosId,newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todosId ?newValue:item)))

    }

    const completeTodo = id =>{
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  updateTodo={updatesTodo}
            />

        </div>
        );

}

export default TodoList;