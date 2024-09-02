import { useState } from "react";

const Display = (props) => {
    const {tasks, setTasks} = props

    const isChecked =(id) => {
        const updatedList = tasks.map((task) => {
            if(id === task.id){
                task.isDone = !task.isDone
            }
            return task;
        })
        console.log(updatedList);
        setTasks(updatedList)
    }

    const deleteTask = (id) => {
        const filteredTask = tasks.filter((task) => task.id !== id)
        setTasks(filteredTask)
    }


    return (
        <div>
            {
                tasks.map( (task) => (
                    <div className={` ${task.isDone? 'isDone' : ''}`} key={task.id}>
                        <li className="bullet">{task.toDo}
                        <input className="check" type="checkbox" name="isDone" checked={task.isDone} onClick={() => isChecked(task.id)}/>
                        <button onClick={() => deleteTask(task.id)} className="btn2">Delete</button></li>
                    </div>
                ) )
            }
        </div>
        
        
    )
}

export default Display