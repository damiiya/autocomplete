import styled from "styled-components";

export const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin-top: 30px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0px 2px 30px #e2e7eb;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    :hover {
      cursor: pointer;
      background-color: #f4f8fb;
    }
    :focus {
      background-color: #f4f8fb;
    }
  }
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  p {
    font-size: 14px;
    font-weight: 500;
    color: #101828;
    margin: 0 0 12px 0;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
`;
export const SubInfo = styled.p`
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  color: #667085;
  width: 180;
`;
