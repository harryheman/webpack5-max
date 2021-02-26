import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
// styles
import { Form, ButtonGroup, Button } from 'react-bootstrap'
// icons
import { BsCheckCircle } from 'react-icons/bs'
import { FcCancel } from 'react-icons/fc'

export const TodoListItemEdit = ({ id, dispatch, handleEdit }) => {
  const updateRef = useRef(null)

  useEffect(() => {
    updateRef.current.focus()
  }, [id])

  const handleUpdate = (id) => {
    const text = updateRef.current.value.trim()

    if (text)
      dispatch({
        type: 'todo/update',
        payload: { id, text }
      })

    handleEdit(id)
  }

  const handleKeyDown = (e) => {
    if (e.which === 13) {
      handleUpdate(e.target.dataset.id)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Form.Control type='text' ref={updateRef} data-id={id} />
      <ButtonGroup>
        <Button
          variant='none'
          className='text-success'
          onClick={() => handleUpdate(id)}
        >
          <BsCheckCircle size='1.1em' />
        </Button>
        <Button
          variant='none'
          className='text-danger'
          onClick={() => handleEdit(id)}
        >
          <FcCancel size='1.1em' />
        </Button>
      </ButtonGroup>
    </>
  )
}

TodoListItemEdit.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}
