import {connect} from 'react-redux'
import {useState} from 'react'

function App(props){

  const [task , setTask] = useState ('')

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleAdd = (task) =>{
    props.onAdd(task)
  }

  const handleDelete = (index)=>{
    props.onDelete(index)
  }

  const allTasks = props.taskList
  
  const taskItem = allTasks.map((task, index)=>{
    return <li key={index}>
    <p>{task}</p>
    <button onClick ={()=>handleDelete(index)}>Delete Task</button>  
    </li>
    
  })

  return(
    <>
      <input type='text' onChange = {handleChange}/>
      <button onClick = {()=>handleAdd(task)}>Add Task</button>
      <ul>
        {taskItem}
      </ul>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
      onAdd: (task) => dispatch({type:'ADDTASK', payload: task}),
      onDelete: (task) => dispatch({type:'DELETETASK', payload: task})
    }
}

const mapStateToProps = (state) => {
  return{
    taskList:state.tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)