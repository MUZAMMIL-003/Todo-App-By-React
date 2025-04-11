import { useEffect } from "react"


function TodoList({ todos , onDelete, toggleTodo }) {
    return(
        <>
         {
        todos.map((todo) => ( 
          <div key={todo.id} className='flex items-center justify-between my-1 border-blue-300 rounded-md py-2'>
            <h2 onClick = {() => toggleTodo(todo.id)}
            style= {{textDecoration : todo.completed ? "line-through"  : "none"}}
            className='text-xl border text-left mr-2 cursor-pointer  py-2 pl-2 text-gray font-medium flex-1 rounded-md border-r-transparent'>{todo.title}</h2>
            <button onClick={()=>onDelete(todo.id)} className='bg-blue-300 text-white px-4 py-2 rounded-md'>Delete</button>
          </div>
        ))
      }
        </>
    )
    
}

export default TodoList