import { Container } from "./styles";
import {Tag} from "../Tag";

export function Nota({dados, ...rest}){

  return(
    <Container {...rest}>
      <h1>{dados.titulo}</h1>

      {
        dados.tags &&
          <footer>
            {
              dados.tags.map(tag => <Tag key={tag.id} titulo={tag.nome}/>)
            }
          </footer>
      }

    </Container>
  );
};