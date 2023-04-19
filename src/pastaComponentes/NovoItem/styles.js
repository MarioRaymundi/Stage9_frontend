import styled from 'styled-components';
  
export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color:  ${({theme, seNovo}) => seNovo ? "transparent" : theme.COR.BG900};
  color:  ${({theme}) => theme.COR.GRAY300};

  border: ${({theme,seNovo}) => seNovo ? `1px dashed ${theme.COR.GRAY300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete{
    color:  ${({theme}) => theme.COR.RED};
  }
  
  .button-add{
    color:  ${({theme}) => theme.COR.ORANGE};
  }

  >input{
    height: 56px;
    width: 100%;

    padding: 12px;
    color:  ${({theme}) => theme.COR.WHITE};
    background: transparent;
    
    border: none;

    &::placeholder{
      color:  ${({theme}) => theme.COR.GRAY300};
      
    }

  }
`;