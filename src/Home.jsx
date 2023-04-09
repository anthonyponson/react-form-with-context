import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || [])
    setTasks(storedTasks)
  }, [])

  const edit = () => {}
  const deleteButton = () => {}

  const goToForm = () => {
    navigate('/form')
  }

  return (
    <>
      <nav className="nav">
        <li onClick={goToForm} className="list-item">
          Form
        </li>
      </nav>
      <div>
        <h1>tasks</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.taskName} {task.taskDes}
              <input type="checkbox" checked={task.checked} />
              <label> {task.checked ? 'compleated' : 'not compleated'}</label>
              <button onClick={edit} data-index={index}>
                Edit
              </button>
              <button onClick={deleteButton} data-index={index}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
