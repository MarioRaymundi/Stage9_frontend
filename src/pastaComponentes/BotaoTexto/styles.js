import styled from 'styled-components';
  
export const Container = styled.button`
  background: none;
  color: ${({theme,ativo}) => ativo? theme.COR.ORANGE : theme.COR.GRAY100 };

  border: none;
  font-size: 16px;

`;