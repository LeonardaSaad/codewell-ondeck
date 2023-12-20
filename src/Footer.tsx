//* Styled
import {FooterContainer, Subtitle, Brands, ImageLogo} from './style/Footer.style'

import Net from "./assets/Netflix Logo.svg";
import Shop from "./assets/Shopify Logo.svg";
import spo from "./assets/Spotify Logo.svg";
import wall from "./assets/Walmart Logo.svg";


const Footer = () => {
  return (
    <FooterContainer>
      <Subtitle>Trusted by 3+ million people at companies like</Subtitle>
      <Brands>
        <ImageLogo src={Net} alt="" />
        <ImageLogo src={Shop} alt="" />
        <ImageLogo src={spo} alt="" />
        <ImageLogo src={wall} alt="" />
      </Brands>
    </FooterContainer>
  );
};

export default Footer;
