import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  margin-top: 0;
  border: none;
  background: none;
  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  svg {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 16px;
    margin-right: 8px; 
  }
`;