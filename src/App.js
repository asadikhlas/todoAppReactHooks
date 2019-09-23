import React, { useState } from 'react';
import './App.css'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div>
      <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo" >
        {todo.text}
      </div>
      <button onClick={() => completeTodo(index)} >Completed</button>
      <button onClick={() => removeTodo(index)} >Remove todo</button>
    </div>

  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="add todo..." />
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about hooks',
      isCompleted: false
    },
    {
      text: 'Meet friend from lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodo = [...todos]
    newTodo[index].isCompleted = true
    setTodos(newTodo)
  }


  const removeTodo = (index) => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }


  return (
    <div className="app" >
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;