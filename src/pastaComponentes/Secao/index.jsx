import { Container } from "./styles";

export function Secao({titulo,children}){

  return(
    <Container>
      <h2> {titulo} </h2>
      {children}
    </Container>
  )
}