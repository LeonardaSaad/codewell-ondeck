import styled from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
`;

export const Subtitle = styled.h2`
`;

export const Brands = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4em;

  @media screen and (max-width: 950px) {
    gap: 2em;
  }
`;

export const ImageLogo = styled.img`
  width: 15vw;
  /* min-width: 100px;
  max-width: 230px; */
  
  @media screen and (max-width: 950px) {
    width: 10em;
  }

  @media screen and (max-width: 444px) {
    width: 35vw;
  }
`
