import './App.css'
import Display from './Componets/Display'
import List from './Componets/List'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])


  return (
    <div className='main'>
        <List tasks={tasks} setTasks={setTasks}/>
        <Display tasks={tasks} setTasks={setTasks}/>
    </div>

  )
}

export default App
