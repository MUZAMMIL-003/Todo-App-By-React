import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/Todolist.jsx'
import { useCallback } from 'react'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: 'Todo 1',
    //   completed: false
    // },
    // {
    //   id: 2,
    //   title: 'Todo 2',
    //   completed: false
    // },
    // {
    //   id: 3,
    //   title: 'Todo 3',
    //   completed: false
    // }
  ]);

  const handleAddTodo = useCallback(() => {
    const todoArr = [...todos,
    {
      id: Date.now(),
      title: todo,
      completed: false
    }]
  
    window.localStorage.setItem('todos', JSON.stringify(todoArr))

//     const todos2 = JSON.parse(localStorage.getItem("todos"))
//     console.log(todos2)
//     setTodos([...todos2]);


    setTodos([...todoArr]);
    setTodo("");

  }, [todo]);

  const handleDeleteTodo = useCallback((id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos([...newTodos]);
  }, [todos])


  const handleToggleTodo = useCallback((id) => {
    const todosArr = [...todos]
    const todoIndx = todosArr.findIndex((todo) => todo.id === id)
    todosArr[todoIndx].completed = !todosArr[todoIndx].completed
    setTodos([...todosArr])
  }, [todos])


  
  return (
    <div className="mx-auto">
      <h1 className='font-bold text-3xl'> Todo App </h1>
      <AddTodo value={ todo } onChange={( e ) => setTodo( e.target.value )} onClick={ handleAddTodo } />
      {/* <div className='flex items-center justify-between my-3'>
        <button className = {`${filter == 'All' ? 'bg-teal-300' : 'bg-teal-200' }`}>All</button>
        <button>Completed</button>
        <button>Remaining</button>
      </div> */}
      <TodoList todos={ todos } onDelete={ handleDeleteTodo } toggleTodo={ handleToggleTodo } />
    </div>


  )
}

export default App
