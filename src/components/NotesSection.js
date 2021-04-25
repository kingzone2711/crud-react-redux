import React from 'react'
import NoteItem from './NoteItem'
import { useSelector, useDispatch } from 'react-redux';
import inputActions from '../redux/actions/inputActions'
import './NotesSection.css'
export default function NotesSection() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)
  const onItemClicked = (item, index) => {
    dispatch(inputActions.set_input_id(index));
    dispatch(inputActions.set_input_content(item.content));
    dispatch(inputActions.set_input_title(item.title));
  }
  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if (item) {
          return (
            <NoteItem
              key={index}
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />)
        }
        return null;
      })}
    </div>
  )
}
