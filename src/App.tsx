import "./App.css";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { EnExample } from "./routes/EnExample";
import { KnExample } from "./routes/KnExample";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Container>
        <ButtonWrapper>
          <Button onClick={() => navigate("/enExample")}>영어</Button>
          <Button onClick={() => navigate("/knExample")}>한국어</Button>
        </ButtonWrapper>
        <Header>
          <h1>SEARCH HERE</h1>
        </Header>
        <Routes>
          <Route path="/enExample" element={<EnExample />}></Route>
          <Route path="/knExample" element={<KnExample />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 700px;
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
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  width: 70px;
  color: #83a6db;
  background-color: #f4efeb;
  padding: 5px;
  margin: 5px;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;
