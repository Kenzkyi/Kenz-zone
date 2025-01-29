import React from 'react'
import { useState } from 'react'

const App = () => {
  const [taskInput,setTaskInput] = useState('')
  const [tasks,setTasks] = useState([])
  const [editting,setEditting] = useState('')
  const [editInput,setEditInput] = useState('')

  const addTask = ()=>{
    if(taskInput){
      setTasks([...tasks,taskInput])
      setTaskInput('')
    }else{
      alert('Please enter a task')
    }
  }

  const deleteTask = (id)=>{
    const filtered = tasks.filter((item,index,arr)=>index !== id)
    setTasks(filtered)
  }

  const editTask = (id)=>{
    // const filtered = tasks.filter((item,index)=> e)
    const mapped = tasks.map((item,index)=>{
      if (index === id) {
        setEditInput(item)
        setEditting(index)
        
      }
    })
    //   const finded = tasks.find((item,index)=>index === id)
    // console.log(finded)
    // setEditInput(finded)
  }
  
  const saveTask = (id)=>{
    const mapped = tasks.map((item,index)=>{
      if(index === id){
        item = editInput 
        return item
      }
      return item
    })
    setTasks(mapped)
    setEditting(false)
    setEditInput('')
  }

  return (
    <div className='app'>
      <div className="white-holder">
        <h3>TO DO List</h3>
        <div className="input-holder">
          <input type="text" placeholder='Enter a task' value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="task-holder">
          {tasks.map((item,index)=>
          <div className="task" key={index}>
          {editting === index?<input type="text" value={editInput} onChange={(e)=>setEditInput(e.target.value)} style={{height:30,background:'transparent',border:'none',outline:'none'}} />:<p>{item}</p>}
          {editting === index?<div className="task-button-holder"><button onClick={()=>saveTask(index)}>Save</button></div>:<div className="task-button-holder">
            <button onClick={()=>editTask(index)}>Edit</button>
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>}
        </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
