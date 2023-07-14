import React from 'react'

import { Sidebar } from './Sidebar'
import { SearchBox } from './SearchBox'

import '../sass/main.scss'

export const Header = ({ setModalOpen,
  addNewNote,
  enableEditing,
  editingEnabled,
  searchText,
  setSearchText,
  setSelectedNote }) => {
  return (
    <div className='header'>
      <Sidebar
        setModalOpen={setModalOpen}
        addNewNote={addNewNote}
        enableEditing={enableEditing}
        editingEnabled={editingEnabled} />
      <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        setSelectedNote={setSelectedNote} />
    </div>
  )
}
