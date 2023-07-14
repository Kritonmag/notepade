import React, { useState } from 'react'
import { Header } from "./components/Header";

import './sass/main.scss'
import { ListItem } from './components/ListItem';
import { Workspace } from './components/Workspace';
import { Modal } from './components/Modal';
import { notes } from './dateDB/indexedDB';

function App() {

  const [database, setDatabase] = useState(notes)
  const [selectedNote, setSelectedNote] = useState(database[0]);
  const [editingEnabled, setEditingEnabled] = useState(false);
  const [text, setText] = useState(selectedNote.text);
  const [searchText, setSearchText] = useState('');
  const [modalOpen, setModalOpen] = useState(false)

  // -------- сохранение текста в workspace
  const handleSave = (updatedText) => {
    const updatedNotes = database.map((note) =>
      note.id === selectedNote.id ? { ...note, text: updatedText } : note
    );
    setDatabase(updatedNotes);
  };

  // -------- удаление ItemNote
  const deleteSelectedNote = () => {
    const noteId = database.findIndex(note => note.id === selectedNote.id);
    if (noteId !== -1) {
      const updatedNotes = [...database];
      updatedNotes.splice(noteId, 1);
      setDatabase(updatedNotes)
      setModalOpen(false)
      setSelectedNote('')
    }
  }

  // -------- добавляем ItemNote
  const addNewNote = () => {
    const newNote = {
      text: '',
      date: updatedDate(new Date()),
      id: database[database.length - 1].id + 2,
    }
    const updatedNotes = [...database];
    updatedNotes.push(newNote);
    setDatabase(updatedNotes);
    setSelectedNote(newNote)
    setEditingEnabled(true)
  }

  // -------- редактируем дату ItemNote
  const updatedDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    return formattedDate
  }

  // -------- изменяем состояние кнопки редактирования
  const enableEditing = () => {

    if (editingEnabled) {
      setSelectedNote({
        text: text,
        date: selectedNote.date,
        id: selectedNote.id
      })
    }

    editingEnabled === true ? setEditingEnabled(false) : setEditingEnabled(true)
  };

  // -------- фильтрация ItemNote
  const filteredNotes = database.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <Header
        setModalOpen={setModalOpen}
        addNewNote={addNewNote}
        enableEditing={enableEditing}
        editingEnabled={editingEnabled}
        searchText={searchText}
        setSearchText={setSearchText}
        setSelectedNote={setSelectedNote}
      />
      {modalOpen ? <Modal deleteSelectedNote={deleteSelectedNote} setModalOpen={setModalOpen} /> : null}

      <div className='flex'>
        <ListItem
          database={database}
          filteredNotes={filteredNotes}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
          setEditingEnabled={setEditingEnabled} />
        <Workspace
          selectedNote={selectedNote}
          onSave={handleSave}
          editingEnabled={editingEnabled}
          text={text}
          setText={setText} />
      </div>
    </div>
  );
}

export default App;
