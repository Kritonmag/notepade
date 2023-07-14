import React, { useEffect, useState } from 'react';

import '../sass/main.scss'


export const Workspace = ({ selectedNote, onSave, editingEnabled, text, setText }) => {

  useEffect(() => {
    setText(selectedNote?.text || '');
  }, [selectedNote]);

  const handleChangeText = (event) => {
    const updatedText = event.target.value;
    setText(updatedText);
    onSave(updatedText);
  };

  useEffect(() => {
    if (!editingEnabled) {
      onSave(text);
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
