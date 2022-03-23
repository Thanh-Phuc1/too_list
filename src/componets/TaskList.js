import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomplete, setTaskStartus, removeTask, handleShowIn}) {
  return (
      <>
    <ul className="task-list">
  {tasks.filter(task => showIncomplete ? task.status !== 1 : true)
  .map(task => (
       <TaskItem key={task.id}  task={task} setTaskStartus={setTaskStartus} removeTask={removeTask}/>
  ))}
  </ul>
   <div className="togglebutton-wrapper">
   <label htmlFor="filter" class="togglebutton-label">
     Show incompleted tasks only
   </label>
   <input id="filter" type="checkbox" checked= {showIncomplete} onChange= {handleShowIn} />
 </div>
 </>
  )
}

export default TaskList