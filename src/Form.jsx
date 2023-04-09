import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [taskName, setName] = useState('')
  const [taskDes, setDes] = useState('')
  const [checked, setCheked] = useState(false)
  const [submit, isSubmit] = useState(false)
  const [tasks, setTasks] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem('tasks') || [])
    setTasks(storedTask)
  }, [])
  const inputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else {
      setDes(e.target.value)
    }
  }

  const checkboxChange = (e) => {
    setCheked(e.target.checked)
  }
  const handleClickSubmit = (e) => {
    e.preventDefault()
    isSubmit(true)

    if (taskName === '' || taskDes === '') return

    const newTask = { taskName, taskDes, checked }
    setTasks([...tasks, newTask])
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))

    setName('')
    setDes('')
    setCheked(false)
    isSubmit(false)
  }

  const goToHome = () => {
    navigate('/home')
  }
  return (
    <>
      <div>
        <nav className="nav">
          <li className="list-item" onClick={goToHome}>
            Home
          </li>
        </nav>
      </div>

      <div>
        <form onSubmit={handleClickSubmit}>
          <input
            type="text"
            value={taskName}
            name="name"
            onChange={inputChange}
          />
          {taskName === '' && submit && <div>task name is required</div>}
          <input
            type="text"
            value={taskDes}
            name="des"
            onChange={inputChange}
          />
          {taskDes === '' && submit && <div>task description is required</div>}
          <input type="checkbox" checked={checked} onChange={checkboxChange} />

          <input type="submit" />
        </form>

        <h1>Taks:</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.taskName} - {task.taskDes} :
              <input type="checkbox" checked={task.checked} />
              <label>{task.checked ? 'compleated' : 'not compleated'} </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Form
