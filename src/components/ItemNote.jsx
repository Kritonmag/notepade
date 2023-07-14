import React from 'react'

import '../sass/main.scss'

export const ItemNote = ({ note, handleClick, selectedNote }) => {

  const handleItemClick = () => {
    handleClick(note);
  };

  return (
    <li
      className={`item__note ${note.id === selectedNote?.id ? 'selected' : ''}`}
      onClick={handleItemClick}>
      <p className='note__text'><strong>{note.text}</strong></p>
      <p className='note__date'>{note.date}</p>
    </li>
  )
}