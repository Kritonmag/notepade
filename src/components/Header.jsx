import React from 'react'

import { Sidebar } from './Sidebar'
import { SearchBox } from './SearchBox'

import '../sass/main.scss'

export const Header = () => {

  return (
    <div className='header'>
      <Sidebar />
      <SearchBox />
    </div>
  )
}
