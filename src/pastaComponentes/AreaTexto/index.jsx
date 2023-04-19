import { Container } from "./styles";

export function AreaTexto({valor,...rest}){
  return(
    <Container {...rest}>
        {valor}

    </Container>
  )
}