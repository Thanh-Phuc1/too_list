import React from 'react'

function TaskItem({task, setTaskStartus, removeTask}) {
  return (
    <li id="{task.id}" className={task.status ? "done" : ""}>
        <span class="label">{task.title}</span>
        <div class="actions">
          <input type="checkbox" class="btn-action btn-action-done"  checked = {Boolean(task.status)}
          onChange = {(e) => setTaskStartus(task.id, e.target.checked)}
          
          
          />
          <button onClick={() => removeTask(task.id)}  className=" btn-action btn-action-delete">☓</button>
        </div>
      </li>
  )
}

export default TaskItem