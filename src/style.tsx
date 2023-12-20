import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body {
    background: #F3EDE5;
    font-family: 'Inter', sans-serif;
    color: #717170;
    padding: 0 10vw;

    @media screen and (max-width: 400px) {
      padding: 0 5vw;
    }
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  h2{
    font-size: clamp(1em, 1.2vw, 3em);
    font-weight: 400;
  }

  p{
    font-size: clamp(1em, 1.2vw, 3em);
    font-weight: 400;
  }

  li {
    font-size: clamp(1em, 1.1vw, 2.8em);
    font-weight: 400;
  }
`;

export const ButtonTryFree = styled.div`
  background: #133416;
  color: #fff;
  padding: 1.2em 1.6em;
  border-radius: 5%;
  font-weight: 700;
  width: max-content;
  font-size: clamp(1em, 1vw, 2.8em);

  &:hover {
    background-color: #0e2010;
    cursor: pointer;
    color: #dddddd;
  }
`;
