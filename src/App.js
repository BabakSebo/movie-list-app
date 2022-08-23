import Header from "./components/Header";
import FilmList from "./components/FilmList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <FilmList />
    </Container>
  );
}

export default App;
