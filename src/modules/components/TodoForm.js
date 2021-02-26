import { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
// styles
import { Container, Form, Button } from 'react-bootstrap'

import { TodoContext } from '@/context'

export function TodoForm() {
  const [text, setText] = useState('')
  const [, dispatch] = useContext(TodoContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    const newTodo = {
      id: nanoid(8),
      text,
      completed: false,
      edit: false,
      show: true
    }

    dispatch({ type: 'todo/add', payload: newTodo })

    setText('')
  }

  return (
    <Container className='mt-4'>
      <h3>Enter todo text</h3>
      <Form className='d-flex' onSubmit={handleSubmit}>
        <Form.Control
          type='text'
          placeholder='Text...'
          value={text}
          onChange={handleChange}
        />
        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>
    </Container>
  )
}
