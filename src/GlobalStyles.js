import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Roboto';
    }
    a{
      color: ${(props) => props.theme.color};
    }
    button{
      border: none;
    }
    *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: transparent;
    }
    *::-webkit-scrollbar-button {
      display: none;
    }
    *::-webkit-scrollbar-track {
      display: none;
    }
    *::-webkit-scrollbar-track-piece {
      display: none;
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.bar};
      border-radius: 5px;
    }
    *::-webkit-scrollbar-corner {
      display: none;
      border-radius: 5px;
    }
`;

export const Body = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  width: 100%;
  height: 100%;
  overflow: scroll;
  transition: ease-in 0.5s;
`;
