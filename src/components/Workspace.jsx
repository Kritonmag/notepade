import React, { useContext, useEffect, useState } from 'react';

import '../sass/main.scss'
import { AppContext } from '../App';


export const Workspace = () => {

  const { selectedNote, handleSave, editingEnabled, text, setText } = useContext(AppContext)

  useEffect(() => {
    setText(selectedNote?.text || '');
  }, [selectedNote]);

  const handleChangeText = (event) => {
    const updatedText = event.target.value;
    setText(updatedText);
    handleSave(updatedText);
  };

  useEffect(() => {
    if (!editingEnabled) {
      handleSave(text);
    }
  }, [editingEnabled, text]);

  return (
    <div className='workspace'>
      {selectedNote ? (
        <div className='workspace__container'>
          <p className='workspace__date'>{selectedNote.date}</p>
          {editingEnabled ? (
            <textarea
              className='workspace__textarea'
              value={text}
              onChange={handleChangeText}
            />
          ) : (
            <p className='workspace__text'>{selectedNote.text}</p>
          )}
        </div>
      ) : (
        <p className='workspace__empty'>select note</p>
      )}
    </div>
  );
};
