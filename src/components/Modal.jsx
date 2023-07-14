import React from 'react'

import '../sass/main.scss'

export const Modal = ({ deleteSelectedNote, setModalOpen }) => {

  return (
    <div className="modal">
      <div className="modal__content">
        <div className='modal__title'>
          <div>Delete a note ?</div>
        </div>
        <div className="modal__btn">
          <div className='delete' onClick={deleteSelectedNote}>
            Delete
          </div>
          <div className='cancel' onClick={() => setModalOpen(false)}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
