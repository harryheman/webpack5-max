import { useContext, useRef, useEffect } from 'react'
// styles
import { Container, Form } from 'react-bootstrap'

import { TodoContext } from '@/context'

export function TodoFilters() {
  const [, dispatch] = useContext(TodoContext)
  const radioRef = useRef(null)

  useEffect(() => {
    radioRef.current.checked = true
  }, [])

  const handleFilterChange = ({ target: { id } }) => {
    dispatch({ type: `filter/${id}` })
  }

  return (
    <Container className='mt-4 text-secondary'>
      <h4>Filters</h4>
      <Form.Check
        inline
        label='All'
        type='radio'
        name='filter'
        id='all'
        onClick={handleFilterChange}
        ref={radioRef}
      />
      <Form.Check
        inline
        label='Active'
        type='radio'
        name='filter'
        id='active'
        onClick={handleFilterChange}
      />
      <Form.Check
        inline
        label='Completed'
        type='radio'
        name='filter'
        id='completed'
        onClick={handleFilterChange}
      />
    </Container>
  )
}
