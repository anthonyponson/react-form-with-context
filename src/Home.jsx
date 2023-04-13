import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { stateContext } from './Context'

const Home = () => {
  const {
    state: { forms },
    dispatch
  } = useContext(stateContext)
  console.log(forms)

  let navigate = useNavigate()

  const form = () => {
    navigate('/form')
  }

  const deleteButton = (index) => {
    const temp = forms.filter((task, i) => i !== index)
    dispatch({
      type: 'tasks',
      payload: temp
    })
  }

  const editButton = (task, index) => {
    navigate('/form')
    dispatch({
      type: 'edit',
      payload: [task, index]
    })
  }

  return (
    <>
      <div>
        {forms.map((task, index) => (
          <ul key={index}>
            <li>
              {task.name} : {task.description} -{' '}
              <input type="checkbox" checked={task.isComplete} />
              <label>{task.isComplete ? 'completed' : 'not completed'}</label>
              <button onClick={() => deleteButton(index)}>Delete</button>
              <button onClick={() => editButton(task, index)}>Edit</button>
            </li>
          </ul>
        ))}

        <button onClick={() => form()}>Go to Form</button>
      </div>
    </>
  )
}

export default Home
