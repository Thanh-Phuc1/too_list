
import React, {useState} from "react";
import AddForm from "./AddForm";
import './App.css';
import Header from "./componets/Header";
import TaskList from "./componets/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {id:"task1", title: "Learn JS", status: 1},
    {id:"task2",  title: "Code a Todo List", status: 0}, ]);
  const [showIncomplete, setShowIncomplete] = useState(false);

  const [newTask, setNewTask] = useState("123");
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      title: newTask,
      status: 0,
    };
    setTasks([...tasks, task]);
    setNewTask("")
  }
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }
const handleShowIn = (e) =>{
  setShowIncomplete(e.target.checked);
}

const setTaskStartus = (taskId, status) =>{
  setTasks(
    tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: status ? 1 : 0};
      }
    })
  )
};
const removeTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId ));
};


return (
  <div class="project-container">
    <Header title="Todo List" sub="Get things done, one item at a time."/>
  <TaskList tasks={tasks} showIncomplete={setShowIncomplete} setTaskStartus={setTaskStartus} removeTask={removeTask} 
  
  />
 
 <AddForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} newTask={newTask} />
</div>

);

}

export default App;