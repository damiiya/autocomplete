import { useCallback, useState } from "react";
import { DataType } from "./../type";
import { KNDATA_URL } from "../config";
import SearchHead from "../component/SearchHead";

export const KnExample = () => {
  // dropList & keyword
  const [keyword, setKeyword] = useState<string>("");
  const [keyList, setKeyList] = useState<DataType[]>();
  // loading spinner & drop visible
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean>(false);
  // for prop
  const [maxHeight, setMaxHeight] = useState<number>(5);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  // fetch data & filter new keyList
  const fetchData = async (
    kToken: string,
    stringToken: string,
    numberToken: string
  ) => {
    setIsLoading(true);
    const response = await fetch(`${KNDATA_URL}`).then((res) => res.json());
    let keyLists = response.filter(
      (item: DataType) =>
        item.id.toString().includes(numberToken) ||
        item.name.includes(kToken) ||
        item.letter.includes(kToken) ||
        item.email.toLowerCase().includes(stringToken) ||
        item.gender.toLowerCase().includes(stringToken) ||
        item.mbti.toLowerCase().includes(stringToken)
    );
    setKeyList(keyLists);
    setIsLoading(false);
    setIsData(true);
  };

  // input value => ()
  const handleSearch = useCallback(
    (key: string) => {
      const kToken = key;
      const stringToken = key.toLowerCase();
      const numberToken = String(key);
      fetchData(kToken, stringToken, numberToken);
      setKeyword(key);
    },
    [keyword]
  );

  return (
    <>
      <SearchHead
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
        isLoading={isLoading}
        dataSet={keyList}
        isScroll={isScroll}
        isData={isData}
        setIsData={setIsData}
        maxHeight={maxHeight}
        placeHolder="검색어를 입력하세요."
        DropItemStyle={{ backColor: "#f4f8fb", height: 100 }}
        ItemMainTxtStyle={{ color: "#2EA62F", fontSize: 8, fontWeight: 7 }}
        ItemSubTxtStyle={{
          color: "#6B6B6B",
          fontSize: 7,
          fontWeight: 5,
          lineHeight: 10,
        }}
        SubInfoStyle={{ color: "#8E8E8E" }}
      />
    </>
  );
};
