import React, { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/Botão - Fechar.svg';
import { Container } from './styles';


Modal.setAppElement('#root');



export const NewTransactionModal: React.FC<{ isOpen: boolean, onRequestClose: () => void }> = (props) => {
  return (
    <Container>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button"
          onClick={props.onRequestClose}
          className="react-modal-close">
          <img src={closeImg} />
        </button>
        <Container>
          <h2>Cadastrar transação</h2>
          <input placeholder='Título' />
          <input placeholder='Valor' type="number" />
          <input placeholder='Categoria' />
          <button type='submit'>Cadastrar</button>
        </Container>
      </Modal>

    </Container>
  )

}
