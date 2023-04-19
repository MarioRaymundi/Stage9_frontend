import styled from "styled-components";

export const Container =  styled.section`
  /* margin: 20px 0; */
  margin: 20px 0;
  

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COR.BG700};
    
    padding-bottom: 5px;
    margin-bottom: 20px;

    color: ${({theme}) => theme.COR.GRAY100};
    font-size: 20px;
    font-weight: 400;
  }

`;