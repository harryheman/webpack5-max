import { useContext } from 'react'
// styles
import { Container, ButtonGroup, Button } from 'react-bootstrap'

import { TodoContext } from '@/context'

const CONTROLS = {
  mark: 'markAllCompleted',
  clear: 'clearCompleted'
}

export function TodoControls() {
  const [, dispatch] = useContext(TodoContext)

  const onControlClick = ({ target: { name } }) => {
    dispatch({ type: `control/${CONTROLS[name]}` })
  }

  return (
    <Container className='mt-4 text-secondary'>
      <h4>Controls</h4>
      <ButtonGroup>
        <Button
          variant='outline-secondary'
          name='mark'
          onClick={onControlClick}
        >
          Complete
        </Button>
        <Button
          variant='outline-secondary'
          name='clear'
          onClick={onControlClick}
        >
          Clear
        </Button>
      </ButtonGroup>
    </Container>
  )
}
