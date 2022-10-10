import styled from 'styled-components'

export const Container = styled.span`
  color: ${({theme}) => theme.COLORS.WHITE_100};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  padding: 8px 16px;
`;