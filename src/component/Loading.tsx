import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <Container>
      <ClipLoader color="#cdd3de" size={30} />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  margin-top: -45px;
  margin-left: 650px;
`;
