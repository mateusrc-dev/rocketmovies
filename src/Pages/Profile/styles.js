import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  header {
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    display: flex;
    align-items: center;
    div{
    margin-left: 144px;
    }
  }
`;

export const Form = styled.div`
  width: 336px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 8px;
  div:nth-child(3) {
    margin-top: 24px;
  }
  button{
    margin-top: 24px;
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -95px auto 64px;
  width: 186px;
  height: 186px;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label{
    width: 48px;
    height: 48px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    position: absolute;  
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
  }
  input {
    display: none;
  }
  svg {
    width: 20px;
    height: 20px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  }
`;