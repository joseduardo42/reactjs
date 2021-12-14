import { useState } from 'react'
import logImg from '../../assets/Logo.svg'
import Modal from 'react-modal';

import { Container, Content } from './styles'

export function Header() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionOpen(){
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionOpen() {
    setIsNewTransactionOpen(false);
  }
  
  return (
    <Container>
      <Content>
        <img src={logImg} alt="dtmonet" />
        <button type="button">
          Nova Transação
        </button>

        <Modal isOpen={isNewTransactionOpen}>
          <h2>Cadastrar Transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}