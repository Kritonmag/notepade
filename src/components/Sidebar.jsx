import React, { useContext } from 'react';

import PlusIcon from '../img/plus.svg';
import NoteIcon from '../img/note.svg';
import DeleteIcon from '../img/delete.svg';

import '../sass/main.scss';
import { AppContext } from '../App';

export const Sidebar = () => {

  const { database, setModalOpen, addNewNote, enableEditing, editingEnabled } = useContext(AppContext)

  const onClickDel = () => {
    if (database.length > 0) {
      setModalOpen(true)
    }
  }

  console.log(database.length)

  return (
    <ul className='sidebar__list'>
      <li className='sidebar__item sidebar__plus' onClick={addNewNote}>
        <img src={PlusIcon} alt="plus" />
      </li>
      <li className={`sidebar__item ${database.length === 0 ? ' sidebar__notActive' : ' sidebar__del'}`} onClick={onClickDel}>
        <img src={DeleteIcon} alt="del" />
      </li>
      <li className={`sidebar__item ${editingEnabled ? ' selectedEdit' : ''} ${database.length === 0 ? ' sidebar__notActive' : ' sidebar__edit'}`} onClick={enableEditing}>
        <img src={NoteIcon} alt="edit" />
      </li>
    </ul>
  );
};