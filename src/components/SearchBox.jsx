import React, { useContext } from 'react'

import '../sass/main.scss';
import { AppContext } from '../App';

export const SearchBox = () => {

  const { searchText, setSearchText, setSelectedNote } = useContext(AppContext)

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setSelectedNote('')
  };

  return (
    <form className='form'>
      <div className='input__container'>

        <i className='icon__placeholder'></i>
        <input
          className='input'
          type='text'
          value={searchText}
          onChange={handleSearch}
          placeholder='Search' />
      </div>
    </form>
  )
}
