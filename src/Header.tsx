//* Styled
import {
  Navbar,
  Logo,
  Topics,
  Title,
  DropDown,
  Category,
  Icon,
  Content,
  Subtitle,
  Text,
  ButtonsContainer,
  TitleDrop,
  MobileContenerTitle,
  IconMenu,
} from "./style/Header.style";
import { ButtonTryFree } from "./style";

//* Assets
import Ondeck from "./assets/Logo.svg";
import { useState } from "react";
import Spense from "./assets/Spense_Icon.svg";
import Fiber from "./assets/Fiber_Icon.svg";
import Gradie from "./assets/Gradie_Icon.svg";
import Close from "./assets/Close.svg";
import Menu from "./assets/Menu.svg";

const menuItems = [
  {
    icon: Spense,
    title: "Spense",
    description:
      "Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts",
  },
  {
    icon: Fiber,
    title: "Fiber Landing Page",
    description:
      "An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.",
  },
  {
    icon: Gradie,
    title: "Gradie Sign Up Page",
    description:
      "Gradie is a simple sign up page, great to practice centering layouts.",
  },
];

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Navbar>
      <Logo src={Ondeck} alt="Ondeck logo" />
      <IconMenu src={Menu} alt="Menu icon" onClick={() => setDropdown(!dropdown)} />
      <Topics>
        <Title
          onMouseOver={() => setDropdown(true)}
          onMouseOut={() => setDropdown(false)}
        >
          Products
        </Title>
        <Title>Challenges</Title>
        <Title>Resourses</Title>
        <Title>Other Links</Title>
      </Topics>
      <DropDown
        onMouseOver={() => setDropdown(true)}
        onMouseOut={() => setDropdown(false)}
        $active={dropdown}
      >
        <MobileContenerTitle>
          <TitleDrop>PRODUCTS</TitleDrop>
          <Icon className="close" src={Close} alt="Close icon" onClick={() => setDropdown(false)} />
        </MobileContenerTitle>
        {menuItems.map(({icon, title, description}, index) => (
          <Category key={index}>
            <Icon src={icon} alt={`${title} icon`} />
            <Content>
              <Subtitle>{title}</Subtitle>
              <Text>{description}</Text>
            </Content>
          </Category>
        ))}
      </DropDown>
      <ButtonsContainer>
        <Title>Sign in</Title>
        <ButtonTryFree>Try of free</ButtonTryFree>
      </ButtonsContainer>
    </Navbar>
  );
};

export default Header;
