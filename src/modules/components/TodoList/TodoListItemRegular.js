import PropTypes from 'prop-types'
// styles
import { Form, ButtonGroup, Button } from 'react-bootstrap'
// icons
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export const TodoListItemRegular = ({
  id,
  text,
  completed,
  dispatch,
  handleEdit
}) => {
  const handleComplete = (id) => {
    dispatch({ type: 'todo/complete', payload: id })
  }

  const handleRemove = (id) => {
    dispatch({ type: 'todo/remove', payload: id })
  }

  return (
    <>
      <Form.Check checked={completed} onChange={() => handleComplete(id)} />
      <Form.Label
        className='flex-grow-1 text-left ml-3 mt-1'
        style={{
          fontSize: '1.1em',
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </Form.Label>
      <ButtonGroup>
        <Button
          variant='none'
          className='text-info'
          onClick={() => handleEdit(id)}
          disabled={completed}
        >
          <FiEdit2 size='1.1em' />
        </Button>
        <Button
          variant='none'
          className='text-danger'
          onClick={() => handleRemove(id)}
        >
          <AiOutlineDelete size='1.1em' />
        </Button>
      </ButtonGroup>
    </>
  )
}

TodoListItemRegular.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}
