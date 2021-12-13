import iconImg from '../../assets/Entradas.svg'
import outImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

import { Container } from "./styles";

export function Sumary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconImg} alt=" Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outImg} alt=" Saidas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt=" Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  )
}