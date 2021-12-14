import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles'

export function TransictionsTable () {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='deposit'>R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>12/12/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className='withdrow'>R$12000,00</td>
            <td>Casa</td>
            <td>12/12/2021</td>
          </tr>

        </tbody>
      </table>

    </Container>
  );


}