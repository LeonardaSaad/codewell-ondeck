import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6%;

  .buttom-home{
    margin-bottom: 1em;
  }
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  p {
    font-size: clamp(1em, 1.2vw, 3em);
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: clamp(2em, 3.8vw, 3.8em);
  span {
    color: #f29f05;
  }
`;

export const Subtitle = styled.p``;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vw;
  span {
    display: flex;
    gap: 1em;
    width: min-content;
  }
`;

export const SmallLogo = styled.img`
  height: 1.5em;
`;

export const Image = styled.img`
  width: 25vw;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;
