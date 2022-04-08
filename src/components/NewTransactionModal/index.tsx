import React, { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal';
import closeImg from '../../assets/Botão - Fechar.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { api } from '../../services/api';
import { TransactionContext, TransactionType } from '../../TransactionsContext';


Modal.setAppElement('#root');

export const NewTransactionModal: React.FC<{ isOpen: boolean, onRequestClose: () => void }> = (props) => {

  const { data, setData } = useContext(TransactionContext);

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault();
    const newData: TransactionType = {
      id: data.length + 1, type, title, amount, category, createdAt: new Date().toString()
    }
    setData([...data, newData])
    api.post('/transactions', data)

  }

  return (
    <Container onSubmit={handleCreateNewTransaction}>
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
          <input placeholder='Título' onChange={e => setTitle(title => e.target.value)} value={title} />
          <input placeholder='Valor' type="number" onChange={e => setAmount(value => Number(e.target.value))} value={amount} />
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              Entrada
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saida" />
              Saída
            </RadioBox>
          </TransactionTypeContainer>

          <input placeholder='Categoria' onChange={e => setCategory(category => e.target.value)} value={category} />
          <button type='submit'>Cadastrar</button>
        </Container>
      </Modal>

    </Container>
  )

}
