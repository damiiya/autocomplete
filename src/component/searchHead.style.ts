import styled from "styled-components";
import { DropPropsType } from "../type";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Input = styled.input`
  width: 100%;
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
export const DropContainer = styled.div<DropPropsType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) =>
    props.maxHeight &&
    props.maxHeight * (props.height ? props.height : 98) + "px"};
  margin-top: 30px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0px 2px 30px #e2e7eb;
  overflow-y: ${(props) => (props.isScroll ? "scroll" : "hidden")};
  }
`;
export const DropList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const DropItem = styled.li<DropPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => (props.height ? props.height + "px" : "98px")};
  padding: 0 24px;
  background-color: ${(props) =>
    props.isFocus === true ? props.backColor : "#fff"};
  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.backColor ? props.backColor : "#fff"};
  }
`;
export const MainInfo = styled.div<DropPropsType>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "90%")};
`;
export const MainTxt = styled.p<DropPropsType>`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize * 2 + "px" : "14px"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight * 100 : 400)};
  color: ${(props) => (props.color ? props.color : "#000")};
  margin: 0 0 12px 0;
`;
export const SubTxt = styled.span<DropPropsType>`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize * 2 + "px" : "14px"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight * 100 : 400)};
  color: ${(props) => (props.color ? props.color : "#000")};
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight * 2 + "px" : "14px"};
`;
export const SubInfo = styled.p<DropPropsType>`
  text-align: right;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize * 2 + "px" : "14px"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight * 100 : 400)};
  width: ${(props) => (props.width ? props.width : "10%")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
