import React from 'react'

import '../sass/main.scss';

export const SearchBox = ({ searchText, setSearchText, setSelectedNote }) => {

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
