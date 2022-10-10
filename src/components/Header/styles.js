import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;
  border-bottom-width: 1px; 
  border-bottom-style: solid; 
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  padding: 0 123px;

  h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  div{
    display:flex;
    flex-direction: column;
    text-align: right;
    gap: 3px;
  }

  div strong{
    white-space: nowrap; //para impedir que a linha quebre
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 14px;
    line-height: 18px;
  }
  div a{
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;