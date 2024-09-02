import { useState } from "react";
import { v4 as uuid4 } from "uuid"

const List = (props) => {

    const {tasks, setTasks} = props
    const [toDo, setToDo] = useState('')
    const [isDone, setIsDone] = useState (false)




    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTask = {toDo, id:uuid4(), isDone}
        setTasks([...tasks, newTask])
        console.log(newTask);

        setToDo('')

        

    }

    return(
        <div>
            <h1>Todo List</h1>

            <form onSubmit={SubmitHandler}>
                <div>
                    <input className="text" type="text" onChange={(e) => setToDo(e.target.value)} name="toDo" value={toDo} />
                </div>

                <div>
                <button className="btn">Add</button>
                </div>
            </form>
        </div> 
    )
}

export default List;