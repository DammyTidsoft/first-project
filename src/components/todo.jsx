import './css/todo.css'
const todo = () => {
  return (
    <div className='todo'> 
        <div className="todo-header">To-Do List</div>
         <div className="todo-add">
         <input type="text" placeholder='Add Your Task' className='todo-input'>  </input>
         <div className='todo-addbutton'>ADD</div>
         </div>
        <div className='todo-list'> 
        
        </div>
    </div>
  )
}

export default todo
