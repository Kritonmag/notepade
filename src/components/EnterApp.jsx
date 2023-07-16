import React, { useContext } from 'react'

import '../sass/main.scss'
import { AppContext } from '../App';

export const EnterApp = () => {

  const { setLocalBD } = useContext(AppContext);


  return (
    <div className="modalEnterApp">
      <div className="modalEnterApp__content">
        <div className='modalEnterApp__title'>
          <div>Какую базу данных использовать?</div>
        </div>
        <div className="modalEnterApp__btn">
          <div className='local' onClick={() => setLocalBD(true)}>
            LocalBD
          </div>
          <div className='api' onClick={() => setLocalBD(false)}>
            QuintaBD
          </div>
        </div>
      </div>
    </div>
  )
}
