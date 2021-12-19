import iconImg from '../../assets/Entradas.svg'
import outImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Sumary() {
  const { transactions } = useTransactions();


  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  })
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconImg} alt=" Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outImg} alt=" Saidas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt=" Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}