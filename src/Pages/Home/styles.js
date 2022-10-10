import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  main {
    grid-area: content;
    margin: 50px 123px 60px ;  
  }
`;

export const Content = styled.div`

  .myMoviesAndAddMovie {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .listMovies{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .listMovies::-webkit-scrollbar {
  width: 15px;
  }
  .listMovies::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.PINK};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  .listMovies::-webkit-scrollbar-thumb:hover {
  background-color: ${({theme}) => theme.COLORS.PINK_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 207px;
  height: 48px;
  border: 0;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;  
`;

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;
  width: 100%;
  background: ${({theme}) => theme.COLORS.BACKGROUND_600};
  color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 16px;
  margin-bottom: 24px;
  .tags {
    display: flex;
    gap: 8px;
  }
  .stars{
      margin-top: 8px;
      display: flex;
      gap: 10px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
    p {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: justify;
      color: ${({theme}) => theme.COLORS.GRAY_200};
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      
      display: -webkit-box;
      text-overflow: ellipsis; 
      overflow: hidden; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
      
    }
`;

export const Tag = styled.span`
  color: ${({theme}) => theme.COLORS.WHITE_100};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  padding: 8px 16px;
`;