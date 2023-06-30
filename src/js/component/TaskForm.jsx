import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Tasklist from "./TaskList";
import { createUser, addTask, getAPI, } from "../API";

const TaskForm = () => {

  // HOOKS

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // --------------------------------

  // FUNCION SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("No se agrega tarea vacía");
      return;
    }

    const newTask = {
      id: uuidv4(),
      label: input,  
      done: false,     
      
    };
    
    setTasks([newTask, ...tasks]);
    setInput("");
  };

  // --------------------------------

  // FUNCION PARA ELIMINAR TAREA

  const onDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
// --------------------------------

useEffect(() => {
  getAPI()
    .then((data) => {
      setTasks(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


useEffect(() => {
  addTask(tasks)
},[tasks])


  return (
    <div>
      <h1>Lista de tareas</h1>
      <form className="form-mainContainer" onSubmit={handleSubmit}>
        <input
          className="task-Input"
          type="text"
          placeholder="Escribe una tarea..."
          name="texto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Tasklist tasks={tasks} onDeleteTask={onDeleteTask} />
      </form>
      <button className="createDeleteButton" onClick={() => setTasks([])}>
        Limpiar Tareas
      </button>
      <button className="createUserButton" onClick={() => createUser()}>
        Crear Usuario
      </button>
    </div>
  );
};

export default TaskForm;




