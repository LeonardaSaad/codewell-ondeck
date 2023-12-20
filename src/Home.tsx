// Styled Components
import { HomeContainer, TextContainer, Title, Subtitle, Text, SmallLogo, Image } from "./style/Home.style";
import { ButtonTryFree } from "./style";

// Icons 
import HeroImg from "./assets/Hero Image.png";
import Capterra from "./assets/Capterra Logo.svg";
import AlternativeTo from "./assets/AlternativeTo Logo.svg";
import Shopify from "./assets/Shopify Bag.svg";

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <Title>
          Ondeck is your remote <span>conference calling tool</span>
        </Title>
        <Subtitle>
          Ondeck is a service that allows you to create beautiful, online, and
          encrypted video calls for you and your remote team.
        </Subtitle>
        <ButtonTryFree className="buttom-home">Try of Free</ButtonTryFree>
        <Text>
          5.0 Rating based on reviews from:
          <span>
            <SmallLogo src={Capterra} alt="" />
            <SmallLogo src={AlternativeTo} alt="" />
            <SmallLogo src={Shopify} alt="" />
          </span>
        </Text>
      </TextContainer>
      <Image src={HeroImg} alt="" />
    </HomeContainer>
  );
};

export default Home;
