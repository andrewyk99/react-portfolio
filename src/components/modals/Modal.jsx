import React from 'react'

function Modal({ closeModal, title }) {
  return (
    <div className='modal__background'>
        <div className='modal__container'>
            <button onClick={() => closeModal(false)}> X </button>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='body'>
                <p>Gif</p>
            </div>
            <div className='footer'>
                <button>GitHub Repo</button>
                <button>Live Demo</button>
            </div>
        </div>
    </div>
  )
}

export default Modal