import React from 'react'

function AddForm({handleInputChange, handleSubmit, newTask}) {
  return (
    <form class="form" onSubmit={handleSubmit}>
    <label htmlFor="newitem">Add to the todo list</label>
    <input type="text" id="newitem" value={newTask} onChange={handleInputChange} />
    <button type="submit">Add item</button>
  </form>
  )
}

export default AddForm