import {FiPlus, FiX} from "react-icons/fi";

import { Container } from "./styles";


export function NovoItem({seNovo, valor, onClick, ...rest}){
  return(
    <Container seNovo={seNovo}>

      <input 
        type="text"
        value={valor} 
        readOnly={!seNovo}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={seNovo ? 'button-add' : 'button-delete'}
      >
        {seNovo ? <FiPlus/> : <FiX/>}
      </button>


    </Container>

  );
}