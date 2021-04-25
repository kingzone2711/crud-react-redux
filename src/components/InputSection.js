import React from 'react';
import './inputSection.style.css';
import { useSelector, useDispatch } from 'react-redux';
import inputActions from '../redux/actions/inputActions'
import noteActions from '../redux/actions/noteActions'
export default function InputSection() {
  const id = useSelector(state => state.input.id);
  const title = useSelector(state => state.input.title);
  const content = useSelector(state => state.input.content);
  const dispatch = useDispatch();
  const addNote = () => {
    if (title && content) {
      dispatch(noteActions.add_note({ title, content }))
    }
    dispatch(inputActions.reset_input())
  }
  const updateNote = () => {
    if (title && content) {
      dispatch(noteActions.update_note(id, {
        title, content
      }))
    }
    dispatch(inputActions.reset_input())
  }
  const deleteNote = () => {
    dispatch(noteActions.delete_note(id))
    dispatch(inputActions.reset_input())
  }
  return (
    <div className='inputSection_container'>
      <input type='text'
        placeholder='not content'
        value={title}
        onChange={e =>
          dispatch(inputActions.set_input_title(e.target.value))
        }
      ></input>
      <textarea
        value={content}
        onChange={e =>
          dispatch(inputActions.set_input_content(e.target.value))
        }
      >
      </textarea>
      <div className='InputSection__container__btnWrapper'>
        <button onClick={id === -1 ? addNote : updateNote}>
          {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
        </button>
        {id !== -1 &&
          <button
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            DELETE NOTE
          </button>
        }
      </div>
    </div>
  )
}
