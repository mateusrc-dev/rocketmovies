import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  //grid-template-rows: 116px auto;
  //grid-template-areas: "header" "contentOne" "contentTwo";
  .buttontext{
    display:flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-left: 120px;
    margin-right: 125px;
    margin-bottom: 40px;
    //grid-area: contentOne;
  }
  main{
  //grid-area: contentTwo;
  overflow-y: auto;
  margin: 0px 123px 120px ;  
  }
  main::-webkit-scrollbar {
  width: 2.5rem;
  }
  main::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.PINK};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 1rem solid rgba(0, 0, 0, 0);
  }
  main::-webkit-scrollbar-thumb:hover {
  background-color: ${({theme}) => theme.COLORS.PINK_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 1rem solid rgba(0, 0, 0, 0);
  }
`;

export const Content = styled.div`
  .nameMovieAndStars{
    margin-top: 0px;
    display: flex;
    align-items: center;
    gap: 19px;
    .stars{
      display: flex;
      gap: 10px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
  .userAndTime{
      margin-top: 25px;
      margin-bottom: 41px;
      display: flex;
      align-items: center;
      gap: 8px;
      .user {
        display: flex;
        align-items: center;
        gap: 8px;
        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border-width: 1px; 
          border-style: solid; 
          border-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
      }
      .time{
        display: flex;
        align-items: center;
        gap: 8px;
        svg {
          color: ${({theme}) => theme.COLORS.PINK};
          width: 16px;
          height: 16px;
        }
      }
    }
    
    p {
      text-align: justify;
      color: ${({theme}) => theme.COLORS.WHITE};
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
    }
`;

export const DivisionTwo = styled.div`
    display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 40px;
  `