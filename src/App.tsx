import "./App.css";
import styled from "styled-components";
import SearchHead from "./component/searchHead";

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <h1>SEARCH HERE</h1>
        </Header>
        <SearchHead />
        <input></input>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 900px;
  margin: 200px auto;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px auto;
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #3f9bfc;
  }
`;
