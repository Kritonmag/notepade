import React, { useContext, useEffect, useState } from 'react';

import '../sass/main.scss'
import { ItemNote } from './ItemNote'
import { AppContext } from '../App';

export const ListItem = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { database, setSelectedNote, filteredNotes, selectedNote, setEditingEnabled } = useContext(AppContext)

  useEffect(() => {
    if (database.length > 0 && selectedItem === null) {
      setSelectedItem(database[0].id);
      setSelectedNote(database[0]);
    }
  }, [database, setSelectedNote]);

  const handleClick = (note) => {
    setEditingEnabled(false)
    setSelectedItem(note.id);
    setSelectedNote(note);
  };

  return (
    <>
      <ul className='list__item'>
        {filteredNotes.map((note) => (
          <ItemNote
            key={note.id}
            note={note}
            selectedNote={selectedNote}
            isSelected={selectedItem === note.id}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
};
