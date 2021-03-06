import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTaskForm from "./components/AddTaskForm";

function App() {

  const[tasks,setTasks]=useState([
  {
      id: 1,
      taskTitle: 'Make Labs',
      isFinished: true,
      date: '12.10.2021'
  },
  {
      id: 2,
      taskTitle: 'PrepareFood',
      isFinished: true,
      date: '06.01.2021'
  },
  {
      id: 3,
      taskTitle: 'Clean room',
      isFinished: false,
      date: '08.10.2021'
  }
  ])

  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000) + 1
    const newTask={id , ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toogleReminder=(id) =>{
    setTasks(tasks.map((task)=> task.id ===id ? {...task,isFinished:!task.isFinished} : task))
  }

  return (
    <div className="container">
      <Header title='Task Manager'/>
      <AddTaskForm onAdd={addTask}/>
      <Tasks task={tasks} onDelete={deleteTask} onToogle={toogleReminder}/>
    </div>
  );
}


export default App;
