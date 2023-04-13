export const initialState = {
  isLogedIn: false,
  forms: [],
  edit: [],
  userData: [
    {
      id: 1,
      username: 'tony',
      password: '123'
    },
    {
      id: 2,
      username: 'stark',
      password: '123'
    }
  ]
}

export const stateReducer = (state, action) => {
  console.log('state', state, 'action', action)
  switch (action.type) {
    case 'tasks':
      return {
        ...state,
        forms: action.payload
      }
    case 'edit':
      return {
        ...state,
        edit: action.payload
      }
    default: {
      return state
    }
  }
}
