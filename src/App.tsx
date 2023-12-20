import styled from "styled-components"
import NavBar from "./Header"
import Home from "./Home"
import Footer from "./Footer"

const Homepage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8em;
`

function App() {

  return (
    <Homepage>
      <NavBar />
      <Home />
      <Footer />
    </Homepage>
  )
}

export default App
 