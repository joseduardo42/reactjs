import { Sumary } from "../Sumary";
import { TransictionsTable } from "../TransictionsTable";
import { Container } from "./styles";


export function Dashboard() {
  return(
    <Container>
      <Sumary />
      <TransictionsTable />
    </Container>
  )
}