import React, { useEffect, useState } from 'react';

import '../sass/main.scss'
import { ItemNote } from './ItemNote'

export const ListItem = ({ database, filteredNotes, setSelectedNote, selectedNote, setEditingEnabled }) => {
  const [selectedItem, setSelectedItem] = useState(null);

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
