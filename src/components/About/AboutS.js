import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media screen and (orientation: landscape) {
  }
`;

export const Circle = styled.img`
  height: 90vw;
  position: absolute;
  top: -40vw;
  right: -40vw;
  transform: scaleX(-1);
  filter: ${(props) => props.theme.convert1};

  @media screen and (orientation: landscape) {
    height: 45vw;
    position: absolute;
    top: -20vw;
    right: -15vw;
  }
`;

export const BgCut = styled.img`
  position: absolute;
  top: -80vw;
  width: 150%;
  z-index: 0;
  @media screen and (orientation: landscape) {
    transform: rotate(-10deg);
    width: 110%;
    top: -55vw;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media screen and (orientation: landscape) {
    min-height: 130vh;
  }
`;

export const Div1 = styled(Div)`
  min-height: 100vh;
  justify-content: center;
`;

export const Div2 = styled(Div)`
  position: relative;
  background: #000;
`;

export const H2 = styled.h2`
  position: relative;
  transform: rotate(-10deg);
  right: 20vw;
  bottom: 10vh;
`;

export const Proramslng = styled.ul`
  width: 60%;
  height: 40vh;
  display: flex;
  position: relative;
  right: 8vw;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${(props) => props.theme.background};
  border-radius: 50px;
  z-index: 1;
  border: solid ${(props) => props.theme.pallete2};
  -webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 1);
  box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.1);

  @media screen and (orientation: landscape) {
    flex-direction: row;
    overflow-x: scroll;
  }
`;

export const Li = styled.li`
  width: 90%;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: ease-in 0.1s;
  img {
    height: 20vw;
    filter: ${(props) => props.theme.convert2}
      drop-shadow(8px 10px 3px rgba(0, 0, 0, 0.3));
  }
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (orientation: landscape) {
    flex-direction: column;
    img {
      height: 10vw;
    }
  }
`;
