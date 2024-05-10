import React from 'react'
import Todo from '../Todo'

function TodoList({todos, onRemoveTodo}) {
  return (
    <div>
     {todos && todos.map((todo) =>(
        <Todo key = {todo.id} todo = {todo} onRemoveTodo = {onRemoveTodo}/>
     ))}

    </div>
  )
}

export default TodoList