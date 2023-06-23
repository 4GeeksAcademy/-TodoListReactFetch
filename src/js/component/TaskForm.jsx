import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const TaskForm = () => {

	// HOOKS

	const [input, setInput] = useState("")	
	const [tasks,setTasks] = useState([])

// ---------------------------------------    


// FUNCION SUBMIT

	const handleSubmit = (e) => {
		e.preventDefault()
		if(e.key === "enter") {
		const newTask = {
			id: uuidv4(),
			text: input,
		}

		setTasks([...tasks, newTask])
		
	}
		
		setInput("")
		focus();
		console.log(tasks)

	}

	
	
// --------------------------------------- 

	return (
		<form className="form-mainContainer" onSubmit={handleSubmit}>
			<input className="task-Input"
			type="text"
			placeholder="Escribe una tarea..."
			name="texto"
			value={input}
			onChange={(e)=>setInput(e.target.value)}
			/>	
		</form>
	);
};

export default TaskForm;



