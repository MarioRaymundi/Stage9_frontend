import { Container } from "./styles";

export function Botao({titulo, ...rest}){

  return(
  <Container 
  type="button"
  {...rest}
  >
    {titulo}
  </Container>
  )
}