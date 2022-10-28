import * as t from "./searchHead.style";
import { InputDrop } from "./InputDrop";

const SearchHead = () => {
  return (
    <t.Container>
      <t.InputContainer>
        <t.Input placeholder="검색어를 입력해주세요" />
        <InputDrop />
      </t.InputContainer>
      <t.Button>검색</t.Button>
    </t.Container>
  );
};

export default SearchHead;
