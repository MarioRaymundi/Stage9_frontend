import { Container } from "./styles";

export function BotaoTexto({titulo,ativo=false, ...rest}){

  return(
    <Container
     type="button"
      {...rest}
      ativo={ativo}
    >
      {titulo}
    </Container>
  );
}