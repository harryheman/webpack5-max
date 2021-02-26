import produce from 'immer'

export const todoProducer = produce((draft, action) => {
  const { type, payload } = action
  const { todos } = draft

  // helper
  const findTodo = (id, index = false) => {
    const fn = (i) => i.id === id
    return !index ? todos.find(fn) : todos.findIndex(fn)
  }

  switch (type) {
    case 'todo/add': {
      todos.unshift(payload)
      break
    }
    case 'todo/complete': {
      const todo = findTodo(payload)
      todo.completed = !todo.completed
      break
    }
    case 'todo/remove': {
      const index = findTodo(payload, true)
      todos.splice(index, 1)
      break
    }
    case 'todo/edit': {
      const todo = findTodo(payload)
      todo.edit = !todo.edit
      break
    }
    case 'todo/update': {
      const { id, text } = payload
      const todo = findTodo(id)
      todo.text = text
      break
    }
    case 'filter/all': {
      todos.forEach((todo) => (todo.show = true))
      break
    }
    case 'filter/active': {
      todos.forEach((todo) =>
        todo.completed ? (todo.show = false) : (todo.show = true)
      )
      break
    }
    case 'filter/completed': {
      todos.forEach((todo) =>
        todo.completed ? (todo.show = true) : (todo.show = false)
      )
      break
    }
    case 'control/markAllCompleted': {
      todos.forEach((todo) => (todo.completed = true))
      break
    }
    case 'control/clearCompleted': {
      return { ...draft, todos: todos.filter((todo) => !todo.completed) }
    }
    default:
      return draft
  }
})
