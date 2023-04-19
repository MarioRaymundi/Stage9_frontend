import styled from "styled-components";

import {Link} from "react-router-dom";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px 90px auto 64px;
  grid-template-areas:
  "marca header"
  "menu procura"
  "menu conteudo"
  "novanota conteudo";

  background-color:${({theme}) => theme.COR.BG800};;
`;

//----------------------------------------------------------

export const Marca = styled.div`
  grid-area: marca;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COR.BG700};
  background-color: ${({theme}) => theme.COR.BG900};

  > h1 {
    font-size: 24px;
    color:  ${({theme}) => theme.COR.ORANGE};
  }
`;

//------------------------------------------------------------

export const Menu = styled.ul`
  grid-area: menu;

  background-color: ${({theme}) => theme.COR.BG900};

  padding-top: 64px;
  text-align: center;
> li {
  margin-bottom: 24px;
  list-style: none;
}
`;

//-----------------------------------------------------------

export const Procura = styled.div`
  grid-area: procura;
  padding: 20px 64px ;
`;

//----------------------------------------------------------

export const Conteudo = styled.div`
  grid-area: conteudo;
  padding: 0 64px;
  overflow-y: auto;
`;

//----------------------------------------------------------

export const NovaNota = styled(Link)`
  grid-area: novanota;

  background-color:  ${({theme}) => theme.COR.ORANGE};
  color:  ${({theme}) => theme.COR.BG900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
    
  }
`;
