import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { stateContext } from './Context'

const Form = () => {
  const { state, dispatch } = useContext(stateContext)

  const [taskName, setTaskName] = useState(
    state.edit ? state.edit[0]?.name : ''
  )
  const [taskDes, setTaskDes] = useState(
    state.edit ? state.edit[0]?.description : ''
  )
  const [checked, setChecked] = useState(
    state.edit ? state.edit[0]?.isComplete : false
  )

  const sameInput = (e) => {
    if (e.target.name === 'name') {
      setTaskName(e.target.value)
    } else {
      setTaskDes(e.target.value)
    }
  }
  const checking = (e) => {
    setChecked(e.target.checked)
  }

  const submitHandle = (e) => {
    e.preventDefault()
    if (taskName === '' || taskDes === '') return
    let newTask = {
      name: taskName,
      description: taskDes,
      isComplete: checked
    }
    if (state.edit?.length > 0) {
      const temp = [...state.forms]
      temp[state.edit[1]] = newTask
      dispatch({
        type: 'tasks',
        payload: temp
      })
      dispatch({
        type: 'edit',
        payload: []
      })
    } else {
      dispatch({
        type: 'tasks',
        payload: [...state.forms, newTask]
      })
    }
    setTaskName('')
    setTaskDes('')
    setChecked(false)
  }

  const navigation = useNavigate()

  const Home = () => {
    navigation('/home')
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input name="name" value={taskName} onChange={sameInput}></input>

        <input name="des" value={taskDes} onChange={sameInput}></input>

        <input checked={checked} onChange={checking} type="checkbox"></input>
        <input type="submit"></input>
        <button onClick={() => Home()}>Go To Home</button>
      </form>
    </div>
  )
}

export default Form
