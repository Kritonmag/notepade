import React from 'react';

import PlusIcon from '../img/plus.svg';
import NoteIcon from '../img/note.svg';
import DeleteIcon from '../img/delete.svg';

import '../sass/main.scss';

export const Sidebar = ({ setModalOpen, addNewNote, enableEditing, editingEnabled }) => {

  const onClickDel = () => {
    setModalOpen(true)
  }

  return (
    <ul className='sidebar__list'>
      <li className='sidebar__item' onClick={addNewNote}>
        <img src={PlusIcon} alt="plus" />
      </li>
      <li className='sidebar__item' onClick={onClickDel}>
        <img src={DeleteIcon} alt="del" />
      </li>
      <li className={`sidebar__item ${editingEnabled ? ' selectedEdit' : ''}`} onClick={enableEditing}>
        <img src={NoteIcon} alt="edit" />
      </li>
    </ul>
  );
};