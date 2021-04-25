import React from 'react'
import './NoteItem.css'
export default function NoteItem({ title, content, onItemClicked }) {
    return (
        <div className
            className="noteitem-container"
            role="button"
            onClick={onItemClicked}
        >
            <h2>{title}</h2>
            <p>{content}</p>

        </div>
    )
}
