import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 700px;
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 22px;
  font-weight: 400;
  color: #101828;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 30px #e2e7eb;
  ::placeholder {
    color: #cdd3de;
  }
`;
export const Button = styled.button`
  width: 150px;
  height: 60px;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  background-color: #3f9bfc;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #187ae0;
  }
`;
