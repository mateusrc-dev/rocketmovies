import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  //grid-template-rows: 116px auto auto;
  //grid-template-areas: "header" "contentOne" "contentTwo";
  .ButtonText{
    //grid-area: contentOne;
    display:flex;
    margin-top: 40px;
    margin-left: 120px;
    margin-bottom: 40px;
  }

  main {
    height: 550px;
    margin: 0 120px;
    overflow-y: auto;
    //grid-area: contentTwo;
  }
  
  main::-webkit-scrollbar {
  width: 15px;
  }
  main::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  main::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  
`;

export const Form = styled.div`
  
  h1{
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 40px;
  }

  .inputs {
    display:flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  .buttons{
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }
`;

export const Section = styled.div`
  h2{
    margin-top: 40px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }
  .items{
    margin-bottom: 40px;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 24px;
    width: 100%;
    height: 88px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px;
    flex-wrap: wrap;
  }
`;

export const ButtonOne = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 16px;
`;

export const ButtonTwo = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.PINK};
  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 16px;
`;