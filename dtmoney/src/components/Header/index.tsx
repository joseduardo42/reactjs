import logImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logImg} alt="dtmonet" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}