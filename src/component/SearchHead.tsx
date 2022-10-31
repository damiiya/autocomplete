import * as t from "./searchHead.style";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Loading from "./Loading";
import { DataPropsType } from "./../type";

const SearchHead = (props: DataPropsType) => {
  //props
  const {
    keyword,
    setKeyword,
    handleSearch,
    isLoading,
    dataSet,
    isData,
    setIsData,
    placeHolder,
  } = props;

  // keyboard Event
  const [list, setList] = useState([]);
  const [index, setIndex] = useState<number>(-1);
  const focusRef = useRef<HTMLUListElement>(null);
  // drop scroll & height
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number>(5);

  // keyboard event ["ArrowDown", "ArrowUp", "Escape", "Enter"]
  const handleKeyEvent = useCallback(
    (event: React.KeyboardEvent) => {
      if (dataSet && dataSet.length > 0) {
        switch (event.key) {
          case "ArrowDown":
            setIndex(index + 1);
            if (index + 1 === dataSet.length) {
              setIndex(0);
            }
            break;
          case "ArrowUp":
            setIndex(index - 1);
            if (index <= 0) {
              setIndex(dataSet.length - 1);
            }
            break;
          case "Escape":
            setList([]);
            setIndex(-1);
            break;
          case "Enter":
            if (index >= 0) {
              setKeyword(dataSet[index].name);
              setIndex(-1);
              setIsData(false);
            }
            break;
        }
      }
    },
    [dataSet, index, keyword]
  );

  // add & remove keyboard eventListener
  useEffect(() => {
    window.addEventListener("keydown", () => handleKeyEvent, true);
    return () => {
      window.removeEventListener("keydown", () => handleKeyEvent, true);
    };
  }, [handleKeyEvent]);

  // drop scroll check & set height
  useLayoutEffect(() => {
    if (dataSet && dataSet.length > 5) {
      setIsScroll(true);
      setMaxHeight(5);
    } else if (dataSet && dataSet.length < 5) {
      setIsScroll(false);
      setMaxHeight(dataSet.length);
    }
  }, [dataSet]);

  return (
    <t.Container>
      <t.Input
        placeholder={placeHolder}
        value={keyword || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        onKeyDown={handleKeyEvent}
      />
      {isLoading ? <Loading /> : null}
      {isData ? (
        <t.DropContainer
          isScroll={isScroll}
          maxHeight={maxHeight}
          height={props.DropItemStyle?.height}
        >
          <t.DropList ref={focusRef}>
            {dataSet?.map((item, idx) => (
              <t.DropItem
                key={item.name}
                isFocus={index === idx ? true : false}
                backColor={props.DropItemStyle?.backColor}
                height={props.DropItemStyle?.height}
                onClick={() => {
                  setKeyword(item.name);
                  setIsData(false);
                }}
              >
                <t.MainInfo>
                  <t.MainTxt
                    fontSize={props.ItemMainTxtStyle?.fontSize}
                    fontWeight={props.ItemMainTxtStyle?.fontWeight}
                    color={props.ItemMainTxtStyle?.color}
                  >
                    {item.name} ({item.id})
                  </t.MainTxt>
                  <t.SubTxt
                    fontSize={props.ItemSubTxtStyle?.fontSize}
                    fontWeight={props.ItemSubTxtStyle?.fontWeight}
                    color={props.ItemSubTxtStyle?.color}
                    lineHeight={props.ItemSubTxtStyle?.lineHeight}
                  >
                    @{item.email} | {item.mbti || item.age}
                    <br />
                    {item.letter || item.phone + "|" + item.address}
                  </t.SubTxt>
                </t.MainInfo>
                <t.SubInfo color={props.SubInfoStyle?.color}>
                  {item.gender}
                </t.SubInfo>
              </t.DropItem>
            ))}
          </t.DropList>
        </t.DropContainer>
      ) : null}
    </t.Container>
  );
};

export default SearchHead;
