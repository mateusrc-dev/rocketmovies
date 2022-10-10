import styled from 'styled-components'

export const Container = styled.section`
  margin: 50px 0 28px;
  h2 {
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }
`;