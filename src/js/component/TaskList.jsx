import React, { useState } from "react";
import { RiDeleteBack2Fill } from 'react-icons/fa';


const TaskList = ({ tasks }) => {

    const [icon, setIcon] = useState(false)


    const hideIcon = () => {
        setIcon(false)
    }

    const showIcon = () => {
        setIcon(true)
    }


    return (
        <div className="container-list">
            {tasks.length === 0
                ? (<p>No hay tareas, añadir tareas</p>)
                : <ul className="form-list">
                    {tasks.map((task) => (
                        <li key={task.id}>{task.text}</li>
                    ))}
                </ul>
            }


            <div>
             <i className="fa-solid fa-trash"></i>
            </div>

        </div>
    );
};

export default TaskList;