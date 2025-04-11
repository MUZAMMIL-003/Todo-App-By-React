function TodoInput({onChange, onClick, value}) {
    return(
        <div className="my-3">
        <input type="text" className='h-10 p-2 cursor-pointer border rounded-md border-black ' value={value} placeholder='Add Todos' onChange={onChange} />
        <button className='ml-3 cursor-pointer' disabled={value === ""} style={{backgroundColor : value === "" &&  "grey"  }} onClick={onClick} >Add Todo</button>
      </div>
    )
}
export default TodoInput