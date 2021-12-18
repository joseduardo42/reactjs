import Modal from 'react-modal';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import closeImg from '../../assets/fechar.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  
  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose ={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
          <button type="button"
            onClick={onRequestClose}
            className="react-modal-close"
            >
              <img src={closeImg} alt="Fechar modal" />
          </button>
          <Container>
            <h2>Cadastrar Transação</h2>

            <input
              placeholder="Título"  
            />

            <input 
              type="number"
              placeholder="Valor"
            />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                onClick={() => { setType('deposit') }}
                isActive={type === 'deposit'}
              >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
              </RadioBox>

              <RadioBox
                type="button"
                onClick={() => { setType('withdraw') }}
                isActive={type === 'withdraw'}

              >
                <img src={outcomeImg} alt="Saida" />
                <span>Saida</span>
              </RadioBox>
            </TransactionTypeContainer>

            <input 
              placeholder="Categoria"
            />

           <button type="submit">
            Cadastrar
           </button>
          </Container>
        
    </Modal>
  )
}