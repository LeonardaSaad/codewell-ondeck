import styled from "styled-components";

// //* Interface
interface Props {
  $active: boolean;
}

//* Styled-component
//* Navbar
export const Navbar = styled.nav`
  padding: 2vw 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 8vh;
  box-sizing: content-box;
`;

export const Logo = styled.img`
  height: clamp(2em, 2.4vw, 4em);
`

export const Topics = styled.ul`
  display: block;
  display: flex;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const Title = styled.li`
  list-style-type: none;
  padding: clamp(0.1em, 0.7vw, 1em);
  cursor: pointer;
`;

export const IconMenu = styled.img`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
  }
`;

//* DropDown
export const DropDown = styled.ul<Props>`
  display: ${(props) => (props.$active ? "block" : "none")};
  position: absolute;
  padding: 2.4em;
  border-radius: 5%;
  background: #fff;
  width: 30%;
  height: auto;
  left: 20vw;
  top: 5.5vw;
  box-sizing: content-box;

  &:hover{
    display: block;
  }
  
  @media screen and (max-width: 950px) {
    display: ${(props) => (props.$active ? "block" : "none")};
    width: 300px;
    height: 267px;
    top: 6vh;
    right: 10vw;
    left: auto;
    padding:  1em 2em 2em 2em;
    
    img {
      width: 1.2em;
    }

    p {
      font-size: 13px;
    }

    .close {
      margin: 3vw;
    }

    .close:hover{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 437px) {
    width: 65%;
    height: auto;
  }
`;

export const MobileContenerTitle = styled.section`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5em;
  }
`;

export const TitleDrop = styled.p`
  font-weight: 600;
  color: #92a1b1;
  direction: rtl;

  list-style-type: none;
  padding: clamp(0.1em, 0.7vw, 1em);
  cursor: pointer;
`;

export const Category = styled.li`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 0.5vw;

  &:not(:first-of-type) {
    margin-bottom: 0;
  }
  &:not(:last-of-type) {
    margin-bottom: 1.6em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
`;

export const Icon = styled.img`
  height: 1.6em;
`;

export const Subtitle = styled.h3`
  color: #2a4258;
  font-size: clamp(0.9em, 1.1vw, 1.3em);
`;

export const Text = styled.p`
  color: #94a0ab;
  font-size: clamp(.8em, 1vw, 3em);
  line-height: 1.4;
`;

//* Buttom
export const ButtonsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1vw;
  white-space: nowrap;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
