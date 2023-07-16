import React, { useEffect, useState } from 'react'
import { Header } from "./components/Header";
import { ListItem } from './components/ListItem';
import { Workspace } from './components/Workspace';
import { Modal } from './components/Modal';
import { notes } from './dateDB/indexedDB';

import './sass/main.scss'
import { EnterApp } from './components/EnterApp';

export const AppContext = React.createContext()

function App() {
  const [localBD, setLocalBD] = useState(undefined)
  const [database, setDatabase] = useState([])
  const [selectedNote, setSelectedNote] = useState(null);
  const [editingEnabled, setEditingEnabled] = useState(false);
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [modalOpen, setModalOpen] = useState(false)

  const { v4: uuidv4 } = require('uuid');

  const URL = 'https://quintadb.ru/apps/ddISo5W7biW7_dPSklpfWE/dtypes/entity/bjbSkyW51ps4oEF8kuaInM.json?rest_api_key=bvCh3cUmnhW6PzW7ldSmkV&amp;view='
  const fieldNames = {
    cOWPKlgSjfWQFcUcFdVSoK: 'text',
    c1lK0mWRPebikCW4rItSkI: 'date',
  };

  useEffect(() => {
    if (localBD) {
      setDatabase(notes);
    }
  }, [localBD]);

  useEffect(() => {
    if (localBD === false) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          const noteData = data.records.map((record) => {
            const noteRecord = {};
            for (const fieldId in record.values) {
              const fieldName = fieldNames[fieldId] || fieldId;
              noteRecord[fieldName] = record.values[fieldId];
            }
            noteRecord.added_by = record.added_by;
            noteRecord.approved = record.approved;
            noteRecord.id = record.id;
            return noteRecord;
          });

          setDatabase(noteData);
        })
        .catch((error) => {
          console.error('Ошибка при выполнении запроса:', error);
        });
    }
  }, [localBD]);
  //------------------------------

  useEffect(() => {
    if (database.length > 0) {
      setSelectedNote(database[0]);
      setText(database[0].text);
    }
  }, [])

  // -------- сохранение текста в workspace
  const handleSave = (updatedText) => {
    const updatedNotes = database.map((note) =>
      note.id === selectedNote?.id ? { ...note, text: updatedText } : note
    );
    setDatabase(updatedNotes);
  };

  // -------- удаление ItemNote

  const deleteSelectedNote = () => {
    const noteId = database.findIndex((note) => note.id === selectedNote?.id);
    if (noteId !== -1) {
      const updatedNotes = [...database];
      updatedNotes.splice(noteId, 1);
      setDatabase(updatedNotes)
      setModalOpen(false)
      setEditingEnabled(false)
      setSelectedNote('')
    }
  }

  // -------- добавляем ItemNote

  const addNewNote = () => {
    let id
    if (database.length > 0) {
      id = database[database.length - 1].id + 2
    } else {
      id = 1
    }
    const newNote = {
      text: '',
      date: updatedDate(new Date()),
      id: id,
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

  const contextValue = {
    database,
    filteredNotes,
    setSelectedNote,
    selectedNote,
    setEditingEnabled,
    handleSave,
    editingEnabled,
    text,
    setText,
    deleteSelectedNote,
    setModalOpen,
    addNewNote,
    enableEditing,
    searchText,
    setSearchText,
    setLocalBD
  };

  return (
    <div className="container">
      <AppContext.Provider value={contextValue}>

        {localBD === undefined ? <EnterApp /> : null}

        <Header />
        {modalOpen && selectedNote ? <Modal /> : null}
        {database.length === 0 === 0 ? null : (
          <div className='flex'>

            <ListItem />
            <Workspace />
          </div>
        )}

      </AppContext.Provider>
    </div>
  );
}

export default App;
