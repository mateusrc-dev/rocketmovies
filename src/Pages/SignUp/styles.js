import styled from 'styled-components'
import backgroundImg from '../../assets/image.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 803px auto;
  grid-template-areas: "background form";
`;

export const Form = styled.form`
  grid-area: form;
  width: 340px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    text-align: center;
    align-items: center;
  }

  p{
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }

  h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 48px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .inputs{
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  a{
    display: flex;
    justify-content: center;
    margin-top: 42px;
    margin-right: 10px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Background = styled.div`
  grid-area: background;
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

