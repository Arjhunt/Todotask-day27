import React, { useState } from 'react'
import deleteicon from './delete.png'


function App() {
  const [taskInput, setTaskInput] = useState("")
  const[toDolist,setTodolist]=useState([])

//Add note fn
  const addNote=()=>{
    
    toDolist.push({description: taskInput},{isComplete: false})
    setTodolist(toDolist)
    setTaskInput("")
  }

//delete fn
const deleteTask=(index)=>{
  const deletedItem=toDolist.filter((item,i)=>i!=index)
  setTodolist(deletedItem)
}


//Complete fn
const markComplete=(index)=>{
  const list=[...toDolist]
  list[index].isComplete= !list[index].isComplete;
  setTodolist(list)
}


  return (
    <div className='app-background'>
      <p className='heading-text'>TO-DO LIST  📝</p>

      <div className='task-container'>
        <div>
          <form>
          <input className='text-input ' value={taskInput}
            
            onChange={(event) => setTaskInput(event.target.value)} required></input>


          <button className='add-button' type= "submit" onClick={addNote}>ADD</button>
          </form>
        </div>

        {toDolist?.length ? toDolist.map((inputObject,index)=>
        <ListItem index={index} itemData={inputObject} deleteTask={deleteTask} markComplete={markComplete} />) : <p className='no-item-text'> 📌No task added </p>}
        
      </div>
    </div>
  )
}





function ListItem(props) {
  return (
    <div className='list-item row jc-space-between'>
      <span className={props.itemData.isComplete? "task-complete" : ""}
      onClick={()=>props.markComplete(props.index)}>{props.itemData.description}</span>

      <img src={deleteicon} className='delete-icon' onClick={()=>props.deleteTask(props.index)} />
    </div>
  )
}


export default App