import { createContext, useReducer } from 'react'
// reducer
import { todoProducer } from '@/reducer'

const initialState = {
  todos: [
    { id: '1', text: 'Eat', completed: true, edit: false, show: true },
    { id: '2', text: 'Sleep', completed: false, edit: false, show: true },
    { id: '3', text: 'Repeat', completed: false, edit: false, show: true }
  ]
}

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoProducer, initialState)

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}
